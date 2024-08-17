import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityShowRecom_Friend = ({ recomfriend }) => {
  const navigate = useNavigate();

  const { name } = recomfriend;
  return (
    <div>
      <div className="community-show-follow-or-follower-container">
        <div className="community-show-follow-or-follower-container-picture"></div>
        <div className="community-show-follow-or-follower-container-box">
          <div className="community-show-follow-or-follower-container-name">
            {name}
          </div>
          <div className="community-show-follow-or-follower-container-actions">
            <div
              className="community-show-follow-or-follower-container-send-follow"
              onClick={() => navigate("/")}
            >
              팔로우
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityShowRecom_Friend;
