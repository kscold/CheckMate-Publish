import React, { useEffect, useState } from "react";

import { ReactComponent as Activesearch } from "../../../../assets/community/Activesearch copy.svg";
import { ReactComponent as Search } from "../../../../assets/community/Search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../../assets/community/Back.svg";

import { useDispatch, useSelector } from "react-redux";
import SearchRecent from "./SearchRecent";
import { addKeyword, addhot_word } from "../../../../redux/communitySlice";
import ComKeyWordHome from "../ComKeyWordHome";

const hot_word = [
  {
    id: 1,
    word: "자기개발",
  },
  {
    id: 2,
    word: "독서",
  },
  {
    id: 3,
    word: "ui",
  },
  {
    id: 4,
    word: "리액트",
  },
  {
    id: 5,
    word: "운동",
  },
  {
    id: 6,
    word: "notion",
  },
  {
    id: 7,
    word: "자전거",
  },
  {
    id: 8,
    word: "자동차",
  },
];

const SearchView = () => {
  const searchText = useSelector((state) => state.community.keyword);
  const [keywordsArray, setKeywordsArray] = useState([]);
  const hot_words = useSelector((state) => state.community.hot_words);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (searchText) {
      setKeywordsArray((prevArray) => prevArray.concat(searchText));
    }
    dispatch(addhot_word([...hot_word]));
  }, [searchText, dispatch]);

  const handleSearch = () => {
    if (inputText.trim() !== "") {
      dispatch(addKeyword(inputText)); // 키워드 상태 업데이트
      setInputText(""); // 입력 필드 초기화
    }
    navigate("/community/searchview");
  };

  const handleRemove = (keyword) => {
    setKeywordsArray((prevArray) =>
      prevArray.filter((item) => item !== keyword)
    );
  };

  return (
    <div className="community-search-view-container-box">
      <div className="community-search-view-header-container">
        <div
          className="community-search-header-back"
          onClick={() => navigate("/community/home")}
        >
          <Back />
        </div>

        <div className="community-search-view-input-container">
          <div className="community-search-view-command-box">
            <input
              type="text"
              className="community-search-view-input"
              placeholder="어떤 스터디를 찾으세요? #키워드 입력"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />

            <div
              className="community-search-view-command-button"
              onClick={handleSearch}
            >
              {path === "/" ? <Activesearch /> : <Search />}
            </div>
          </div>
        </div>
      </div>
      <div className="community-search-view-content">
        <SearchRecent keywordsArray={keywordsArray} onRemove={handleRemove} />
        <div className="community-search-hot-words-container-box">
          <div className="community-search-hot-words-title">인기 키워드</div>

          <ComKeyWordHome name="인기 키워드" />
        </div>
      </div>
    </div>
  );
};

export default SearchView;
