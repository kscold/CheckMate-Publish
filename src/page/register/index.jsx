import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginBackBtn from '../../assets/register/login_back_btn.svg';
import checkIcon from '../../assets/register/check.svg';
import noCheckIcon from '../../assets/register/no-check.svg';
import inputIcon from '../../assets/register/input-img.svg';

const Register = () => {
  const [nickname, setNickname] = useState('');
  const [isValidLength, setIsValidLength] = useState(false);
  const [isValidFormat, setIsValidFormat] = useState(false);

  const navigate = useNavigate();
  localStorage.setItem('nickname', nickname);

  const checkNickname = async () => {
    try {
      const { data } = await axios.post('/api/v1/validations/name', {
        name: nickname,
      });
      alert('사용 가능한 닉네임입니다.');
    } catch (error) {
      handleNicknameError(error);
    }
  };

  const handleNicknameError = (error) => {
    if (error.response?.status === 400) {
      alert('1-16자리 영문, 숫자, 특수문자(. , _)를 입력해주세요.');
    } else if (error.response?.status === 409) {
      alert('이미 존재하는 닉네임입니다.');
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);
    validateNickname(value);
  };

  const validateNickname = (value) => {
    setIsValidLength(value.length >= 1 && value.length <= 14);

    const hasKorean = /[가-힣]/.test(value);
    const hasAlphabet = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasUnderscore = /_/.test(value);

    const validFormat =
      [hasKorean, hasAlphabet, hasNumber, hasUnderscore].filter(Boolean)
        .length >= 2;

    setIsValidFormat(validFormat);
  };

  const handleRegister = async () => {
    try {
      const { data } = await axios.post('/api/v1/account/register', {
        oauthId: localStorage.getItem('oauthId'),
        name: nickname,
      });
      storeTokens(data);
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (error) {
      if (error.response?.status === 500) {
        alert('당신은 이미 가입된 유저입니다.');
        navigate('/login');
      }
    }
  };

  const storeTokens = ({ accessToken, refreshToken }) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  return (
    <div className="register-container">
      <div className="register-title">
        <img
          src={loginBackBtn}
          className="back-img"
          alt="뒤로가기 버튼"
          onClick={() => navigate('/login')}
        />
        <h1>회원가입</h1>
      </div>
      <div className="input-group">
        <div className="nickname-group">
          <label htmlFor="nickname">닉네임</label>
          <button
            className={`check-btn ${nickname ? 'active' : ''}`}
            onClick={checkNickname}
            disabled={!nickname}
          >
            중복 확인
          </button>
        </div>
        <div className="input-container">
          <input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            onChange={handleNicknameChange}
            className="nickname-input"
          />
          <img src={inputIcon} alt="입력 아이콘" className="input-img" />
        </div>
      </div>
      <div className="validation-group">
        <ValidationItem
          isValid={isValidLength}
          text="1자 이상 14자 이하로 입력해주세요"
        />
        <ValidationItem
          isValid={isValidFormat}
          text="한글, 영문 대소문자, 숫자 중 2가지 이상을 조합해주세요."
        />
      </div>
      <button
        className="submit-btn"
        disabled={!(isValidLength && isValidFormat)}
        onClick={handleRegister}
      >
        회원가입
      </button>
    </div>
  );
};

const ValidationItem = ({ isValid, text }) => (
  <div className="validation-item">
    <img src={isValid ? checkIcon : noCheckIcon} alt="검증 아이콘" />
    <span>{text}</span>
  </div>
);

export default Register;
