import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { BiMicrophone, BiSend } from "react-icons/bi";

const ChattingInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className=" flex h-[60px] rounded-2xl gap-1">
      <div className="bg-[#f6f6f6] shadow-sm flex-1 rounded-2xl flex flex-row justify-between items-center gap-1 p-3">
        <div className="w-[45px] h-[45px] flex justify-center items-center hover:bg-[#eeeeee] rounded-xl">
          <BsEmojiSmile />
        </div>
        <div className="w-[45px] h-[45px] flex justify-center items-center hover:bg-[#eeeeee] rounded-xl">
          <AiOutlinePaperClip />
        </div>
        <div className="flex flex-1">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 py-1 px-3 rounded-xl outline-none text-[12px] font-oswald tracking-wider"
            type="text"
          />
        </div>
        <div className="w-[45px] h-[45px] flex justify-center items-center hover:bg-[#eeeeee] rounded-xl">
          {inputValue ? (
            <BiSend className="text-[#FF4A09]" />
          ) : (
            <BiMicrophone />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChattingInput;
