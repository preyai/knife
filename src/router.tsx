import { createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import App from "./App";
import Competitions from "./components/Competitions";
import ProtocolPage from "./components/ProtocolPage";
import Event from "./components/Event";
import RegistrationForm from "./components/RegistrationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/competitions",
    element: <Competitions />
  },
  {
    path: "/event",
    element: <Event />
  },
  {
    path: "/protocols",
    element: <ProtocolPage />
  },
  {
    path: "/event-register",
    element: <RegistrationForm />
  },
]);

export default router