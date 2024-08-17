import React from "react";
import CommunityHeader from "./CommunityHeader";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CommunityMainPage = () => {
  const location = useLocation();
  // 유저정보 모달을 안띄우고 싶은 라우팅을 설정

  const {groupId} = useParams();
  const {noticeId} = useParams();

  useSelector((state) =>
    state.community.groups.find((g) => g.id === parseInt(groupId))
  );
  useSelector((state) =>
    state.community.groups.find((g) => g.id === parseInt(noticeId))
  )
  const noCommuntiyHeaderPaths = [
    "/community/communityShowProfile",
    "/community/communityShowFollwers",
    "/community/addFreind",
    "/community/creategroup",
    `/community/group/${groupId}/home`,
    `/community/group/${groupId}/chat`,
    `/community/group/${groupId}/achievements`,
    `/community/group/${groupId}/notices`,

    "/community/peekpage",
    "/community/searchview",
    "/community/keyword",

    `/community/group/${groupId}/create-notices`,
    `/community/group/${groupId}/notices/${noticeId}`

  ];

  // 현재 location이랑 같은지 확인
  const noShowHeader = !noCommuntiyHeaderPaths.includes(location.pathname);
  return (
    <div className="community-page">
      {noShowHeader && <CommunityHeader />}

      <Outlet />
    </div>
  );
};

export default CommunityMainPage;
