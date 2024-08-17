import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityMadeGroup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="community-subheader">
        <span className="subheader-title">참여중인 소모임</span>
        <button
          className="create-group"
          onClick={() => navigate("/community/creategroup")}
        >
          + 소모임 개설
        </button>
      </div>
    </div>
  );
};

export default CommunityMadeGroup;
