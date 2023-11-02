// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDznIXFZmXUBIVVNE65xeqbp2QXrXpjV-c",
  authDomain: "mychatapp-4a728.firebaseapp.com",
  projectId: "mychatapp-4a728",
  storageBucket: "mychatapp-4a728.appspot.com",
  messagingSenderId: "1098166717654",
  appId: "1:1098166717654:web:76ffc864a6514977c50d77",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
