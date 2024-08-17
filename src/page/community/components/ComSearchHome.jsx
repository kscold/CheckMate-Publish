import React, { useState, useEffect } from "react";
import { ReactComponent as ActiveVector } from "../../../assets/community/ActiveVector.svg";
import { ReactComponent as Vector } from "../../../assets/community/Vector.svg";
import { ReactComponent as Activesearch } from "../../../assets/community/Activesearch copy.svg";
import { ReactComponent as Search } from "../../../assets/community/Search.svg";
import { useLocation, useNavigate } from "react-router-dom";

import SearchCategory from "./search/SearchCategory";
import CommunityProfilesList from "./CommunityProfilesList";
import CommunityHomeMadeGroup from "./CommunityHomeMadeGroup";

import ComKeyWordHome from "./ComKeyWordHome";

const ComSearchHome = () => {
  const location = useLocation();
  const path = location.pathname;

  const [isTransparent, setIsTransparent] = useState(false);
  const [showNewView, setShowNewView] = useState(false);

  useEffect(() => {
    setIsTransparent(true);
    setShowNewView(true);
  }, []);

  return (
    <div className="community-main-view-all">
      <CommunityProfilesList />
      <div className="community-search-container-box">
        <div className="community-search-detail-list">
          {path === "/" ? <ActiveVector /> : <Vector />}
          {path === "/" ? <ActiveVector /> : <Vector />}
          {path === "/" ? <ActiveVector /> : <Vector />}
        </div>
        <div className="community-search-command-box">
          <input
            type="text"
            className="community-search-input"
            placeholder="어떤 스터디를 찾으세요? #키워드 입력"
          />

          <div className="community-search-command-button">
            {path === "/" ? <Activesearch /> : <Search />}
          </div>
        </div>
        {showNewView && <SearchCategory />} {/* 새로운 뷰 컴포넌트 렌더링 */}
      </div>
      <CommunityHomeMadeGroup />
      <ComKeyWordHome name="인기 키워드" />

      {/* <CommunityHomeRecommend /> */}
    </div>
  );
};

export default ComSearchHome;
