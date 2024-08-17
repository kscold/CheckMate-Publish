import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import logo from '../../assets/login/logo.svg';
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('accessToken')
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  return (
    <div className="login-container">
      {/* <h1 className="login-title">CheckMate</h1> */}
      <img src={logo} className="logo-img" />
      <GoogleLoginButton onLoginSuccess={handleLogin} className="login-btn" />
    </div>
  );
};

export default Login;
