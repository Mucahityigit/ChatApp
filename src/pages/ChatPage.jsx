import React from "react";
import Persons from "./Persons";
import Chatting from "./Chatting";

const ChatPage = () => {
  return (
    <div className="flex w-full h-full gap-1">
      <Persons />
      <Chatting />
    </div>
  );
};

export default ChatPage;
