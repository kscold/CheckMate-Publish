// src/page/community/components/GroupDetailContainer.jsx

import React from 'react';
import GroupDetailHeaderTabs from './GroupDetailHeaderTabs';
import GroupDetailPage from './GroupDetailPage';

const GroupDetailContainer = () => {
  return (
    <div className="group-detail-container">
      <GroupDetailHeaderTabs />
      <GroupDetailPage />
    </div>
  );
};

export default GroupDetailContainer;

