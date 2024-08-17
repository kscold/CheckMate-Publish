import React from "react";

import Mypageheader from "./components/Mypageheader";
import { Outlet, useLocation } from "react-router-dom";

const Mypage = () => {
  const location = useLocation();
  // 유저정보 모달을 안띄우고 싶은 라우팅을 설정
  const noCommuntiyHeaderPaths = [
    "/mypage/edit",
    "/mypage/message",
    "/mypage/like",
  ];
  const noShowHeader = !noCommuntiyHeaderPaths.includes(location.pathname);
  return (
    <div className="mypage-page">
      {noShowHeader && <Mypageheader />}

      <Outlet />
    </div>
  );
};

export default Mypage;
