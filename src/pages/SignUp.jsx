import React, { useEffect, useState } from "react";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (file) {
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          (error) => {
            console.log(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateProfile(res.user, {
                  displayName: name,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", res.user.uid), {
                  userID: res.user.uid,
                  userName: name,
                  userSurname: surname,
                  userStatus: true,
                  userCreatedDate: Timestamp.now(),
                  userEmail: email,
                  userPhotoURL: downloadURL,
                });
                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/");
              }
            );
          }
        );
      } else {
        await updateProfile(res.user, {
          displayName: name,
        });
        await setDoc(doc(db, "users", res.user.uid), {
          userID: res.user.uid,
          userName: name,
          userSurname: surname,
          userStatus: true,
          userCreatedDate: Timestamp.now(),
          userEmail: email,
        });
        await setDoc(doc(db, "userChats", res.user.uid), {});
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
              type="file"
              id="file"
              accept="image/"
              className="hidden"
              onChange={(e) => setFile(e.currentTarget.files[0])}
            />
            <label
              htmlFor="file"
              className="flex px-5 gap-5 items-center text-gray-600 font-semibold"
            >
              <span className="text-2xl text-red-400">
                <GrGallery />
              </span>
              <span>Add a profile picture</span>
            </label>
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
