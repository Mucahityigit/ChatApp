import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ChatPage from "../pages/ChatPage";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

const rootes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "chatpage",
        element: <ChatPage />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
]);

export default rootes;
