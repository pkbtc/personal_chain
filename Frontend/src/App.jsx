import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
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
    <div className="h-screen bg-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
