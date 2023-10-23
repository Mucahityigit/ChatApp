import React from "react";
import { SiChatbot } from "react-icons/si";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocalPostOffice, MdNotificationsNone } from "react-icons/md";
import { BiTrash, BiChat } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";

const MenuSideBar = () => {
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);
  return (
    <div className="w-[72px] h-full bg-[#010019] flex flex-col justify-between items-center py-8 text-[#E6E5E9] rounded-2xl">
      <Link to="/">
        <SiChatbot className="text-[#FF4A09] text-2xl" />
      </Link>
      <div className="flex-1 flex flex-col justify-center items-center gap-10 text-lg">
        <Link className="focus:text-[#FF4A09]">
          <MdOutlineLocalPostOffice />
        </Link>
        <Link to="/chatpage" className="focus:text-[#FF4A09]">
          <BiChat />
        </Link>
        <Link to="/notifications" className="focus:text-[#FF4A09]">
          <MdNotificationsNone />
        </Link>
        <Link className="focus:text-[#FF4A09]">
          <BiTrash />
        </Link>
        <button onClick={handleSignOut} className="focus:text-[#FF4A09]">
          <FiLogOut />
        </button>
      </div>
      <Link
        to="/profile"
        className="w-10 h-10 bg-white/10 flex justify-center items-center rounded-full"
      >
        <AiOutlineUser className=" text-xl" />
      </Link>
    </div>
  );
};

export default MenuSideBar;
