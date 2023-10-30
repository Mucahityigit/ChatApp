import React, { useEffect, useState } from "react";
import PersonComp from "./PersonComp";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { getChatId, getChatUser } from "../redux/chatSlice";

const Persons = () => {
  const [chats, setChats] = useState([]);
  const [userChatsInfo, setUserChatsInfo] = useState([]);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentUser);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  useEffect(() => {
    const userData = async () => {
      const userID = [];
      Object.entries(chats)?.forEach((chat) => {
        userID.push(chat[1].userInfo.uid);
      });

      const userDatas = [];
      userID.forEach(async (id) => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        userDatas.push(docSnap.data());
        setUserChatsInfo(userDatas);
      });
    };
    userData();
  }, [chats]);

  const handleSelect = (chat) => {
    dispatch(getChatId(chat.userID));
    dispatch(getChatUser(chat));
  };

  return (
    <div className="bg-[#F6F6F6] rounded-2xl flex-1 overflow-auto no-scrollbar shadow-[inset_0_-80px_25px_-15px_rgb(216,216,216)]">
      <div className="text-[13px] uppercase ml-5 my-3 font-semibold text-black/40">
        All
      </div>
      {userChatsInfo?.map((chat) => {
        const userChat = Object.entries(chats).find(
          (c) => c[1].userInfo.uid === chat.userID
        );
        return (
          <div key={chat.userID} onClick={() => handleSelect(chat)}>
            <PersonComp
              name={chat.userName}
              surname={chat.userSurname}
              imgUrl={chat.userPhotoURL}
              lastMessage={userChat ? userChat[1].lastMessage?.text : ""}
              date={"27/10/2023"}
              status={chat.userStatus}
              notifications={0}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
