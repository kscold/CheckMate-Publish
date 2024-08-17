import React from "react";
import { NavLink } from "react-router-dom";

const Mypageheader = () => {
  return (
    <div className="mypage-header-container">
      <div className="mypage-header-box">
        <div className="mypage-header-root">
          <NavLink
            to="/mypage/showmypage"
            className={({ isActive }) =>
              isActive ? "nav-link underline" : "nav-link"
            }
          >
            내정보
          </NavLink>
          <NavLink
            to="/mypage/showalarm"
            className={({ isActive }) =>
              isActive ? "nav-link underline" : "nav-link"
            }
          >
            알림 설정
          </NavLink>
        </div>
      </div>
      <div className="mypage-root-line" />
    </div>
  );
};

export default Mypageheader;
