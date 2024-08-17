import React from "react";
import { useSelector } from "react-redux";
import Record_of_like from "./Record_of_like";

const Record = (props) => {
  const likes = useSelector((state) => state.community.likes); // Redux에서 likes 가져오기

  const recentLikes = likes.filter((like, index) =>
    props.day === "최근 받은 응원" ? index < 7 : index >= 7
  );

  return (
    <div className="mypage-like-record-list-container-box">
      <div className="mypage-like-record-list-title">{props.day}</div>
      {recentLikes.map((recent) => (
        <Record_of_like key={recent.id} recent={recent} />
      ))}
    </div>
  );
};

export default Record;
