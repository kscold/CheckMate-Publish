import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import CommunityProfiles from "./CommunityProfiles";

import { ReactComponent as Activearrow } from "../../../assets/community/Activearrow-right .svg";
import { ReactComponent as Arrow } from "../../../assets/community/Arrow-right.svg";

const profileName = [
  {
    id: 1,
    name: "은진",
  },
  {
    id: 2,
    name: "른딘",
  },
  {
    id: 3,
    name: "최은진",
  },
  {
    id: 4,
    name: "릉빵이",
  },
  {
    id: 5,
    name: "현용찬",
  },
  {
    id: 4,
    name: "용찬",
  },
  {
    id: 4,
    name: "용차니",
  },
];

const CommunityProfilesList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <div className="Community-profile-list-container-box">
      <div className="Community-profile-list">
        <div
          className="Community-profile-personal-box"
          onClick={() => navigate("/mypage/showmypage")}
        >
          <div className="Community-profile-me-img"></div>
          <div className="Community-profile-me-name">me</div>
        </div>
        <div className="Community-profiles-neigbor">
          {profileName.map((profile) => (
            <CommunityProfiles key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
      <div
        className="Community-show-more-profile"
        onClick={() => navigate("/community/communityShowProfile")}
      >
        {path === "/" ? <Activearrow /> : <Arrow />}
      </div>
    </div>
  );
};

export default CommunityProfilesList;
