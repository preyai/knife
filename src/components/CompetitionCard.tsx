
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Stack,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import JudgeModal from './JudgeModal';
import { useState } from 'react';
import { Judge } from '../types';
import CompetitionProgramPopup from './CompetitionProgramPopup';
import { useNavigate } from 'react-router-dom';


const CompetitionCard = () => {
  const [openJudge, setOpenJudge] = useState(false)
  const [openProgram, setOpenProgram] = useState(false)
  const [judges, setJudges] = useState<Judge[]>([
    {
      id: "1",
      name: "Иван Иванов",
      region: "Москва",
      category: "BK",
    },
    {
      id: "2",
      name: "Петр Петров",
      region: "Санкт-Петербург",
      category: "1K",
    },
    {
      id: "3",
      name: "Анна Сидорова",
      region: "Красноярск",
      category: "2K",
    },
    {
      id: "4",
      name: "Дмитрий Кузнецов",
      region: "Новосибирск",
      category: "3K",
    },
  ])
  const navigate = useNavigate()

  return (
    <>
      <Box sx={{ minWidth: 275, padding: 2 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              Чемпионат России
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ ml: 1 }} color="text.secondary">
                Даты проведения: 10.02.2023 - 11.03.2023
              </Typography>
            </Stack>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Место проведения: г. Краснодар
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" onClick={() => setOpenJudge(true)}>судейская коллегия</Button>
              <Button variant="outlined" onClick={() => setOpenProgram(true)}>программа</Button>
              <Button variant="outlined" onClick={() => navigate('/event-register')}>регистрация</Button>
              <Button variant="outlined">протоколы</Button>
              <Button variant="outlined">отчеты</Button>
            </Stack>
          </CardContent>
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ pr: 2, pb: 2 }}>
            <Button variant="text">редактировать</Button>
            <Button variant="text">удалить</Button>
            <Button variant="text"><SettingsIcon /></Button>
          </Stack>
        </Card>
      </Box>
      <JudgeModal
        open={openJudge}
        handleClose={() => setOpenJudge(false)}
        judges={judges}
        handleEdit={() => { }}
        handleAdd={() => { }}
      />
      <CompetitionProgramPopup open={openProgram} onClose={() => setOpenProgram(false)} />
    </>
  );
}

export default CompetitionCard;
