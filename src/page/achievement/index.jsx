import React from "react";
import CalendarComponent from "./Calendar/CalendarComponent";
import ProgressBar from "./ProgressBar/ProgressBar";
import MonthlyAchievementGraph from "./MonthlyAchievementGraph/MonthlyAchievementGraph";
import "./Index.scss";
import mockData from "./mockData.json";
const { achievements } = mockData;
const monthlyAchievements = [
  { month: "1월", percentage: 80 },
  { month: "2월", percentage: 80 },
  { month: "3월", percentage: 50 },
  { month: "4월", percentage: 80 },
  { month: "5월", percentage: 100 },
  { month: "6월", percentage: 70 },
  { month: "7월", percentage: 0 },
  { month: "8월", percentage: 0 },
  { month: "9월", percentage: 0 },
  { month: "10월", percentage: 0 },
  { month: "11월", percentage: 0 },
  { month: "12월", percentage: 0 },
];

const calculateAverage = (data) => {
  const total = data.reduce((sum, day) => sum + day.percentage, 0);
  return Math.round(total / data.length);
};

const Achievement = () => {
  const averageAchievement = calculateAverage(achievements);

  return (
    <div className="app-container">
      <CalendarComponent achievements={achievements} />
      <div>이번달 달성률✨</div>
      <ProgressBar percentage={averageAchievement} />
      <div>월간 달성 그래프 📊</div>
      <MonthlyAchievementGraph monthlyAchievements={monthlyAchievements} />
    </div>
  );
};

export default Achievement;
