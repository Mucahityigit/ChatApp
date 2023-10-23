// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBymhxyLMHmVd98foYnf35uIcCu_13sLIM",
  authDomain: "mychatapptest-856d1.firebaseapp.com",
  projectId: "mychatapptest-856d1",
  storageBucket: "mychatapptest-856d1.appspot.com",
  messagingSenderId: "560088973799",
  appId: "1:560088973799:web:4d11269efeacbdd34fbd42",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
