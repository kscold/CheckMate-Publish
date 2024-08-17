import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

const CommunityItem = lazy(() =>
  import('../page/community/components/CommunityItem')
);
const CommunityProvider = lazy(() =>
  import('../page/community/components/CommunityProvider')
);
const CreateGroup = lazy(() =>
  import('../page/community/components/CreateGroup')
);
// const CommunityMainPage = lazy(() =>
//   import("../page/community/components/CommunityMainPage")
// );
const CommunityHomePage = lazy(() =>
  import('../page/community/components/CommunityHomePage')
);
const GroupDetailPage = lazy(() =>
  import('../page/community/components/GroupDetailPage')
);
const GroupHome = lazy(() => import('../page/community/components/GroupHome'));
const GroupChat = lazy(() => import('../page/community/components/GroupChat'));
const GroupAchievements = lazy(() =>
  import('../page/community/components/GroupAchievements')
);

const GroupNotices = lazy(() =>
  import('../page/community/components/GroupNotices')
);

const CommunityShowFollwers = lazy(() =>
  import('../page/community/components/CommunityShowFollwers')
);
const CommunityShowAddFreind = lazy(() =>
  import('../page/community/components/CommunityShowAddFreind')
);
const CommunityShowProfile = lazy(() =>
  import('../page/community/components/CommunityShowProfile')
);

const PeekPage = lazy(() => import('../page/mypage/components/PeekPage'));

const ComMyPage = lazy(() => import('../page/community/components/ComMyPage'));
const SearchView = lazy(() =>
  import('../page/community/components/search/SearchView')
);
const ComSearchHome = lazy(() =>
  import('../page/community/components/ComSearchHome')
);
const KeyWordIn = lazy(() =>
  import('../page/community/components/category/KeyWordIn')
);
const GroupCreateNotice = lazy(() =>
  import('../page/community/components/GroupCreateNotice')
);

const GroupNoticeDetail = lazy(() =>
  import('../page/community/components/GroupNoticeDetail')
);

const communityRouter = [
  {
    path: 'main',
    element: (
      <Suspense fallback={<Loading />}>
        <ComMyPage />
      </Suspense>
    ),
  },
  {
    path: 'home',
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityHomePage />
      </Suspense>
    ),
  },
  {
    path: 'searchhome',
    element: (
      <Suspense fallback={<Loading />}>
        <ComSearchHome />
      </Suspense>
    ),
  },
  {
    path: 'CommunityItem',
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityItem />
      </Suspense>
    ),
  },
  {
    path: 'CommunityProvider',
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityProvider />
      </Suspense>
    ),
  },
  {
    path: 'creategroup',
    element: (
      <Suspense fallback={<Loading />}>
        <CreateGroup />
      </Suspense>
    ),
  },
  {
    path: 'communityShowProfile',
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityShowProfile />
      </Suspense>
    ),
  },

  {
    path: 'communityShowFollwers',
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityShowFollwers />
      </Suspense>
    ),
  },
  {
    path: 'addFreind',
    element: (
      <Suspense fallback={<Loading />}>
        <CommunityShowAddFreind />
      </Suspense>
    ),
  },
  {
    path: 'peekpage',
    element: (
      <Suspense fallback={<Loading />}>
        <PeekPage />
      </Suspense>
    ),
  },
  {
    path: 'searchview',
    element: (
      <Suspense fallback={<Loading />}>
        <SearchView />
      </Suspense>
    ),
  },
  {
    path: 'keyword',
    element: (
      <Suspense fallback={<Loading />}>
        <KeyWordIn />
      </Suspense>
    ),
  },
  {
    path: 'group/:groupId',
    element: (
      <Suspense fallback={<Loading />}>
        <GroupDetailPage />
      </Suspense>
    ),
    children: [
      {
        path: 'home',
        element: (
          <Suspense fallback={<Loading />}>
            <GroupHome />
          </Suspense>
        ),
      },
      {
        path: 'chat',
        element: (
          <Suspense fallback={<Loading />}>
            <GroupChat />
          </Suspense>
        ),
      },
      {
        path: 'achievements',
        element: (
          <Suspense fallback={<Loading />}>
            <GroupAchievements />
          </Suspense>
        ),
      },
      {
        path: 'notices',
        element: (
          <Suspense fallback={<Loading />}>
            <GroupNotices />
          </Suspense>
        ),
      },
      {
        path: 'create-notices',
        element: (
          <Suspense fallback={<Loading />}>
            <GroupCreateNotice />
          </Suspense>
        ),
      },
      {
        path: 'notices/:noticeId',
        element: (
          <Suspense fallback={<Loading />}>
            <GroupNoticeDetail />
          </Suspense>
        ),
      },
    ],
  },
];

export default communityRouter;
