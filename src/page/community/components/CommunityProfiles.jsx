import React from "react";

const CommunityProfiles = ({ profile }) => {
  if (!profile) {
    return null; // profile이 undefined인 경우 null을 반환하여 렌더링하지 않음
  }

  const { name } = profile;
  return (
    <div className="Community-neibore-profile">
      <div className="Community-neibore-me-img"></div>
      <div className="Community-neibore-me-name">{name}</div>
    </div>
  );
};

export default CommunityProfiles;
