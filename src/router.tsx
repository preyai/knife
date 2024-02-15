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
import CompetitionPage from "./components/CompetitionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Event />
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
      },
      {
        path: "/competition/:id",
        element: <CompetitionPage />
      }
    ]
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
    path: "/event-register/1",
    element: <RegistrationForm />
  },
]);

export default router