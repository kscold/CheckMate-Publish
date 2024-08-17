import React from "react";
import RankingProgressBar from "./RankingProgressBar";
import styles from "./GroupAchievementRanking.scss";

const GroupAchievementRanking = ({ rankings }) => {
  if (!rankings || rankings.length === 0) {
    return <div>랭킹 정보가 없습니다.</div>;
  }

  return (
    <div className={styles.rankingContainer}>
      <h2 className={styles.title}>현재 달성 랭킹🏅</h2>
      {rankings.map((ranking, index) => (
        <RankingProgressBar
          key={index}
          rank={index + 1}
          nickname={ranking.nickname}
          percentage={ranking.percentage}
        />
      ))}
    </div>
  );
};

export default GroupAchievementRanking;
