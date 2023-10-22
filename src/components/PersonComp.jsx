import React from "react";

const PersonComp = ({
  name,
  surname,
  imgUrl,
  lastMessage,
  date,
  status,
  notifications,
}) => {
  return (
    <>
      <div className=" px-5 cursor-default hover:bg-[#E9E9E9] focus:bg-[#E9E9E9] flex flex-col justify-between">
        <div className="flex gap-3 justify-between items-center py-3">
          <div className="flex w-[43px] h-[43px] rounded-full overflow-hidden">
            <img src={imgUrl} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col flex-1">
            <div className="font-bold text-md text-[13px]">
              {name + " " + surname}
            </div>
            <div className="text-[13px] text-black/50 font-semibold">
              {lastMessage}
            </div>
          </div>
          <div className="flex flex-col w-[55px] items-end gap-2">
            <div className="text-[12px] uppercase text-black/50 font-bold font-oswald">
              {date}
            </div>
            {notifications > 0 ? (
              <div className="w-[17px] h-[17px] bg-[#FF4A09] text-white text-[12px] rounded-full flex justify-center items-center">
                {notifications}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full border-b"></div>
      </div>
    </>
  );
};

export default PersonComp;
