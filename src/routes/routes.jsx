import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import UsingState from "../components/useState";
import UsingEffect from "../components/useEffect";
import UsingReducer from "../components/useReducer";
import Demomock from "../pages/demomock/Demomock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/effect",
    element: <UsingEffect />,
  },
  {
    path: "/reducer",
    element: <UsingReducer />,
  },
  {
    path: "/demomock",
    element: <Demomock />,
  },
  {
    path: "/state",
    element: <UsingState />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
