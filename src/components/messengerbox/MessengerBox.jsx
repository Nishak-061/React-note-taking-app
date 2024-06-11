import React, { useState } from "react";


import "./Messengerbox.css";

function MessengerBox({onAddNote}) {
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);


  const handleSubmit = () => {
    if (message.trim() !== "") {
      onAddNote(message)
      console.log("Message", message);
      setMessage("");
      setMessageSent(true);
    }
  };

  const handleEnterPress = (e) => {
    if(e.key === 'Enter') {
      handleSubmit()
      setMessageSent(false);
    }
  }

  return (
    <div className="messenger-container">
      
      <div className="messenger-textbox">
        <textarea
          type="text"
          className="messenger-box"
          placeholder="Enter your text here........"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleEnterPress}
        />

        <div className={`submit-button ${message.trim() ? "active" : ""} ${messageSent ? "disabled" : ""}`} onClick={handleSubmit}  disabled={messageSent}>
          <div style={{ color: message.trim() ? "#0000FF" : "grey" }} className="messenger-sent-font">➤</div>
        </div>
      </div>
    </div>
  );
}

export default MessengerBox;
