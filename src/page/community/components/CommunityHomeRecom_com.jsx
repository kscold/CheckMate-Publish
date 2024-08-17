import React from "react";
import { ReactComponent as Plus } from "../../../assets/community/PlusButton.svg";

const CommunityHomeRecom_com = ({ recommend, onRemove }) => {
  if (!recommend) {
    return null;
  }
  const { name, host, member, active } = recommend;
  return (
    <div className="community-home-recommend-show-more">
      <div
        className="community-home-recommend-show-more-out"
        onClick={onRemove}
      >
        <Plus />
      </div>
      <div className="community-home-recommend-show-img"></div>
      <div className="community-home-recommend-show-community-name">{name}</div>
      <div className="community-home-recommend-show-content-detail">
        <div className="community-home-recommend-show-content-detail-host">
          호스트명: {host}
        </div>
        <div className="community-home-recommend-show-content-detail-member">
          맴버: {member}
        </div>
        {active === "모집중" ? (
          <div className="community-home-recommend-show-content-activing">
            {active}
          </div>
        ) : (
          <div className="community-home-recommend-show-content-unactive">
            {active}
          </div>
        )}
      </div>
      <div className="community-home-recommend-join-button">참여하기</div>
    </div>
  );
};

export default CommunityHomeRecom_com;
