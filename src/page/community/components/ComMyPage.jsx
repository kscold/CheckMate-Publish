import React, { useEffect } from "react";
import CommunityMadeGroup from "./CommunityMadeGroup";
import CommunityItem from "./CommunityItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchGroups } from "../../../redux/communitySlice";

const ComMyPage = () => {
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
    <div className="community-main-view-all">
      <CommunityMadeGroup />
      <div className="group-list">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} onClick={() => handleGroupClick(group.id)}>
              <CommunityItem group={group} />
            </div>
          ))
        ) : (
          <p className="mypage-alarm-group-list-p">
            참여중인 커뮤니티를 찾을 수 없음
          </p>
        )}
      </div>
    </div>
  );
};

export default ComMyPage;
