import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { FiPhoneCall, FiSearch } from "react-icons/fi";

const ChattingNavBar = () => {
  return (
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
  );
};

export default ChattingNavBar;
