import React, { useState } from "react";
import { ReactComponent as ActiveVector } from "../../../assets/community/ActiveVector.svg";
import { ReactComponent as Vector } from "../../../assets/community/Vector.svg";
import { ReactComponent as Activesearch } from "../../../assets/community/Activesearch copy.svg";
import { ReactComponent as Search } from "../../../assets/community/Search.svg";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addKeyword } from "../../../redux/communitySlice";

import SearchCategory from "./search/SearchCategory";

const CommunitySearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [isTransparent, setIsTransparent] = useState(false);
  const [showNewView, setShowNewView] = useState(false);

  const handleSearch = () => {
    dispatch(addKeyword(searchText)); // 키워드 상태 업데이트
    navigate("/community/searchview");
  };

  return (
    <div
      className={`community-search-container-box ${
        isTransparent ? "transparent" : ""
      }`}
    >
      <div
        className="community-search-detail-list"
        onClick={() => navigate("/community/searchhome")}
      >
        {path === "/" ? <ActiveVector /> : <Vector />}
        {path === "/" ? <ActiveVector /> : <Vector />}
        {path === "/" ? <ActiveVector /> : <Vector />}
      </div>
      <div className="community-search-command-box">
        <input
          type="text"
          className="community-search-input"
          placeholder="어떤 스터디를 찾으세요? #키워드 입력"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className="community-search-command-button" onClick={handleSearch}>
          {path === "/" ? <Activesearch /> : <Search />}
        </div>
      </div>
      {showNewView && <SearchCategory />} {/* 새로운 뷰 컴포넌트 렌더링 */}
    </div>
  );
};

export default CommunitySearch;
