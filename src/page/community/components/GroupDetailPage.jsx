//src/page/community/components/GroupDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GroupDetailHeaderTabs from './GroupDetailHeaderTabs';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const { noticeId } = useParams();
  const location = useLocation();
  const group = useSelector((state) =>
    state.community.groups.find((g) => g.id === parseInt(groupId))
  );
  useSelector((state) =>
    state.community.notices.find((_, index) => index === parseInt(noticeId))
  )
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const footer = document.querySelector('.footer-container');
    if (footer) footer.classList.add('hide-footer');
    return () => {
      if (footer) footer.classList.remove('hide-footer');
    };
  }, []);

  const noHeaderPaths = [
    `/community/group/${groupId}/create-notice`,
    `/community/group/${groupId}/notices/${noticeId}`
  ];
  const noShowHeader = noHeaderPaths.some((path) => location.pathname.startsWith(path));

  if (!group) {
    return <p>그룹을 찾을 수 없음</p>;
  }

  return (
    <div className={`group-detail-page ${noShowHeader ? 'no-header' : ''}`}>
      <div className={`${noShowHeader ? 'hidden' : ''}`}>
        <GroupDetailHeaderTabs groupName={group.name} setActiveTab={setActiveTab} />
      </div>
      {activeTab === 'home' && group.image && (
        <div className="group-detail-image">
          <img src={group.image} alt={group.name} />
        </div>
      )}
      <div className="group-detail-body">
        <Outlet context={{ group }} />
      </div>
    </div>
  );
};

export default GroupDetailPage;
