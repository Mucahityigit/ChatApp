import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
