import React, { useState, useEffect } from "react";
import CommunityHomeKeywordDetail from "./CommunityHomeKeywordDetail";
import { useNavigate } from "react-router-dom";

const hot_word = [
  {
    id: 1,
    word: "개발",
  },
  {
    id: 2,
    word: "걷기",
  },
  {
    id: 3,
    word: "온도",
  },
  {
    id: 4,
    word: "날씨",
  },
  {
    id: 5,
    word: "감기",
  },
  {
    id: 6,
    word: "맥북",
  },
  {
    id: 7,
    word: "게임",
  },
  {
    id: 8,
    word: "자동차",
  },
];
const hot_word_1 = [
  { id: 1, word: "자기개발" },
  { id: 2, word: "독서" },
  { id: 3, word: "ui" },
  { id: 4, word: "리액트" },
  { id: 5, word: "운동" },
  { id: 6, word: "notion" },
  { id: 7, word: "자전거" },
  { id: 8, word: "자동차" },
];

const hot_word_2 = [
  { id: 9, word: "전체" },
  { id: 10, word: "주식/ 기업 분석" },
  { id: 11, word: "부동산" },
  { id: 12, word: "코인" },
];

const hot_word_3 = [
  { id: 13, word: "전체" },
  { id: 14, word: "교양" },
  { id: 15, word: "건강/운동" },
  { id: 16, word: "동기부여" },
  { id: 17, word: "퍼스널 브랜딩" },
  { id: 18, word: "독서" },
  { id: 19, word: "언어" },
];

const ComKeyWordHome = ({ name, title }) => {
  const [hotWords, setHotWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let selectedHotWords = [];
    if (name === "커리어") {
      selectedHotWords = hot_word_1;
    } else if (name === "제테크") {
      selectedHotWords = hot_word_2;
    } else if (name === "자기개발") {
      selectedHotWords = hot_word_3;
    } else if (name === "인기 키워드") {
      selectedHotWords = hot_word;
    }
    setHotWords(selectedHotWords);
  }, [name]);

  const handleDetailClick = (content) => {
    setSelectedWord(content.word);
    navigate("/community/keyword", { state: { content, name } });
  };
  console.log(title);

  return (
    <div className="community-clear-view-show-bottom-content-words-container">
      {hotWords.map((hot) => (
        <CommunityHomeKeywordDetail
          key={hot.id}
          hot={hot}
          isSelected={selectedWord === hot.word}
          onClick={() => handleDetailClick(hot)}
          {...(title && { tit: title })}
        />
      ))}
    </div>
  );
};

export default ComKeyWordHome;
