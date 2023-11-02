import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.currentUser);

  return (
    <div className="flex w-full h-full gap-1">
      <div className="bg-gray-500 w-[400px] m-auto flex flex-col gap-4 justify-between items-center">
        <div>Merhaba {currentUser.displayName}</div>
        <p>
          Anasayfa şuanda tasarım aşamasında. İstersen yan taraftaki sohbet
          ikonuna veya aşağıdaki butona tıklayarak sohbet sayfasına
          gidebilirsin.
        </p>
        <div>
          <button className="py-3 px-5 rounded-2xl bg-[#FF4A09] text-white">
            Sohbet sayfasına git
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
