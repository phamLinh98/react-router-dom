import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import NotFound from "../components/NotFound";
import Detail from "../components/Detail";

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
    path: "/about",
    element: <About />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
