// import React, { useState, useEffect, useRef } from "react";
// import plusIcon from "../../../assets/community/ChatPlusButton.svg";

// const ChatInput = ({ onSend, onFileUpload }) => {
//   const [message, setMessage] = useState("");
//   const textareaRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (message.trim()) {
//       onSend(message);
//       setMessage("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       handleSubmit(e);
//       e.preventDefault(); // Enter key로 줄바꿈 방지
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       onFileUpload(file);
//     }
//   };

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//     adjustTextareaHeight();
//   };

//   const adjustTextareaHeight = () => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto";
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//     }
//   };

//   useEffect(() => {
//     adjustTextareaHeight();
//   }, [message]);

//   return (
//     <form className="group-chat-input" onSubmit={handleSubmit}>
//       <button
//         type="button"
//         onClick={() => document.getElementById("file-input").click()}
//         className="plus-button"
//       >
//         <img src={plusIcon} alt="plus" />
//       </button>
//       <input
//         type="file"
//         id="file-input"
//         style={{ display: "none" }}
//         onChange={handleFileChange}
//       />
//       <textarea
//         ref={textareaRef}
//         value={message}
//         onChange={handleInputChange}
//         onKeyPress={handleKeyPress}
//         placeholder="메시지를 입력하세요"
//         rows="1"
//         className="chat-textarea"
//         style={{
//           minHeight: "38px",
//           maxHeight: "100px",
//           overflowY: message ? "auto" : "hidden",
//         }}
//       />
//       <button type="submit">전송</button>
//     </form>
//   );
// };

// export default ChatInput;

import React, { useState, useEffect, useRef } from "react";
import plusIcon from "../../../assets/community/ChatPlusButton.svg";
import NonSendButton from "../../../assets/community/NonSendButton.svg";
import YesSendButton from "../../../assets/community/YesSendButton.svg";

const ChatInput = ({ onSend, onFileUpload }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
      e.preventDefault(); // Enter key로 줄바꿈 방지
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  return (
    <form className="group-chat-input" onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={() => document.getElementById("file-input").click()}
        className="plus-button"
      >
        <img src={plusIcon} alt="plus" />
      </button>
      <input
        type="file"
        id="file-input"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="메시지를 입력하세요"
        rows="1"
        className="chat-textarea"
        style={{
          minHeight: "38px",
          maxHeight: "100px",
          overflowY: message ? "auto" : "hidden",
        }}
      />
      <button type="submit" className="send-button">
        <img src={message ? YesSendButton : NonSendButton} alt="send" />
      </button>
    </form>
  );
};

export default ChatInput;
