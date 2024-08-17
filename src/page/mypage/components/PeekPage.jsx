import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Activemail } from "../../../assets/mypage/Activemail.svg";
import { ReactComponent as Mail } from "../../../assets/mypage/Mail.svg";
import { ReactComponent as Gohome } from "../../../assets/community/Gohome.svg";
import { ReactComponent as Heart } from "../../../assets/mypage/Heart.svg";
import CommunityHomeItem from "../../community/components/CommunityHomeItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../../../redux/communitySlice";
import { ReactComponent as Plus } from "../../../assets/community/PlusButton.svg";

const PeekPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const groups = useSelector((state) => state.community.groups);
  const dispatch = useDispatch();
  const groupStatus = useSelector((state) => state.community.status);

  useEffect(() => {
    if (groupStatus === "idle") {
      dispatch(fetchGroups());
    }
  }, [groupStatus, dispatch]);

  const handleGroupClick = (groupId) => {
    navigate(`/community/group/${groupId}/home`);
  };

  const profile = location.state?.profile;

  return (
    <div>
      <div
        className="community-peekpage-back-buttom"
        onClick={() => navigate(-1)}
      >
        <Plus />
      </div>
      {profile ? (
        <div className="mypage-profile">
          <div className="mypage-profile-picture"></div>
          <div className="mypage-profile-box">
            <div className="mypage-profile-name">{profile.name}</div>
            <div className="mypage-profile-content">
              {profile.content ||
                "리엑트 너무 어려워 scss 너무 너무 어려워 살려줘"}
            </div>
          </div>
        </div>
      ) : (
        <p>No profile selected</p>
      )}
      {profile.followstate === "no" ? (
        <div className="community-unfollow-box">
          <Link to="/mypage/edit">팔로우</Link>
        </div>
      ) : (
        <div className="community-follow-box">
          <Link to="/mypage/edit">팔로잉</Link>
        </div>
      )}

      <div className="community-profile-appeal-all">
        <div className="community-profile-appeal-mail">
          <Link to="/mypage/message">
            <div className="community-profile-appeal-mail-box">
              <div
                className="community-profile-appeal-mail-icon"
                onClick={() => navigate("/mypage/message")}
              >
                <Mail />
              </div>
              <div className="community-profile-appeal-text">메시지</div>
            </div>
          </Link>
        </div>

        <div className="community-profile-appeal-like">
          <Link to="/mypage/like">
            <div className="community-profile-appeal-like-box">
              <div className="community-profile-appeal-like-icon-box-num">
                <div
                  className="community-profile-appeal-like-icon"
                  onClick={() => navigate("/mypage/like")}
                >
                  <Gohome />
                </div>
              </div>
              <div className="community-profile-appeal-text">홈 방문하기</div>
            </div>
          </Link>
        </div>
      </div>
      {/* 해당 유저의 소모임 활동 내역으로 바꿔야함 */}
      <div className="mypage-divide-line"></div>
      <div className="mypage-community-section">
        <div className="mypage-communication">참여중인 소모임</div>
        <div className="mypage-communication-count">
          <p className="mypage-communication-now">참여중인 소모임2개</p>
          <p className="mypage-communication-all">/ 10개</p>
        </div>
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} onClick={() => handleGroupClick(group.id)}>
              <CommunityHomeItem group={group} />
            </div>
          ))
        ) : (
          <p>참여중인 커뮤니티를 찾을 수 없음</p>
        )}
      </div>
    </div>
  );
};

export default PeekPage;
