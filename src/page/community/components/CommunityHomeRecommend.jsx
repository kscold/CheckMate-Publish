import React, { useState } from "react";
import CommunityHomeRecom_com from "./CommunityHomeRecom_com";

const initialRecommend = [
  {
    id: 1,
    name: "리액트 100일 스터디",
    host: "승찬",
    member: "20명",
    active: "모집중",
  },
  {
    id: 2,
    name: "ux/ui 아티클 읽기",
    host: "은잔",
    member: "30명",
    active: "마감",
  },
  {
    id: 3,
    name: "자바 / 스프링 백엔드 개발",
    host: "가원",
    member: "20명",
    active: "마감",
  },
  {
    id: 4,
    name: "강력한 남자들의 모임",
    host: "용찬",
    member: "20명",
    active: "모집중",
  },
];

const CommunityHomeRecommend = () => {
  const [recommend, setRecommend] = useState(initialRecommend);

  const handleRemove = (id) => {
    setRecommend(recommend.filter((item) => item.id !== id));
  };
  // 필터를 통하여 컴포넌트를 지우는 기능 추가
  return (
    <div className="community-home-recommend-container-box">
      <div className="community-home-recommend-show-container-box-name">
        회원님을 위한 추천
      </div>
      <div className="community-home-recommend-show">
        {recommend.map((item) => (
          <CommunityHomeRecom_com
            key={item.id}
            recommend={item}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityHomeRecommend;
