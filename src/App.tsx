import { Outlet, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./hooks";
import { reAuthenticate } from "./reducers/authReducer";
import { useEffect } from "react";


function App() {
  const auth = useAppSelector(store => store.auth)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.isAuth)
      navigate('/signin')
  }, [auth])

  useEffect(() => {
    dispatch(reAuthenticate());
  }, [dispatch]);

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
