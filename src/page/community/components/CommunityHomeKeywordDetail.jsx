import React from "react";

const CommunityHomeKeywordDetail = ({ hot, onClick, tit }) => {
  if (!hot) {
    return null; // hot이 undefined인 경우 null을 반환하여 렌더링하지 않음
  }
  const { word } = hot;

  return (
    <div
      className="community-home-keyword-box" // tit와 word가 같으면 highlighted 클래스 추가
      onClick={onClick}
    >
      <div
        className={`community-home-keyword-content ${
          tit === word ? "highlighted" : ""
        }`}
      >
        {word}
      </div>
    </div>
  );
};

export default CommunityHomeKeywordDetail;
