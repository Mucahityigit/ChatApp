import React from "react";
import SearchBar from "./SearchBar";
import Persons from "./Persons";

const MainPersonSide = () => {
  return (
    <div className="flex flex-col gap-1 w-[340px]">
      <SearchBar />
      <Persons />
    </div>
  );
};

export default MainPersonSide;
