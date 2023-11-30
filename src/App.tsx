import { Link } from "react-router-dom"



function App() {

  return (
    <>
      <Link to={'/signin'}>Авторизация</Link>
      <br />
      <Link to={'/competitions'}>Соревнования</Link>
      <br />
      <Link to={'/protocols'}>Протоколы</Link>
      <br />
      <Link to={'/event-register'}>Регистрация</Link>
      <br />
      <Link to={'/event'}>Текущее соревнование</Link>
      <br />
      <Link to={'/lk1'}>Кабинет 1</Link>
      <br />
      <Link to={'/lk2'}>Кабинет 2</Link>
    </>
  )
}

export default App
