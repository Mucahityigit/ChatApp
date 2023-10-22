import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import PersonComp from "../components/PersonComp";
import { Users } from "../utils/Users";

const Persons = () => {
  return (
    <div className="flex flex-col gap-1 w-[340px]">
      <div className="bg-[#F6F6F6] h-[72px] flex flex-row justify-between items-center px-4 py-3 gap-x-3 rounded-2xl shadow-sm">
        <div>
          <span className="text-lg font-bold">Chat</span>
        </div>
        <div className="relative flex flex-1">
          <input
            type="text"
            placeholder="Search"
            className="outline-none border rounded-3xl py-2 px-3 flex-1 placeholder:text-[13px] placeholder:"
          />
          <span className="absolute right-4 top-3.5 text-md text-black/40">
            <FiSearch />
          </span>
        </div>
        <div className="bg-[#FF4A09] text-white text-2xl p-2 rounded-full cursor-pointer">
          <AiOutlinePlus />
        </div>
      </div>
      <div className="bg-[#F6F6F6] rounded-2xl flex-1 shadow-sm overflow-auto no-scrollbar shadow-[inset_0_-80px_25px_-15px_rgb(216,216,216)]">
        <div className="text-[13px] uppercase ml-5 my-3 font-semibold text-black/40">
          All
        </div>
        {Users?.map((user, index) => (
          <PersonComp
            key={index}
            name={user.name}
            surname={user.surname}
            imgUrl={user.imgUrl}
            lastMessage={user.lastMessage}
            date={user.date}
            status={user.status}
            notifications={user.notifications}
          />
        ))}
      </div>
    </div>
  );
};

export default Persons;
