// src/page/community/components/GroupCreateNotice.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNotice } from '../../../redux/communitySlice';
import BackButton from "../../../assets/community/BackButton.svg";

const GroupCreateNotice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [isNotice, setIsNotice] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    if (title.trim() === '') {
      setErrorMessage('공지사항을 작성해 주세요.');
      return;
    }
    const newNotice = {
      title,
      date: new Date().toLocaleString('ko-KR', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
      author: '가가원', // 실제 작성자 이름으로 대체
    };
    dispatch(addNotice(newNotice));
    navigate(-1);
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 2000); // 3초 후에 메시지 제거

      return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
    }
  }, [errorMessage]);

  const handleTitleChange = useCallback((e) => {
    console.log('Title changed:', e.target.value);
    setTitle(e.target.value);
  }, []);

  const handleCheckboxChange = () => {
    setIsNotice((prev) => !prev);
  };

  return (
    <div className="group-create-notice">
      <header className="group-create-notice-header">
        <button className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="back" />
        </button>
        <h1 className="group-create-notice-h1">글 작성하기</h1>
      </header>
      <textarea className="group-create-notice-textarea"
        placeholder="멤버들과 공유하고 싶은 소식을 남겨보세요."
        value={title}
        onChange={handleTitleChange}
      />
      {errorMessage && <p className="group-create-notice-error-message">{errorMessage}</p>}
      <div className="group-create-notice-option">
        <input
          type="checkbox"
          id="chk"
          checked={isNotice}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="chk">공지</label>
      </div>
      <footer className="group-create-notice-footer">
        <button className="group-create-notice-submit-button" onClick={handleSubmit}>작성하기</button>
      </footer>
    </div>
  );
};

export default React.memo(GroupCreateNotice);