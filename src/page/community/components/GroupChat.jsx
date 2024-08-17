import React, { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import NonChatLikeButton from "../../../assets/community/NonChatLikeButton.svg";
import YesChatLikeButton from "../../../assets/community/YesChatLikeButton.svg";

const GroupChat = () => {
  const [messages, setMessages] = useState([
    { text: '안녕하세요 Lundean 님 ~', sender: 'other', time: '오전 2:14', userName: '용zi찬', likes: 0, liked: false },
    { text: '안녕하세요 Lundean 님 ~', sender: 'other', time: '오전 2:14', userName: '가원', likes: 0, liked: false },
    { text: '안녕하세요 Lundean 님 ~', sender: 'other', time: '오전 2:14', userName: '승찬', likes: 0, liked: false },
    { text: '쏟아지는 맘을 멈출수가 없을까~ 너의 작은 인사 한마디에 요란해져서, 네 맘의 비밀번호를 눌러 열고 싶지만', sender: 'other', time: '오전 2:14', userName: '쵸단', likes: 0, liked: false},
  ]);

  const chatContentRef = useRef(null);
  const wasMessageAdded = useRef(false);

  const handleSend = (message) => {
    setMessages(prevMessages => {
      wasMessageAdded.current = true;
      return [
        ...prevMessages,
        {
          text: message,
          sender: 'user',
          time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
          userName: 'Lundean',
          likes: 0,
          liked: false
        }
      ];
    });
  };

  const handleFileUpload = (file) => {
    setMessages(prevMessages => {
      wasMessageAdded.current = true;
      return [
        ...prevMessages,
        {
          text: file.name,
          type: 'file',
          sender: 'user',
          time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
          userName: 'Lundean',
          likes: 0,
          liked: false
        }
      ];
    });
  };

  const handleLike = (index) => {
    setMessages(prevMessages =>
      prevMessages.map((msg, i) =>
        i === index ? { ...msg, liked: !msg.liked, likes: msg.liked ? msg.likes - 1 : msg.likes + 1 } : msg
      )
    );
    wasMessageAdded.current = false;
  };

  useEffect(() => {
    if (wasMessageAdded.current && chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
      wasMessageAdded.current = false;
    }
  }, [messages]);

  return (
    <div className="group-chat">
      <div className="group-chat-content" ref={chatContentRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`group-chat-message ${msg.sender}`}>
            {msg.sender === 'other' && <div className="profile-pic"></div>}
            <div className="message-content">
              {msg.sender === 'other' && <div className="username">{msg.userName}</div>}
              <div className="message">
                {msg.text}
              </div>
              <div className="time">
                {msg.time}
                {msg.sender === 'other' && msg.likes > 0 && (
                  <span className="likes-count"> {msg.likes} Likes</span>
                )}
              </div>
            </div>
            {msg.sender === 'other' && (
              <button className="like-button" onClick={() => handleLike(index)}>
                <img src={msg.liked ? YesChatLikeButton : NonChatLikeButton} alt="like" />
              </button>
            )}
          </div>
        ))}
      </div>
      <ChatInput onSend={handleSend} onFileUpload={handleFileUpload} />
    </div>
  );
};

export default GroupChat;
