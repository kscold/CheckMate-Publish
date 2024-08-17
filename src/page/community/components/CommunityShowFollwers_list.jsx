import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as More } from "../../../assets/community/more-horizontal.svg";
const CommunityShowFollwers_list = ({ followers_profile }) => {
  const navigate = useNavigate();
  const { name, followstate } = followers_profile;
  return (
    <div>
      <div className="community-show-follow-or-follower-container">
        <div className="community-show-follow-or-follower-container-picture"></div>
        <div className="community-show-follow-or-follower-container-box">
          <div className="community-show-follow-or-follower-container-name">
            {name}
          </div>
          <div className="community-show-follow-or-follower-container-actions">
            {followstate === "ok" ? (
              <div
                className="community-show-follow-or-follower-container-send-message"
                onClick={() => navigate("/")}
              >
                메시지
              </div>
            ) : (
              <div
                className="community-show-follow-or-follower-container-send-followers"
                onClick={() => navigate("/")}
              >
                팔로우
              </div>
            )}
            <div className="community-show-follow-or-follower-container-send-more">
              <More />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityShowFollwers_list;
