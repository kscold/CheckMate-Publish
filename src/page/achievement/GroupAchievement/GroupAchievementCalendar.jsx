import React, { useState, useEffect } from "react";
import "./GroupAchievementCalendar.scss";
import leftButton from "../../achievement/left_but.png";
import rightButton from "../../achievement/right_but.png";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

const GroupAchievementCalendar = ({ achievements }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [filteredAchievements, setFilteredAchievements] = useState([]);

  useEffect(() => {
    const filtered = achievements.filter(
      (a) => new Date(a.date).getMonth() === selectedMonth
    );
    setFilteredAchievements(filtered);
  }, [selectedMonth, achievements]);

  const getPercentage = (date) => {
    const achievement = filteredAchievements.find((a) => a.date === date);
    return achievement ? achievement.percentage : null;
  };

  const renderDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(2024, selectedMonth, 1);
    const numDaysInMonth = new Date(2024, selectedMonth + 1, 0).getDate();
    const firstDayIndex = firstDayOfMonth.getDay();

    const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
    const prevMonthYear = selectedMonth === 0 ? 2023 : 2024;
    const numDaysInPrevMonth = new Date(
      prevMonthYear,
      prevMonth + 1,
      0
    ).getDate();

    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="day empty-day">
          {numDaysInPrevMonth - i}
        </div>
      );
    }

    for (let i = 1; i <= numDaysInMonth; i++) {
      const dayString = `2024-${(selectedMonth + 1)
        .toString()
        .padStart(2, "0")}-${i.toString().padStart(2, "0")}`;
      const percentage = getPercentage(dayString);
      const hasAchievement = percentage !== null;
      days.push(
        <div key={i} className="day">
          <div
            className="circle"
            style={{
              background: hasAchievement
                ? `conic-gradient(#333 ${percentage}%, #f0f0f0 0)`
                : "#ffffff",
              color: hasAchievement ? "white" : "#858484",
            }}
          >
            <div className="day-number">{i}</div>
          </div>
        </div>
      );
    }

    const numDaysRendered = firstDayIndex + numDaysInMonth;
    const nextMonthDaysToShow = 42 - numDaysRendered;

    for (let i = 1; i <= nextMonthDaysToShow; i++) {
      days.push(
        <div key={`next-${i}`} className="day empty-day">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button
          className="nav-button"
          onClick={() => setSelectedMonth((selectedMonth + 11) % 12)}
        >
          <img src={leftButton} alt="Previous Month" />
        </button>
        <div className="month-display">{`2024년 ${months[selectedMonth]}`}</div>
        <button
          className="nav-button"
          onClick={() => setSelectedMonth((selectedMonth + 1) % 12)}
        >
          <img src={rightButton} alt="Next Month" />
        </button>
      </div>
      <div className="calendar">
        <div className="header">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="day-header">
              {day}
            </div>
          ))}
        </div>
        <div className="body">{renderDays()}</div>
      </div>
    </div>
  );
};

export default GroupAchievementCalendar;
