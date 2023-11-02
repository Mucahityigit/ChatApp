import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

const Message = ({ message }) => {
  const { currentUser } = useSelector((state) => state.currentUser);
  const { user } = useSelector((state) => state.chatUser);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={classNames("flex gap-2 mb-[20px] ", {
        "flex-row-reverse": message?.senderId === currentUser.uid,
      })}
    >
      <div className="flex flex-col text-gray-400">
        <img
          className="w-[25px] h-[25px] rounded-full object-cover"
          src={
            message?.senderId === currentUser.uid
              ? currentUser.photoURL
              : user.userPhotoURL
          }
          alt=""
        />
      </div>
      <div
        className={classNames("max-w-[80%] w-auto flex flex-col gap-[10px]", {
          "flex-row items-end justify-end":
            message?.senderId === currentUser.uid,
        })}
      >
        <div
          className={classNames(
            "bg-[#FF4A09] text-white py-1 px-2 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg flex flex-col items-start",
            {
              "bg-[#e25f2bde] rounded-tl-md  rounded-br-none items-end":
                message?.senderId === currentUser.uid,
            }
          )}
        >
          <p>{message?.text}</p>
          <span className="text-[11px] text-white/50">just now</span>
        </div>
        {message?.img && (
          <img className="w-[50%] rounded-md" src={message.img} alt="" />
        )}
      </div>
    </div>
  );
};

export default Message;
