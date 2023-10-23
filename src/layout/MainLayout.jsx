import React from "react";
import MenuSideBar from "../components/MenuSideBar";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const MainLayout = () => {
  const [user, isLoading] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  return (
    <div className="bg-[#010019] w-full h-screen flex">
      <div className="bg-[#EEEEEE] w-[1200px] h-[700px] m-auto rounded-2xl p-7 flex gap-1">
        <MenuSideBar /> <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
