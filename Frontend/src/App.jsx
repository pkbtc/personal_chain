import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddData from "./pages/AddData";
import AvgMine from "./pages/AvgMine";
import JoinPeer from "./pages/JoinPeer";
import Signup from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import {MyContextProvider} from "./context/AuthContext";
import SignIn from "./pages/SignIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-data",
      element: <AddData />,
    },
    {
      path: "/join-peer",
      element: <JoinPeer />,
    },
    {
      path: "/avg-mine",
      element: <AvgMine />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <MyContextProvider>
      <div className="h-screen">
        <NavBar />
        <RouterProvider router={router} />
      </div>
    </MyContextProvider>
  );
}

export default App;
