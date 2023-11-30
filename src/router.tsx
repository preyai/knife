import { createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import App from "./App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path:"/signin",
        element:<SignIn/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    },
  ]);

export default router