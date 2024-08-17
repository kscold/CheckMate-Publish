import React, { createContext, useContext, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';

// footer를 부분적으로 비활성화하기 위한 전역 hook 설정
const FooterVisibilityContext = createContext();

export const useFooterVisibility = () => useContext(FooterVisibilityContext);

const Layout = () => {
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  const noFooterPaths = [
    '/community/group',
    '/community/searchhome',
    '/community/keyword',
    '/community/creategroup',
    '/mypage/message',
    '/login',
    '/register',
  ];

  // 현재 location이랑 같은지 확인
  const footerVisible =
    showFooter &&
    !noFooterPaths.some((path) => location.pathname.startsWith(path));

  return (
    <FooterVisibilityContext.Provider value={{ showFooter, setShowFooter }}>
      <div
        className={
          footerVisible ? 'content-container' : 'nofooter-content-container'
        }
      >
        <Outlet />
      </div>
      {footerVisible && <Footer />}
    </FooterVisibilityContext.Provider>
  );
};

export default Layout;