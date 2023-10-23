import React from "react";
import PersonComp from "./PersonComp";
import { Users } from "../utils/Users";

const Persons = () => {
  return (
    <div className="bg-[#F6F6F6] rounded-2xl flex-1 overflow-auto no-scrollbar shadow-[inset_0_-80px_25px_-15px_rgb(216,216,216)]">
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
  );
};

export default Persons;
