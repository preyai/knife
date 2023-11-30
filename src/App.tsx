import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import CompetitionCard from './components/CompetitionCard'
import NewEventModal from './components/NewEventModal'
import { ThemeProvider } from '@emotion/react'
import { themeOptions } from './theme'
import { createTheme } from '@mui/material'
import JudgeModal from './components/JudgeModal'
import CompetitionTable from './components/CompetitionTable'
import RegistrationForm from './components/RegistrationForm'
import JudgeProtocolTable from './components/JudgeProtocolTable'
import { JudgeProtocol } from './types'

const theme = createTheme({
  palette: {
    mode: 'light',
  }
})

const sampleProtocols: JudgeProtocol[] = [
  {
    name: 'Смирнов Иван Иванович',
    region: 'Ивановская область',
    scores: [20, 30, 10, 15, 20, 25, 15, 10, 20, 30], // Пример баллов за каждую серию
    totalPoints: 300, // Суммарное количество баллов
    rank: 4, // Занимаемое место
  },
  {
    name: 'Кузнецов Семён Петрович',
    region: 'Рязанская область',
    scores: [25, 25, 20, 15, 30, 20, 25, 20, 25, 25],
    totalPoints: 415,
    rank: 2,
  },
  {
    name: 'Южакин Михаил Александрович',
    region: 'Пермский край',
    scores: [15, 20, 15, 15, 45, 15, 15, 15, 40, 15],
    totalPoints: 360,
    rank: 3,
  },
  // Добавьте другие данные по аналогии
];


function App() {

  return (
    <ThemeProvider theme={theme}>
      {/* <SignUp /> */}
      <CompetitionCard/>
      {/* <NewEventModal open={true} handleClose={()=>{}}/> */}
      {/* <JudgeModal open={true} handleClose={()=>{}} judges={[{id:"1",name:"Иван",region:"Москва",category:"1K"}]} handleEdit={()=>{}} handleAdd={()=>{}} /> */}
      {/* <CompetitionTable events={[
        {
          ageGroup: "мальчики 10-11 лет",
          discipline: "дистанция 3 м",
          date: "13.10.2023",
          time: "10:00",
          stage: "предварительный",
          numberOfTargets: 16,
          numberOfParticipants: 10,
        }
      ]} /> */}
      {/* <JudgeProtocolTable protocols={sampleProtocols}/> */}
    </ThemeProvider>
  )
}

export default App
