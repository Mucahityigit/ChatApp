import React from "react";
import Chatting from "../components/Chatting";
import MainPersonSide from "../components/MainPersonSide";

const ChatPage = () => {
  return (
    <div className="flex w-full h-full gap-1">
      <MainPersonSide />
      <Chatting />
    </div>
  );
};

export default ChatPage;
