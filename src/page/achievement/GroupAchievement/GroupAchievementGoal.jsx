import React from "react";

import styles from "./GroupAchievementGoal.module.scss";

const GroupAchievementGoal = ({ goalTitle, importance, nickname }) => {
  return (
    <div className={styles.goalContainer}>
      <div className={styles.goalRow}>
        <p className={styles.label}>나의 목표</p>
        <p className={styles.value}>{goalTitle}</p>
      </div>

      <div className={styles.goalRow}>
        <p className={styles.label}>중요도</p>
        <p className={styles.value}>
          <strong>{nickname}</strong> 님에게 꽤 중요한 목표 입니다.
        </p>
      </div>

      <div className={styles.importanceContainer}>
        <div className={styles.importanceBar}>
          <div className={styles.progressContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${importance}%` }}
            ></div>
          </div>
        </div>
        <div className={styles.importanceLabel}>
          <span>조금</span>
          <span>많이</span>
        </div>
      </div>
    </div>
  );
};

export default GroupAchievementGoal;
