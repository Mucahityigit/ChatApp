import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import webDesign from "../assets/webdesign.jpg";

const Home = () => {
  const { currentUser } = useSelector((state) => state.currentUser);
  console.log(currentUser);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <img src={webDesign} className="h-[300px]" alt="" />
      <div className=" w-[400px] m-auto flex flex-col gap-10 justify-between items-center">
        <div className="text-3xl">Merhaba {currentUser.displayName}</div>
        <div className="text-center">
          <p>
            Anasayfa şuanda tasarım aşamasında. İstersen sol taraftaki sohbet
            ikonuna veya aşağıdaki butona tıklayarak sohbet sayfasına
            gidebilirsin.
          </p>
        </div>
        <div>
          <Link
            to="chatpage"
            className="py-3 px-5 rounded-2xl bg-[#FF4A09] text-white"
          >
            Sohbet sayfasına git
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
