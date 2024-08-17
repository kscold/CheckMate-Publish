import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CommunityShowProfileMenu = ({ profileName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path, { state: { profileName } });
  };

  const getClassName = (path) => {
    return location.pathname === path ? "nav-link underline" : "nav-link";
  };

  return (
    <div>
      <div className="community-show-profile-follow-title-menu">
        <div
          className={getClassName("/community/communityShowProfile")}
          onClick={() => handleNavigate("/community/communityShowProfile")}
        >
          팔로우
        </div>
        <div
          className={getClassName("/community/communityShowFollwers")}
          onClick={() => handleNavigate("/community/communityShowFollwers")}
        >
          팔로워
        </div>
        <div
          className={getClassName("/community/addFreind")}
          onClick={() => handleNavigate("/community/addFreind")}
        >
          친구추가
        </div>
      </div>
      <div className="mypage-root-line" />
    </div>
  );
};

export default CommunityShowProfileMenu;
