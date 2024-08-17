import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import axios from 'axios';

const GoogleLoginButton = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const clientId =
    '64914608678-347k5m0ag08q2sqpu504b2j9b0n0eapr.apps.googleusercontent.com';
  console.log(clientId);

  const handle_user_authentication = async (user_info) => {
    try {
      const response = await axios.post('api/v1/account/login', {
        oauthId: user_info.sub,
      });
      //
      // http://15.165.116.155:8080/api/v1/account/login
      console.log('response', response);
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      const oauthId = user_info.sub;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('oauthId', oauthId);
      onLoginSuccess();
      navigate('/');
    } catch (error) {
      console.error('Error during authentication:', error);
      if (error.response.status === 404) {
        const oauthId = user_info.sub;
        localStorage.setItem('oauthId', oauthId);
        navigate('/register');
      }
    }
  };

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <div>
          <div>
            <GoogleLogin
              onSuccess={(res) => {
                // console.log(jwtDecode(res.credential));
                handle_user_authentication(jwtDecode(res.credential));
              }}
              onFailure={(err) => {
                console.log(err);
              }}
            />
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
