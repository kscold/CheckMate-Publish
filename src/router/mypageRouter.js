import React, { lazy, Suspense } from "react";

import Loading from "../components/Loading";

const ShowMypage = lazy(() => import("../page/mypage/components/ShowMypage"));
const ShowAlarm = lazy(() => import("../page/mypage/components/ShowAlarm"));
const MypageMessage = lazy(() =>
  import("../page/mypage/components/MypageMessage")
);
const MypageLike = lazy(() => import("../page/mypage/components/MypageLike"));
const MypageEdit = lazy(() =>
  import("../page/mypage/components/MypageEdit.jsx")
);

const mypageRouter = [
  {
    path: "showmypage",
    element: (
      <Suspense fallback={<Loading />}>
        <ShowMypage />
      </Suspense>
    ),
  },
  {
    path: "showalarm",
    element: (
      <Suspense fallback={<Loading />}>
        <ShowAlarm />
      </Suspense>
    ),
  },
  {
    path: "edit",
    element: (
      <Suspense fallback={<Loading />}>
        <MypageEdit />
      </Suspense>
    ),
  },
  {
    path: "message",
    element: (
      <Suspense fallback={<Loading />}>
        <MypageMessage />
      </Suspense>
    ),
  },
  {
    path: "like",
    element: (
      <Suspense fallback={<Loading />}>
        <MypageLike />
      </Suspense>
    ),
  },
];
export default mypageRouter;
