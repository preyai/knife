import { Outlet, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./hooks";
import { reAuthenticate } from "./reducers/authReducer";
import { useEffect } from "react";
import MainWrap from "./components/MainWrap";


function App() {
  const auth = useAppSelector(store => store.auth)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.loading && !auth.user)
      navigate('/signin')
  }, [auth])

  useEffect(() => {
    dispatch(reAuthenticate());
  }, [dispatch]);

  return (
    <MainWrap>
      <Outlet />
    </MainWrap>
  )
}

export default App
