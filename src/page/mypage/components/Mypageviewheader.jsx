import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../assets/community/Back.svg";
const Mypageviewheader = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  return (
    <div className="mypage-like-view-container">
      <div className="mypage-like-header-container">
        <div
          className="mypage-like-header-icon"
          onClick={() => navigate("/mypage/showmypage")}
        >
          <Back />
        </div>
        <div className="mypage-like-header-title">{props.name}</div>
      </div>
    </div>
  );
};

export default Mypageviewheader;
