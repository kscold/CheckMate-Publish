import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSection } from '../../redux/main';
import { ReactComponent as ArrowfrontIcon } from '../../assets/main/Arrowfront.svg';
import { ReactComponent as ArrowbackIcon } from '../../assets/main/Arrowback.svg';

import MainPickerDay from './components/MainPickerDay';
import MainPersonalRoutine from './components/MainPersonalRoutine';
import MainGroupRoutine from './components/MainGroupRoutine';

import groupDayData from '../../api/mock/groupDay.json'; // 목업 데이터
import dayData from '../../api/mock/day.json'; // 목업 데이터
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [calendarData, setCalendarData] = useState(null); // 초기 상태를 null로 설정
  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleString('ko-KR', { weekday: 'short' })
  ); // 현재 요일로 설정
  const [currentWeekDates, setCurrentWeekDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [newRoutineInput, setNewRoutineInput] = useState(''); // 새로운 루틴 입력 값을 관리
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 상태 확인
  const navigate = useNavigate();

  const selectedSection = useSelector(
    (state) => state.selectedSection.selectedSection
  );
  const dispatch = useDispatch();

  // 현재 주의 날짜 계산 함수
  const getCurrentWeekDates = () => {
    const now = new Date();
    const startOfWeek = now.getDate() - now.getDay() + 1; // 월요일 시작
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        startOfWeek + i
      );
      weekDates.push({
        date: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        day: currentDate.toLocaleString('ko-KR', { weekday: 'short' }),
      });
    }
    return weekDates;
  };

  // 주차별 날짜 계산 및 설정
  useEffect(() => {
    const weekDates = getCurrentWeekDates();
    setCurrentWeekDates(weekDates);
    setCurrentMonth(weekDates[0].month);
    setCurrentYear(weekDates[0].year);
  }, []);

  // 로그인 상태 확인 및 비로그인 시 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  // 목업 데이터를 설정하는 useEffect
  useEffect(() => {
    setCalendarData({
      personal: dayData.personal || [], // 안전하게 빈 배열로 초기화
      groups: groupDayData.groups || [], // 안전하게 빈 배열로 초기화
    });
    dispatch(setSelectedSection('view1'));
  }, [dispatch]);

  // 개인 루틴 데이터를 선택된 요일에 맞게 필터링
  const personalDayEvents = useMemo(() => {
    if (!calendarData) return [];
    const allEvents = [];

    (calendarData.personal || []).forEach((event) => {
      event.recurringDays.forEach((dayInfo) => {
        allEvents.push({
          ...event,
          weekday: dayInfo.day,
          success: dayInfo.success,
        });
      });
    });

    return allEvents.filter((event) => event.weekday === selectedDay);
  }, [calendarData, selectedDay]);

  // 그룹 루틴 데이터를 선택된 요일에 맞게 필터링
  const groupDayEvents = useMemo(() => {
    return (
      (calendarData?.groups || []).map((group) => ({
        id: group.id,
        name: group.group,
        month: group.month,
        days: (group.days || [])
          .filter((day) => day.weekday === selectedDay)
          .flatMap((day) => day.events),
      })) || []
    );
  }, [calendarData, selectedDay]);

  // 선택된 요일을 변경
  const onClickSelectedDay = (weekday) => {
    setSelectedDay(weekday);
  };

  // 루틴 데이터 업데이트 로직
  const updateDayEvents = (updatedEvents, dayEventsType, groupId) => {
    const updatedCalendarData = {
      ...calendarData,
      [dayEventsType]: (calendarData[dayEventsType] || []).map((entry) => {
        if (dayEventsType === 'groups' && entry.id === groupId) {
          return {
            ...entry,
            days: (entry.days || []).map((day) =>
              day.weekday === selectedDay
                ? { ...day, events: updatedEvents }
                : day
            ),
          };
        }
        if (dayEventsType === 'personal') {
          return {
            ...entry,
            recurringDays: entry.recurringDays.map((dayInfo) =>
              dayInfo.day === selectedDay
                ? {
                    ...dayInfo,
                    success: updatedEvents.some(
                      (e) => e.title === entry.title && e.success
                    ),
                  }
                : dayInfo
            ),
          };
        }
        return entry;
      }),
    };
    setCalendarData(updatedCalendarData);
  };

  // 개인 및 그룹 이벤트의 평균 달성률 계산 함수
  const calculateCompletionPercentage = (personalEvents, groupEvents) => {
    const totalEvents = personalEvents.length + groupEvents.length;
    if (totalEvents === 0) return 0;

    const completedEvents =
      personalEvents.filter((event) => event.success).length +
      groupEvents.filter((event) => event.success).length;

    return (completedEvents / totalEvents) * 100;
  };

  // 선택된 요일의 달성률 계산
  const dayEvents = useMemo(() => {
    if (!calendarData) return [];

    return currentWeekDates.map((dayObj) => {
      // Filter personal events based on the selected day
      const personalEvents = (calendarData.personal || []).flatMap((event) =>
        event.recurringDays
          .filter((dayInfo) => dayInfo.day === dayObj.day)
          .map((dayInfo) => ({
            ...event,
            success: dayInfo.success,
          }))
      );

      // Filter group events based on the selected day
      const groupEvents = (calendarData.groups || []).flatMap((group) =>
        (group.days || [])
          .filter((day) => day.weekday === dayObj.day)
          .flatMap((day) => day.events || [])
      );

      // Calculate the combined completion percentage
      const completionPercentage = calculateCompletionPercentage(
        personalEvents,
        groupEvents
      );

      return {
        ...dayObj,
        personalEvents,
        groupEvents,
        completionPercentage,
      };
    });
  }, [calendarData, currentWeekDates]);

  if (!calendarData) {
    return <div>로딩중...</div>; // 데이터 로딩 중일 때 표시
  }

  return (
    <div className="main-page-container">
      <div className="main-page-calendar-container">
        <div className="main-page-calendar-title-container">
          <ArrowbackIcon />
          <h1 className="main-page-calendar-title-h1">
            {currentYear}년 {currentMonth}월
          </h1>
          <ArrowfrontIcon />
        </div>
        <div className="main-page-calendar-days-container">
          {dayEvents.map((dayEvent, index) => (
            <MainPickerDay
              key={index}
              day={dayEvent.date}
              weekday={dayEvent.day}
              selectedDay={selectedDay}
              onClickSelectedDay={onClickSelectedDay}
              completionPercentage={dayEvent.completionPercentage}
              hasTodos={
                dayEvent.personalEvents.length + dayEvent.groupEvents.length > 0
              }
            />
          ))}
        </div>
      </div>
      <div className="main-page-detail-container">
        <MainPersonalRoutine
          routineData={personalDayEvents}
          setRoutineData={(updatedEvents) =>
            updateDayEvents(updatedEvents, 'personal')
          }
        />

        {selectedSection === 'view1' && (
          <div className="main-page-detail-group-routine-container">
            <div className="main-page-detail-group-routine-title">
              진행중인 소모임
            </div>
            {groupDayEvents.map((group) => (
              <MainGroupRoutine
                key={group.id}
                groupName={group.name}
                routineData={group.days}
                setRoutineData={(updatedEvents) =>
                  updateDayEvents(updatedEvents, 'groups', group.id)
                }
                newRoutineInput={newRoutineInput}
                setNewRoutineInput={setNewRoutineInput}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
