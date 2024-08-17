// import React, { useEffect } from "react";
// import { CommunityContext } from "./CommunityProvider";
// import CommunityHomeItem from "./CommunityHomeItem";

// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchGroups } from "../../../redux/communitySlice";
// const CommunityHomeJoin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const groups = useSelector((state) => state.community.groups);
//   const groupStatus = useSelector((state) => state.community.status);
//   console.log(groups);

//   useEffect(() => {
//     if (groupStatus === "idle") {
//       dispatch(fetchGroups());
//     }
//   }, [groupStatus, dispatch]);

//   const handleGroupClick = (groupId) => {
//     navigate(`/community/group/${groupId}/home`);
//   };
//   return (
//     <div className="mypage-community-section">
//       <div className="mypage-communication">활발한 소모임에 참여해보세요</div>
//       <div className="mypage-communication-count">
//         <p className="mypage-communication-all">
//           참여도가 가장 높은 소모임의 순위를 확인해 보세요!
//         </p>
//       </div>
//       <div className="group-list">
//         {groups.length > 0 ? (
//           groups.map((group) => (
//             <div key={group.id} onClick={() => handleGroupClick(group.id)}>
//               <CommunityHomeItem group={group} />
//             </div>
//           ))
//         ) : (
//           <p className="mypage-alarm-group-list-p">
//             참여중인 커뮤니티를 찾을 수 없음
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommunityHomeJoin;

import React, { useEffect } from 'react';
import { CommunityContext } from './CommunityProvider';
import CommunityHomeItem from './CommunityHomeItem';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGroups } from '../../../redux/communitySlice';

const CommunityHomeJoin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const groups = useSelector((state) => state.community.groups);
  const groupStatus = useSelector((state) => state.community.status);

  useEffect(() => {
    if (groupStatus === 'idle') {
      dispatch(fetchGroups());
    }
  }, [groupStatus, dispatch]);

  const handleGroupClick = (groupId) => {
    navigate(`/community/group/${groupId}/home`);
  };

  if (groupStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (groupStatus === 'error') {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="mypage-community-section">
      <div className="mypage-communication">활발한 소모임에 참여해보세요</div>
      <div className="mypage-communication-count">
        <p className="mypage-communication-all">
          참여도가 가장 높은 소모임의 순위를 확인해 보세요!
        </p>
      </div>
      <div className="group-list">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} onClick={() => handleGroupClick(group.id)}>
              <CommunityHomeItem group={group} />
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

export default CommunityHomeJoin;
