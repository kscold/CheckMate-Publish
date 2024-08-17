import React from "react";
import CommunityHeader from "./CommunityHeader";
import CommunityProfilesList from "./CommunityProfilesList";
import CommunitySearch from "./CommunitySearch";

import CommunityHomeMadeGroup from "./CommunityHomeMadeGroup";

import CommunityHomeRecommend from "./CommunityHomeRecommend";
import CommunityHomeJoin from "./CommunityHomeJoin";
import ComKeyWordHome from "./ComKeyWordHome";

const CommunityHomePage = () => {
  return (
    <div className="community-main-view-all">
      {/* <CommunityHeader /> */}

      <CommunityProfilesList />
      <CommunitySearch />
      <CommunityHomeMadeGroup />
      <ComKeyWordHome name="인기 키워드" />
      <CommunityHomeRecommend />
      <CommunityHomeJoin />
    </div>
  );
};

export default CommunityHomePage;
