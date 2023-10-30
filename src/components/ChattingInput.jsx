import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { BiMicrophone, BiSend } from "react-icons/bi";
import { useSelector } from "react-redux";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";

const ChattingInput = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useSelector((state) => state.currentUser);
  const { user, chatId } = useSelector((state) => state.chatUser);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [chatId + ".lastMessage"]: { text },
      [chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", user.userID), {
      [chatId + ".lastMessage"]: { text },
      [chatId + ".date"]: serverTimestamp(),
    });
    setText("");
    setImg(null);
  };

  return (
    <div className=" flex h-[60px] rounded-2xl gap-1">
      <div className="bg-[#f6f6f6] shadow-sm flex-1 rounded-2xl flex flex-row justify-between items-center gap-1 p-3">
        <div className="w-[45px] h-[45px] flex justify-center items-center hover:bg-[#eeeeee] rounded-xl">
          <BsEmojiSmile />
        </div>
        <div className="w-[45px] h-[45px] flex justify-center items-center hover:bg-[#eeeeee] rounded-xl">
          <input
            type="file"
            className="hidden"
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <AiOutlinePaperClip />
          </label>
        </div>
        <div className="flex flex-1">
          <input
            className="flex-1 py-1 px-3 rounded-xl outline-none text-[12px] font-oswald tracking-wider"
            type="text"
            placeholder="Type something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="w-[45px] h-[45px] flex justify-center items-center hover:bg-[#eeeeee] rounded-xl">
          {text ? (
            <BiSend onClick={handleSend} className="text-[#FF4A09]" />
          ) : (
            <BiMicrophone />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChattingInput;
