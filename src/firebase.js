// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiKpNJxaNfLFRNjMu0iM7RhTMXVBPalGE",
  authDomain: "chattingapptest-b07a2.firebaseapp.com",
  projectId: "chattingapptest-b07a2",
  storageBucket: "chattingapptest-b07a2.appspot.com",
  messagingSenderId: "333756132575",
  appId: "1:333756132575:web:a88fa030b416a767064d6a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
