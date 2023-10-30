import React from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const { currentUser } = useSelector((state) => state.currentUser);
  const { user } = useSelector((state) => state.chatUser);
  return (
    // .owner{
    //   flex-row-reverse,

    // .content{
    //   items-end
    // }
    // }
    // p{
    //   bg-color,
    //   color,
    //   radius
    // }
    <div className="flex gap-5 mb-[20px] ">
      <div className="flex flex-col text-gray-500">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src="https://images.pexels.com/photos/3354647/pexels-photo-3354647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-[10px]">
        <p className="bg-[#FF4A09] text-white py-2 px-5 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg">
          hello
        </p>
        {/* <img
          className="w-[50%]"
          src="https://images.pexels.com/photos/3354647/pexels-photo-3354647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;
