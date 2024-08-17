import React from "react";

const Record_of_like = ({ recent }) => {
  if (!recent) {
    return null;
  }

  const { name, time } = recent;
  return (
    <div className="mypage-like-record-list-title-content-box">
      <div className="mypage-like-record-list-title-content-box-picture"></div>
      <div className="mypage-like-record-list-title-content-box-content-detail">
        <div className="mypage-like-record-list-title-content-box-content-title">
          {name}
        </div>
        <div className="mypage-like-record-list-title-content-box-content-title-sub">
          님이 회원님에게 응원을 보냈습니다
        </div>

        <div className="mypage-like-record-list-title-content-time">{time}</div>
      </div>
    </div>
  );
};

export default Record_of_like;
