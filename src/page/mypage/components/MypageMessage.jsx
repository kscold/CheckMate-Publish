import React from "react";
import Mypageviewheader from "./Mypageviewheader";
import GroupChat from "../../community/components/GroupChat";
import MessageChat from "./message/MessageChat";

const MypageMessage = () => {
  return (
    <div className="mypage-like-container-box">
      <div className="mypage-like-header">
        <Mypageviewheader
          name="메시지
      "
        />
      </div>
      <div className="mypage-like-chat-list">
        <MessageChat />
      </div>
    </div>
  );
};

export default MypageMessage;
