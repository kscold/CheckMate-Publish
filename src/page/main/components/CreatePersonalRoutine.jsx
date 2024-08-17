import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRoutine } from '../../../redux/routine';
import { ReactComponent as More } from '../../../assets/main/More.svg';

const CreatePersonalRoutine = ({ routineData, setRoutineData }) => {
  const dispatch = useDispatch();
  const newRoutine = useSelector((state) => state.routine.newRoutine);

  const handleDaySelection = (day) => {
    const updatedDays = newRoutine.recurringDays.includes(day)
      ? newRoutine.recurringDays.filter((d) => d !== day)
      : [...newRoutine.recurringDays, day];

    dispatch(
      setNewRoutine({
        ...newRoutine,
        recurringDays: updatedDays,
      })
    );
  };

  const handleAddRoutine = () => {
    if (
      newRoutine.title &&
      newRoutine.time &&
      newRoutine.recurringDays.length >= 2
    ) {
      setRoutineData([...routineData, newRoutine]);
      dispatch(setNewRoutine({ title: '', time: '', recurringDays: [] })); // Reset new routine
    } else {
      alert('Please fill in all fields and select at least two days.');
    }
  };

  return (
    <>
      <div className="main-page-detail-routine-add-title">루틴 추가하기</div>
      <div className="main-page-detail-routine-add-container">
        <input
          placeholder="12:00"
          className="main-page-detail-routine-add-input-time"
          value={newRoutine.time}
          onChange={(e) =>
            dispatch(setNewRoutine({ ...newRoutine, time: e.target.value }))
          }
        />
        <input
          placeholder="목표를 적어보세요."
          className="main-page-detail-routine-add-input-content"
          value={newRoutine.title}
          onChange={(e) =>
            dispatch(setNewRoutine({ ...newRoutine, title: e.target.value }))
          }
        />
      </div>
      <div className="main-page-detail-routine-day-title-container">
        <div className="main-page-detail-routine-day-title">실천 요일</div>
        <div className="main-page-detail-routine-day-sub-title">
          최소 2일 선택
        </div>
      </div>
      <div className="main-page-detail-routine-day-container">
        {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
          <div
            key={index}
            className={`main-page-detail-routine-day-item ${
              newRoutine.recurringDays.includes(day) ? 'selected' : ''
            }`}
            onClick={() => handleDaySelection(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="main-page-detail-routine-alert-title">알림 설정</div>
      <hr className="main-page-detail-routine-alert-bottom-hr" />

      <div className="main-page-detail-routine-prev-container">
        <div className="main-page-detail-routine-prev-title">기존 루틴</div>
        {routineData.map((event, index) => (
          <div
            className="main-page-detail-routine-prev-info-container"
            key={index}
          >
            <div className="main-page-detail-routine-prev-info-time">
              {event.time}
            </div>
            <div className="main-page-detail-routine-prev-info-content">
              {event.title}
              <More />
            </div>
          </div>
        ))}
      </div>
      <div className="main-page-detail-routine-add-button-container">
        <button
          className="main-page-detail-routine-add-button"
          onClick={handleAddRoutine}
        >
          루틴 추가
        </button>
      </div>
    </>
  );
};

export default CreatePersonalRoutine;
