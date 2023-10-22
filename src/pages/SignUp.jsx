import React, { useState, useCallback, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Link, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, isLoading] = useAuthState(auth);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          updateProfile(auth.user, { displayName: name });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [name, email, password]
  );
  useEffect(() => {
    try {
      addDoc(collection(db, "users"), {
        userID: user.uid,
        userName: name,
        userSurname: surname,
        userEmail: email,
        userPassword: password,
        userProfileUrl:
          "https://pbs.twimg.com/profile_images/1625900236882292746/OZkLMC0G_400x400.jpg",
        userStatus: true,
        userCreatedDate: new Date(),
      });
      console.log("first");
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }, [user]);

  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="bg-[#010019] w-full h-screen flex">
      <div className="bg-[#EEEEEE] w-[1200px] h-[700px] m-auto rounded-2xl p-7 flex gap-1">
        <div className="max-w-md mx-auto py-12">
          <h1 className="text-2xl">Create new account</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4 mt-8"
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="p-4 bg-gray-100 rounded-md"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <input
              type="text"
              placeholder="Enter your surname"
              className="p-4 bg-gray-100 rounded-md"
              value={surname}
              onChange={(e) => setSurname(e.currentTarget.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 bg-gray-100 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="p-4 bg-gray-100 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <input
              type="submit"
              className="p-4 bg-[#FF4A09] text-white rounded-md"
              value="Sign up"
            />
            <Link to="/sign-in">Already have an account? Sign in</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
