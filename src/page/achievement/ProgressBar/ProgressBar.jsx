import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ percentage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className={styles.percentageLabel}>{percentage}%</span>
    </div>
  );
};

export default ProgressBar;
