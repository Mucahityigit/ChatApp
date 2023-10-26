import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.currentUser);

  return (
    <div className="flex w-full h-full gap-1">
      {" "}
      Home Page {currentUser.displayName}
    </div>
  );
};

export default Home;
