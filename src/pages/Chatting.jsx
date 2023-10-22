import React, { useState } from "react";
import { BsCameraVideo, BsEmojiSmile } from "react-icons/bs";
import { FiPhoneCall, FiSearch } from "react-icons/fi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiMicrophone, BiSend } from "react-icons/bi";

const Chatting = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col flex-1 gap-1 justify-between">
      <div className="bg-[#F6F6F6] shadow-sm h-[72px] rounded-2xl cursor-default">
        <div className=" px-5 pt-3.5">
          <div className="flex gap-1 justify-between items-center">
            <div className="profil flex flex-1 gap-3 items-center ">
              <div className=" profilHover relative w-[45px h-[45px] rounded-full overflow-hidden">
                <img
                  src="https://pbs.twimg.com/profile_images/1625900236882292746/OZkLMC0G_400x400.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-md text-[13px]">User Name</div>
                <div className="text-[13px] text-black/50 font-semibold">
                  Online
                </div>
              </div>
            </div>
            <div className="flex w-[123px] border rounded-md items-center justify-center">
              <div className="flex justify-center items-center w-[50%] h-[45px] hover:bg-[#eeeeee]">
                <BsCameraVideo />
              </div>
              <div className="border-r h-[30px]"></div>
              <div className="flex justify-center items-center w-[50%] h-[45px]  hover:bg-[#eeeeee]">
                <FiPhoneCall />
              </div>
            </div>
            <div className="flex justify-center items-center w-[60px] h-[45px] rounded-md hover:bg-[#eeeeee]">
              <FiSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f6f6] shadow-sm flex-1 rounded-2xl p-5">
        <div>20 October 2023</div>
      </div>
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
    </div>
  );
};

export default Chatting;
