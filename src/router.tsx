import { createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import App from "./App";
import Competitions from "./components/Competitions";
import ProtocolPage from "./components/ProtocolPage";
import Event from "./components/Event";
import RegistrationForm from "./components/RegistrationForm";
import ProfilePage from "./components/ProfilePage";
import ProfilePage2 from "./components/ProfilePage2";
import ScoresTable from "./components/ScoresTable";
import RegisteredParticipantsPage from "./components/RegisteredParticipantsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <SignIn />
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
        path: "/protocol",
        element: <ScoresTable />
      },
      {
        path: "/protocols",
        element: <ProtocolPage />
      },
      {
        path: "/event-register/1",
        element: <RegistrationForm />
      },
      {
        path: '/lk1',
        element: <ProfilePage />
      },
      {
        path: '/lk2',
        element: <ProfilePage2 />
      },
      {
        path: '/registered-participants/:id',
        element: <RegisteredParticipantsPage />
      }
    ]
  },

]);

export default router