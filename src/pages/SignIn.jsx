import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, isLoading] = useAuthState(auth);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(getUser(user));
    });
  }, [auth]);

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="bg-[#010019] w-full h-screen flex">
      <div className="bg-[#EEEEEE] w-[1200px] h-[700px] m-auto rounded-2xl p-7 flex gap-1">
        <div className="max-w-md mx-auto py-12">
          <h1 className="text-2xl">Sign In</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4 mt-8"
          >
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
            <Link to="/forgot-password" className="ml-auto">
              Forgot Password
            </Link>
            <input
              type="submit"
              className="p-4 bg-[#FF4A09] text-white rounded-md"
              value="Sign in"
            />
            <Link to="/sign-up">Don't have an account? Sign up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
