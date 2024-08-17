import React, { useState } from "react";

const SelectMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("랭킹순");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="community-search-keywordin-container-dropdown">
      <button
        className="community-search-keywordin-container-dropdown-toggle"
        onClick={toggleDropdown}
      >
        {selectedOption} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="community-search-keywordin-container-dropdown-menu">
          <div
            className="community-search-keywordin-container-dropdown-item"
            onClick={() => handleOptionClick("랭킹순")}
          >
            랭킹순
          </div>
          <div className="community-search-keywordin-container-divide-line">
            {" "}
          </div>
          <div
            className="community-search-keywordin-container-dropdown-item"
            onClick={() => handleOptionClick("인기순")}
          >
            인기순
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
