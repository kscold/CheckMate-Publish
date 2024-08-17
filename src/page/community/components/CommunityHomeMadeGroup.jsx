import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityHomeMadeGroup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="community-home-subheader">
        <span className="community-home-subheader-title">인기 키워드</span>
        <button
          className="community-home-create-group"
          onClick={() => navigate("/community/creategroup")}
        >
          + 소모임 개설
        </button>
      </div>
    </div>
  );
};

export default CommunityHomeMadeGroup;
