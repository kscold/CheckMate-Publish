import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../components/Loading';
import Layout from '../layout/Layout';
import CommunityProvider from '../page/community/components/CommunityProvider';
import mypageRouter from './mypageRouter';
import communityRouter from './communityRouter';

const Main = lazy(() => import('../page/main'));

const Achievement = lazy(() => import('../page/achievement'));
const Community = lazy(() =>
  import('../page/community/components/CommunityMainPage')
);
const Mypage = lazy(() => import('../page/mypage'));
const Login = lazy(() => import('../page/login'));
const Register = lazy(() => import('../page/register'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: 'register',
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '',
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: 'achievement',
        element: (
          <Suspense fallback={<Loading />}>
            <Achievement />
          </Suspense>
        ),
      },
      {
        path: 'community',
        element: (
          <CommunityProvider>
            <Suspense fallback={<Loading />}>
              <Community />
            </Suspense>
          </CommunityProvider>
        ),
        children: communityRouter,
      },
      {
        path: 'mypage',
        element: (
          <Suspense fallback={<Loading />}>
            <Mypage />
          </Suspense>
        ),
        children: mypageRouter,
      },
    ],
  },
]);

export default router;
