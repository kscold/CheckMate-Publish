// // src/page/community/components/GroupDetailHeaderTabs.jsx

// import React from 'react';
// import { NavLink, useNavigate, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const GroupDetailHeaderTabs = ({ groupName, setActiveTab }) => {
//   const navigate = useNavigate();
//   const { groupId } = useParams();

//   return (
//     <div className="group-detail-header-tabs">
//       <div className="group-detail-header">
//         <button className="back-button" onClick={() => navigate('/community/main')}>
//           &lt;
//         </button>
//         <span className="group-detail-name">{groupName}</span>
//       </div>
//       <div className="group-detail-tabs">
//         <NavLink className="tab" to={`/community/group/${groupId}/home`} end onClick={() => setActiveTab('home')}>
//           홈
//         </NavLink>
//         <NavLink className="tab" to={`/community/group/${groupId}/chat`} onClick={() => setActiveTab('chat')}>
//           채팅
//         </NavLink>
//         <NavLink className="tab" to={`/community/group/${groupId}/achievements`} onClick={() => setActiveTab('achievements')}>
//           성취
//         </NavLink>
//         <NavLink className="tab" to={`/community/group/${groupId}/notices`} onClick={() => setActiveTab('notices')}>
//           공지글
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// GroupDetailHeaderTabs.propTypes = {
//   groupName: PropTypes.string.isRequired,
//   setActiveTab: PropTypes.func.isRequired,
// };

// export default GroupDetailHeaderTabs;



// src/page/community/components/GroupDetailHeaderTabs.jsx

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackButton from "../../../assets/community/BackButton.svg"; // 뒤로가기 버튼 이미지 파일

const GroupDetailHeaderTabs = ({ groupName, setActiveTab }) => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const [headerWidth, setHeaderWidth] = useState('100%');

  const handleBackClick = () => {
    navigate("/community/main");
  }

  useEffect(() => {
    const handleResize = () => {
      const pageElement = document.querySelector('.group-detail-page');
      if (pageElement) {
        setHeaderWidth(`${pageElement.clientWidth}px`);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="group-detail-header-tabs" style={{ width: headerWidth }}>
      <div className="group-detail-header">
        <button onClick={handleBackClick}>
          <img src={BackButton} alt="back"/>
        </button>
        <span className="group-detail-name">{groupName}</span>
      </div>
      <div className="group-detail-tabs">
        <NavLink className="tab" to={`/community/group/${groupId}/home`} end onClick={() => setActiveTab('home')}>
          홈
        </NavLink>
        <NavLink className="tab" to={`/community/group/${groupId}/chat`} onClick={() => setActiveTab('chat')}>
          채팅
        </NavLink>
        <NavLink className="tab" to={`/community/group/${groupId}/achievements`} onClick={() => setActiveTab('achievements')}>
          성취
        </NavLink>
        <NavLink className="tab" to={`/community/group/${groupId}/notices`} onClick={() => setActiveTab('notices')}>
          공지글
        </NavLink>
      </div>
    </div>
  );
};

GroupDetailHeaderTabs.propTypes = {
  groupName: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default GroupDetailHeaderTabs;
