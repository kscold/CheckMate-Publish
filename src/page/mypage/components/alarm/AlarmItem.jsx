import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as On } from "../../../../assets/mypage/On_butn.svg";
import { ReactComponent as Off } from "../../../../assets/mypage/Off-butn.svg";

const AlarmItem = ({ group }) => {
  // 상태를 사용하여 버튼의 상태를 관리합니다.
  const [isOn, setIsOn] = useState(true);

  // 버튼 클릭 시 상태를 토글하는 함수입니다.
  const handleButtonClick = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="mypage-alarm-item-group-item">
      <div className="mypage-alarm-item-group-icon">
        <img src={group.image} alt={group.name} />
      </div>
      <div className="mypage-alarm-item-group-details">
        <div className="mypage-alarm-item-group-name">
          {group.name}
          <div
            className="com-mypage-alarm-detail-button"
            onClick={handleButtonClick}
          >
            {isOn ? <On /> : <Off />}
          </div>
        </div>
      </div>

      <div className="mypage-alarm-item-group-info"></div>
    </div>
  );
};

AlarmItem.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    notice: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlarmItem;
