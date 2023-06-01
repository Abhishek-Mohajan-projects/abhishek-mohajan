import React from "react";

const Chat = () => {
  return (
    <div className="rounded-2xl inline fixed bottom-5 left-2 chat p-7">
      <button
        className="inline px-3 py-5 rounded-2xl new-btn"
        style={{ backgroundColor: "orange" }}
      >
        <a href="https://www.linkedin.com/in/abhishek-mohajan">
          <h3 className="text-black">Chat</h3>
        </a>
      </button>
    </div>
  );
};

export default Chat;
