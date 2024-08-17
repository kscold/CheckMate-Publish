// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setNewRoutine } from "../redux/routine";

// import { ReactComponent as HomeIcon } from "../assets/footer/Home.svg";
// import { ReactComponent as ActiveHomeIcon } from "../assets/footer/HomeActive.svg";
// import { ReactComponent as AchievementIcon } from "../assets/footer/Achievement.svg";
// import { ReactComponent as ActiveAchievementIcon } from "../assets/footer/AchievementActive.svg";
// import { ReactComponent as CommunityIcon } from "../assets/footer/Community.svg";
// import { ReactComponent as ActiveCommunityIcon } from "../assets/footer/CommunityActive.svg";
// import { ReactComponent as MypageIcon } from "../assets/footer/Mypage.svg";
// import { ReactComponent as ActiveMypageIcon } from "../assets/footer/MypageActive.svg";
// import { useEffect } from "react";

// const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const path = location.pathname;
//   const dispatch = useDispatch();

//   const selectedSection = useSelector(
//     (state) => state.selectedSection.selectedSection
//   );

//   useEffect(() => {}, [selectedSection]);

//   const handleAddRoutine = () => {
//     dispatch(setNewRoutine({ time: "", title: "", recurringDays: [] }));
//   };

//   return (
//     <div className="footer-container">
//       {selectedSection === "view1" ? (
//         <div className="footer-item-container">
//           <div
//             className="footer-item footer-item-left"
//             onClick={() => navigate("/")}
//           >
//             {path === "/" ? <ActiveHomeIcon /> : <HomeIcon />}
//           </div>
//           <div className="footer-item" onClick={() => navigate("/achievement")}>
//             {path === "/achievement" ? (
//               <ActiveAchievementIcon />
//             ) : (
//               <AchievementIcon />
//             )}
//           </div>

//           <div
//             className="footer-item"
//             onClick={() => navigate("/community/main")}
//           >
//             {path === "/community/main" ||
//             path === "/community/home" ||
//             path === "/community/communityShowProfile" ||
//             path === "/community/communityShowFollwers" ||
//             path === "/community/addFreind" ||
//             path === "/community/creategroup" ? (
//               <ActiveCommunityIcon />
//             ) : (
//               <CommunityIcon />
//             )}
//           </div>
//           <div
//             className="footer-item footer-item-right"
//             onClick={() => navigate("/mypage/showmypage")}
//           >
//             {path === "/mypage/showmypage" || path === "/mypage/showalarm" ? (
//               <ActiveMypageIcon />
//             ) : (
//               <MypageIcon />
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="footer-routine-view-container">
//           <button
//             className="footer-routine-view-button"
//             onClick={handleAddRoutine}
//           >
//             목표 만들기
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRoutine } from '../redux/routine';
import { ReactComponent as HomeIcon } from '../assets/footer/Home.svg';
import { ReactComponent as ActiveHomeIcon } from '../assets/footer/HomeActive.svg';
import { ReactComponent as AchievementIcon } from '../assets/footer/Achievement.svg';
import { ReactComponent as ActiveAchievementIcon } from '../assets/footer/AchievementActive.svg';
import { ReactComponent as CommunityIcon } from '../assets/footer/Community.svg';
import { ReactComponent as ActiveCommunityIcon } from '../assets/footer/CommunityActive.svg';
import { ReactComponent as MypageIcon } from '../assets/footer/Mypage.svg';
import { ReactComponent as ActiveMypageIcon } from '../assets/footer/MypageActive.svg';
import CreatePersonalRoutineModal from '../page/main/components/CreatePersonalRoutineModal';

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [routine, setRoutine] = useState({
    time: '',
    title: '',
    recurringDays: [],
    notification: false,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const dispatch = useDispatch();

  const selectedSection = useSelector(
    (state) => state.selectedSection.selectedSection
  );

  const handleAddRoutine = () => {
    dispatch(setNewRoutine({ time: '', title: '', recurringDays: [] }));
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveRoutine = () => {
    // Save the routine logic
    setModalOpen(false);
  };

  const handleDeleteRoutine = () => {
    // Delete the routine logic
    setModalOpen(false);
  };

  const handleRoutineChange = (updatedRoutine) => {
    setRoutine(updatedRoutine);
  };

  return (
    <>
      <div className="footer-container">
        {selectedSection === 'view1' ? (
          <div className="footer-item-container">
            <div
              className="footer-item footer-item-left"
              onClick={() => navigate('/')}
            >
              {path === '/' ? <ActiveHomeIcon /> : <HomeIcon />}
            </div>
            <div
              className="footer-item"
              onClick={() => navigate('/achievement')}
            >
              {path === '/achievement' ? (
                <ActiveAchievementIcon />
              ) : (
                <AchievementIcon />
              )}
            </div>
            <div
              className="footer-item"
              onClick={() => navigate('/community/main')}
            >
              {path === '/community/main' ||
              path === '/community/home' ||
              path === '/community/communityShowProfile' ||
              path === '/community/communityShowFollwers' ||
              path === '/community/addFreind' ||
              path === '/community/creategroup' ? (
                <ActiveCommunityIcon />
              ) : (
                <CommunityIcon />
              )}
            </div>
            <div
              className="footer-item footer-item-right"
              onClick={() => navigate('/mypage/showmypage')}
            >
              {path === '/mypage/showmypage' || path === '/mypage/showalarm' ? (
                <ActiveMypageIcon />
              ) : (
                <MypageIcon />
              )}
            </div>
          </div>
        ) : (
          <div className="footer-routine-view-container">
            <button
              className="footer-routine-view-button"
              onClick={handleAddRoutine}
            >
              목표 만들기
            </button>
          </div>
        )}
      </div>

      <CreatePersonalRoutineModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        routine={routine}
        onChangeRoutine={handleRoutineChange}
        onSave={handleSaveRoutine}
        onDelete={handleDeleteRoutine}
      />
    </>
  );
};

export default Footer;
