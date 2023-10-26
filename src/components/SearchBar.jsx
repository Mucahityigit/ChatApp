import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const SearchBar = () => {
  const { currentUser } = useSelector((state) => state.currentUser);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(null);
  const [usersFilter, setUsersFilter] = useState(null);
  // const [selectUser, setSelectUser] = useState(null);
  const [err, setErr] = useState(false);

  const userData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usersData = [];
    querySnapshot.forEach((doc) => {
      usersData.push(doc.data());
    });
    setUsers(usersData);
  };
  useEffect(() => {
    userData();
  }, []);

  const handleSearch = async () => {
    try {
      const getUsersFilter = users.filter((dt) => {
        if (
          username &&
          dt.userName.toLowerCase().includes(username.toLocaleLowerCase())
        ) {
          return dt;
        }
      });
      setUsersFilter(getUsersFilter);
    } catch (error) {
      setErr(true);
    }
  };

  const handleSelect = async (user) => {
    // check whether the group (chats in firestore) exist, if not create

    const combinedId =
      currentUser.uid > user.userID
        ? currentUser.uid + user.userID
        : user.userID + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        console.log(currentUser.uid);
        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.userID,
            displayName: user.userName,
            photoURL: user.userPhotoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.userID), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.PhotoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
    //create user chats
  };

  return (
    <div className="relative bg-[#F6F6F6] h-[72px] flex flex-row justify-between items-center px-4 py-3 gap-x-3 rounded-2xl shadow-sm">
      <div>
        <span className="text-lg font-bold">Chat</span>
      </div>
      <div className="relative flex flex-1">
        <input
          type="text"
          placeholder="Search"
          className="outline-none border rounded-3xl py-2 px-3 flex-1 placeholder:text-[13px]"
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={handleSearch}
        />
        <span className="absolute right-4 top-3.5 text-md text-black/40">
          <FiSearch />
        </span>
      </div>
      <div className="bg-[#FF4A09] text-white text-2xl p-2 rounded-full cursor-pointer">
        <AiOutlinePlus />
      </div>
      {usersFilter && (
        <div className="absolute top-[60px] left-0 w-full h-[auto] bg-[#F6F6F6] shadow-sm">
          <div>{err}</div>
          {usersFilter.map((user, index) => (
            <div
              key={index}
              onClick={() => {
                handleSelect(user);
              }}
              className=" px-5 cursor-default hover:bg-[#E9E9E9] focus:bg-[#E9E9E9] flex flex-col justify-between"
            >
              <div className="flex gap-3 justify-between items-center py-3">
                <div className="flex w-[43px] h-[43px] rounded-full overflow-hidden">
                  <img
                    src={user.userPhotoURL}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="font-bold text-md text-[13px]">
                    {user.userName + " " + user.userSurname}
                  </div>
                </div>
              </div>
              <div className="w-full border-b"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
