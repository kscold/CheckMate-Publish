import React from "react";
import Mypageviewheader from "./Mypageviewheader";
import Record from "./like/Record";

const MypageLike = () => {
  return (
    <div className="mypage-like-container-box">
      <div className="mypage-like-header">
        <Mypageviewheader name="받은 응원" />
      </div>
      <div className="mypage-like-record-list">
        <Record day="최근 받은 응원" />

        <Record day="최근 7일" />
      </div>
    </div>
  );
};

export default MypageLike;
