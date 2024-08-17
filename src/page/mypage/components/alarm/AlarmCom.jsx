import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { fetchGroups } from "../../../../redux/communitySlice";
import AlarmItem from "./AlarmItem";
const AlarmCom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const groups = useSelector((state) => state.community.groups);
  const groupStatus = useSelector((state) => state.community.status);
  console.log(groups);

  useEffect(() => {
    if (groupStatus === "idle") {
      dispatch(fetchGroups());
    }
  }, [groupStatus, dispatch]);

  const handleGroupClick = (groupId) => {
    navigate(`/community/group/${groupId}/home`);
  };

  return (
    <div className="mypage-alarm-commnuity-container">
      <div className="mypage-alarm-community-section">
        <div className="mypage-alarm-communication">소모임 알람</div>
        <div className="mypage-alarm-communication-count">
          <p className="mypage-alarm-communication-all">
            활동중인 소모임 알림을 보내드려요
          </p>
        </div>
        <div className="mypage-alarm-group-list">
          {groups.length > 0 ? (
            groups.map((group) => (
              <div key={group.id}>
                <AlarmItem
                  group={group}
                  onClick={() => handleGroupClick(group.id)}
                />
                <div className="mypage-root-line" />
              </div>
            ))
          ) : (
            <p className="mypage-alarm-group-list-p">
              참여중인 커뮤니티를 찾을 수 없음
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlarmCom;
