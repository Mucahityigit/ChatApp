import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { users } = useSelector((state) => state.users);
  console.log(users);
  return <div className="flex w-full h-full gap-1"> Home Page</div>;
};

export default Home;
