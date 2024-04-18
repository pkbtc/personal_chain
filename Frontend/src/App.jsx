import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import {MyContextProvider} from "./context/AuthContext";
import CreateData from "./pages/CreateData";
import Chain from "./pages/Chain";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chain",
      element: <Chain />,
    },
    {
      path: "/create-data",
      element: <CreateData />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <MyContextProvider>
      <div className="h-screen">
        <RouterProvider router={router} />
      </div>
    </MyContextProvider>
  );
}

export default App;
