import React from "react";
import CommunityShowProfileMenu from "./CommunityShowProfileMenu";

import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../assets/community/Back.svg";

import { ReactComponent as Activesearch } from "../../../assets/community/Activesearch copy.svg";
import { ReactComponent as Search } from "../../../assets/community/Search.svg";
import CommunityShowRecom_Friend from "./CommunityShowRecom_Friend";

const recomfriend = [
  {
    id: 1,
    name: "이상한 은진씨",
    followstate: "no",
  },
  {
    id: 2,
    name: "내가 누구게",
    followstate: "no",
  },
];
const CommunityShowAddFreind = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const handleProfileClick = (profile) => {
    navigate("/community/peekpage", { state: { profile } });
  };

  return (
    <div className="community-show-container-view">
      <div className="community-show-profile-follow-header-container-box">
        <div
          className="community-show-profile-follow-header-back-icon"
          onClick={() => navigate("/community/home")}
        >
          <Back />
        </div>
        <div className="community-show-profile-follow-header-title">
          친구추가
        </div>
      </div>
      <CommunityShowProfileMenu />
      <div className="community-search-friends-add-box">
        <input
          type="text"
          className="community-search-friends-add-input"
          placeholder="친구를 찾아보아요"
        />
        <div
          className="community-search-friends-add-button"
          onClick={() => navigate("/")}
        >
          {path === "/" ? <Activesearch /> : <Search />}
        </div>
      </div>
      <div className="community-show-recommend-friend-container-box">
        추천 친구
      </div>
      <div>
        {recomfriend &&
          recomfriend.map((recomfriend) => (
            <div
              onClick={() => handleProfileClick(recomfriend)}
              key={recomfriend.id}
            >
              <CommunityShowRecom_Friend recomfriend={recomfriend} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommunityShowAddFreind;
