import React from "react";
import styles from "./GroupAchievementGoalProgress.module.scss";

const GroupAchievementGoalProgress = ({
  myAchievement,
  averageAchievement,
  goalPeriod,
  achievedDays,
}) => {
  return (
    <div className={styles.goalProgressContainer}>
      <p className={styles.title}>목표 달성률✨</p>
      <div className={styles.achievementBarContainer}>
        <div
          className={styles.progressContainer}
          style={{ position: "relative" }}
        >
          <div
            className={styles.progressBar}
            style={{ width: `${averageAchievement}%` }}
          />
          <div
            className={styles.myAchievementBar}
            style={{ width: `${myAchievement}%` }}
          />
          <div
            className={styles.averageAchievementLine}
            style={{ left: `${averageAchievement}%` }}
          />
          <div
            className={styles.averageAchievementLabel}
            style={{ left: `${averageAchievement}%` }}
          >
            평균 달성률: {averageAchievement}%
          </div>
        </div>
        <div className={styles.myAchievementLabel}>{myAchievement}%</div>
      </div>

      <div className={styles.goalInfoContainer}>
        <div className={styles.goalInfoBox}>
          <div>목표 기간</div>
          <div>{goalPeriod}일</div>
        </div>
        <div className={styles.goalInfoBox2}>
          <div>
            <div className={styles.highlight}>달성 일수</div>
            <span className={styles.highlight}>{achievedDays}일</span> /{" "}
            <span className={styles.fontsmall}> {goalPeriod}일</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupAchievementGoalProgress;
