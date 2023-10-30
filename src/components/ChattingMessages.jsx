import React, { useState } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const ChattingMessages = () => {
  const [messages, setMessages] = useState();
  const { chatId } = useSelector((state) => state.chatUser);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [chatId]);
  return (
    <div className="bg-[#f6f6f6] shadow-sm flex-1 rounded-2xl p-5 overflow-auto">
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default ChattingMessages;
