import React from "react";
import styles from "./RankingProgressBar.module.scss";

const RankingProgressBar = ({ rank, nickname, percentage }) => {
  const medals = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
  };

  return (
    <div className={styles.rankItem}>
      <div className={styles.userInfo}>
        <span className={styles.medal}>{medals[rank] || `${rank}.`}</span>
        <span className={styles.nickname}>{nickname}</span>
      </div>
      <div className={styles.achievementText}>현재 달성률✨</div>{" "}
      <div className={styles.progressbarall}>
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className={styles.percentageLabel}>{percentage}%</span>
      </div>
    </div>
  );
};

export default RankingProgressBar;
