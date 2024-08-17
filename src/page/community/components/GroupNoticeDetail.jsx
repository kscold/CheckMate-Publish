// src/page/community/components/GroupNoticeDetail.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BackButton from "../../../assets/community/BackButton.svg"; // 뒤로가기 버튼 이미지 파일

const GroupNoticeDetail = () => {
  const navigate = useNavigate();
  const { noticeId, groupId } = useParams();
  const notice = useSelector((state) =>
    state.community.notices.find((_, index) => index === parseInt(noticeId))
  );

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  const handleBackClick = () => {
    navigate(`/community/group/${groupId}/notices`);
  };

  return (
    <div className="group-notice-detail">
      <div className="group-notice-detail-header">
        <img src={BackButton} alt="back" onClick={handleBackClick} />
        <h2 className="group-notice-detail-h2">공지사항</h2>
      </div>
      <div className="group-notice-detail-info">
        <p>{notice.date}&ensp;
            {notice.author}
        </p>
      </div>
      <h3>{notice.title}</h3>
      <div className="group-notice-detail-content">
      </div>
    </div>
  );
};

export default GroupNoticeDetail;
