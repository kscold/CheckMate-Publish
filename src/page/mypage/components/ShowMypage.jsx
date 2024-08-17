import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups, setLikes } from '../../../redux/communitySlice';
import CommunityHomeItem from '../../community/components/CommunityHomeItem';
import { ReactComponent as Activemail } from '../../../assets/mypage/Activemail.svg';
import { ReactComponent as Mail } from '../../../assets/mypage/Mail.svg';
import { ReactComponent as Activeheart } from '../../../assets/mypage/Activeheart.svg';
import { ReactComponent as Heart } from '../../../assets/mypage/Heart.svg';

const fake_like_1 = [
  { id: 1, name: '이상해씨', time: '1시간전' },
  { id: 2, name: '용zi찬', time: '2시간전' },
  { id: 3, name: '용찬', time: '2시간전' },
  { id: 4, name: '은진', time: '3시간전' },
  { id: 5, name: '가원', time: '3시간전' },
  { id: 6, name: '승찬', time: '4시간전' },
  { id: 7, name: '이상해씨', time: '5시간전' },
];
const fake_like_2 = [
  { id: 8, name: '이씨', time: '2일전' },
  { id: 9, name: '용찬', time: '3일전' },
  { id: 10, name: '용zi찬', time: '3일전' },
  { id: 11, name: '은진닝', time: '4일전' },
  { id: 12, name: '가원', time: '4일전' },
  { id: 13, name: '승찬이형', time: '4일전' },
  { id: 14, name: '이상해씨', time: '5일전' },
];

const ShowMypage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const groups = useSelector((state) => state.community.groups); // 그룹 목록
  const likes = useSelector((state) => state.community.likes); // 받은 응원 데이터
  const dispatch = useDispatch();

  const groupStatus = useSelector((state) => state.community.status);

  useEffect(() => {
    if (groupStatus === 'idle') {
      dispatch(fetchGroups());
    }
    // Likes 데이터를 초기화합니다.
    dispatch(setLikes([...fake_like_1, ...fake_like_2]));
  }, [groupStatus, dispatch]);

  const handleGroupClick = (groupId) => {
    navigate(`/community/group/${groupId}/home`);
  };
  // 로그인에 따른 프로필 이름을 위한 전역 변수
  const nickname = localStorage.getItem('nickname');

  return (
    <div>
      <div className="mypage-profile">
        <div className="mypage-profile-picture"></div>
        <div className="mypage-profile-box">
          <div className="mypage-profile-name">{nickname}</div>
          <div className="mypage-profile-content">
            리엑트 너무 어려워 scss 너무 너무 어려워 살려줘
          </div>
        </div>
      </div>

      <div className="mypage-profile-appeal-all">
        <div className="mypage-profile-appeal-mail">
          <Link to="/mypage/message">
            <div className="mypage-profile-appeal-mail-box">
              <div
                className="mypage-profile-appeal-mail-icon"
                onClick={() => navigate('/mypage/message')}
              >
                {path === '/' ? <Activemail /> : <Mail />}
              </div>
              <div className="mypage-profile-appeal-text">메시지</div>
            </div>
          </Link>
        </div>

        <div className="mypage-profile-appeal-like">
          <Link to="/mypage/like">
            <div className="mypage-profile-appeal-like-box">
              <div className="mypage-profile-appeal-like-icon-box-num">
                <div
                  className="mypage-profile-appeal-like-icon"
                  onClick={() => navigate('/mypage/like')}
                >
                  {path === '/' ? <Activeheart /> : <Heart />}
                </div>
                <div className="mypage-profile-appeal-like-num">
                  {likes.length}
                </div>
              </div>
              <div className="mypage-profile-appeal-text">받은 응원</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mypage-profile-edit">
        <Link to="/mypage/edit">프로필 편집</Link>
      </div>
      <div className="mypage-divide-line"></div>
      <div className="mypage-community-section">
        <div className="mypage-communication">참여중인 소모임</div>
        <div className="mypage-communication-count">
          <p className="mypage-communication-now">
            참여중인 소모임 {groups.length}개
          </p>
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

export default ShowMypage;
