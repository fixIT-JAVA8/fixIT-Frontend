import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <LandingPage/>
        }
      ]
    },
]);

export default router