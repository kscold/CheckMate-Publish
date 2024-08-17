import React from "react";
import "./MonthlyAchievementGraph.scss";

const MonthlyAchievementGraph = ({ monthlyAchievements }) => {
  return (
    <div className="graph-container">
      <div className="graph-content">
        <div className="bars-container">
          {monthlyAchievements.map((achievement, index) => (
            <div key={index} className="bar-column">
              <div className="bar-wrapper">
                <div
                  className="bar"
                  style={{ height: `${achievement.percentage}%` }}
                >
                  {achievement.percentage > 0 && (
                    <span className="bar-percentage">
                      {achievement.percentage}%
                    </span>
                  )}
                </div>
              </div>
              <div className="bar-month">{achievement.month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyAchievementGraph;
