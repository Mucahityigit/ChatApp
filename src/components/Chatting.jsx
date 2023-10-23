import React from "react";
import ChattingNavBar from "./ChattingNavBar";
import ChattingMessages from "./ChattingMessages";
import ChattingInput from "./ChattingInput";

const Chatting = () => {
  return (
    <div className="flex flex-col flex-1 gap-1 justify-between">
      <ChattingNavBar />
      <ChattingMessages />
      <ChattingInput />
    </div>
  );
};

export default Chatting;
