import React, { useState } from "react";
import { ReactComponent as On } from "../../../../assets/mypage/On_butn.svg";
import { ReactComponent as Off } from "../../../../assets/mypage/Off-butn.svg";

const AlarmContent = ({ title }) => {
  // 상태를 사용하여 버튼의 상태를 관리합니다.
  const [isOn, setIsOn] = useState(true);

  // 버튼 클릭 시 상태를 토글하는 함수입니다.
  const handleButtonClick = () => {
    setIsOn((prev) => !prev);
  };
  // 알람 연동 작업 필요 추후 수정 필요
  return (
    <div className="mypage-alarm-detail-content">
      <div className="mypage-alarm-detail-box">
        <div className="mypage-alarm-detail-content-box">
          <div className="mypage-alarm-detail-content-box-title">{title}</div>
          <div
            className="mypage-alarm-detail-button"
            onClick={handleButtonClick}
          >
            {isOn ? <On /> : <Off />}
          </div>
        </div>
        {title === "모두 일시 중단" ? (
          <div className="mypage-alarm-detail-content-sub">
            알람 수신이 일시 중단됩니다
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="mypage-root-line" />
    </div>
  );
};

export default AlarmContent;
