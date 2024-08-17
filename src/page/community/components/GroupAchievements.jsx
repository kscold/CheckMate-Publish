import React, { useState, useEffect } from 'react';
import GroupAchievementCalendar from '../../achievement/GroupAchievement/GroupAchievementCalendar';
import GroupAchievementHorizonLine from '../../achievement/GroupAchievement/GroupAchievementHorizonLine';
import GroupAchievementRanking from '../../achievement/GroupAchievement/GroupAchievementRanking';
import GroupAchievementGoal from '../../achievement/GroupAchievement/GroupAchievementGoal';
import GroupAchievementGoalProgress from '../../achievement/GroupAchievement/GroupAchievementGoalProgress';

// 모의 데이터 가져오기
import mockData from '../../achievement/mockData.json';

const GroupAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [myAchievement, setMyAchievement] = useState(0); // 내 달성률
  const [averageAchievement, setAverageAchievement] = useState(0); // 평균 달성률
  const [importance, setImportance] = useState(0); // 중요도
  const [goalPeriod, setGoalPeriod] = useState(0); // 목표 기간
  const [achievedDays, setAchievedDays] = useState(0); // 달성 일수
  const [usernickname, setUsernickname] = useState(''); // 사용자 닉네임
  const [goalTitle, setGoalTitle] = useState(''); // 목표 제목
  const [rankings, setRankings] = useState([]); // 랭킹 데이터

  useEffect(() => {
    //대충 서버에서 데이터 가져오는 코드
    const fetchData = async () => {
      try {
        // const accessToken = localStorage.getItem("accessToken");
        // const response = await axios.get("api주소", {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // });
        // 서버로부터 받아온 데이터를 상태에 설정
        // setAchievements(response.data.achievements);
        // setMyAchievement(response.data.myAchievement);
        // setAverageAchievement(response.data.averageAchievement);
        // setImportance(response.data.importance);
        // setGoalPeriod(response.data.goalPeriod);
        // setAchievedDays(response.data.achievedDays);
        // setUsernickname(response.data.usernickname);
        // setGoalTitle(response.data.goalTitle);
        // setRankings(response.data.rankings);
      } catch (error) {
        console.error('서버로부터 데이터를 가져오는데 실패했습니다:', error);
      }
    };
    // 성취 데이터 설정
    setAchievements(mockData.achievements);
    // 대충 설정해둔거
    setMyAchievement(50);
    setAverageAchievement(60);
    setImportance(80);
    setGoalPeriod(60);
    setAchievedDays(50);
    setUsernickname('릉딘');
    setGoalTitle('리액트 강의 다 듣기');
    setRankings([
      { nickname: '용zi찬', percentage: 60 },
      { nickname: '용zi찬', percentage: 60 },
      { nickname: '용zi찬', percentage: 60 },
    ]);
    fetchData();
  }, []);

  return (
    <div>
      <GroupAchievementCalendar achievements={achievements} />
      <GroupAchievementHorizonLine />

      <GroupAchievementGoal
        goalTitle={goalTitle}
        importance={importance}
        nickname={usernickname}
      />
      <GroupAchievementGoalProgress
        myAchievement={myAchievement}
        averageAchievement={averageAchievement}
        goalPeriod={goalPeriod}
        achievedDays={achievedDays}
      />
      <GroupAchievementRanking rankings={rankings} />
    </div>
  );
};

export default GroupAchievements;
