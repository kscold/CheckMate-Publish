import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="mypage-communication-list">
      <div className="mypage-communication-list-image"> </div>
      <div className="mypage-communication-list-content">
        <div className="mypage-communication-list-name">
          <Link to="">리액트 스터디</Link>
        </div>
        <div className="mypage-communication-list-member">
          참여자 : 32명 / 50명 11
        </div>
      </div>
    </div>
  );
};

export default Community;
