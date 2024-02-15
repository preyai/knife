import React from 'react';
import {
  Box, Card, CardContent, Typography, Button, Stack
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import JudgeModal from './JudgeModal';
import { useState } from 'react';
import CompetitionProgramPopup from './CompetitionProgramPopup';
import { useNavigate } from 'react-router-dom';
import NewEventModal from './NewEventModal';
import { Competition } from 'simpl-api';


// Определяем пропсы для CompetitionCard
interface CompetitionCardProps {
  competition: Competition;
  // onDelete: (competitionId: string | {}) => void;
  // onEdit: (updatedCompetition: Competition) => void;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition }) => {
  const [openJudge, setOpenJudge] = useState(false);
  const [openProgram, setOpenProgram] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const navigate = useNavigate(); // Хук для навигации

  const handleRegistrationClick = () => {
    // Перенаправляем пользователя на страницу со списком зарегистрированных участников
    navigate(`/registered-participants/${competition._id}`);
  };

  return (
    <>
      <Box sx={{ minWidth: 275, padding: 2 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {competition.name}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ ml: 1 }} color="text.secondary">
                Даты проведения: {competition.dateStart} - {competition.dateEnd}
              </Typography>
            </Stack>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Место проведения: {competition.location}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" onClick={() => setOpenJudge(true)}>судейская коллегия</Button>
              <Button variant="outlined" onClick={() => setOpenProgram(true)}>программа</Button>
              <Button variant="outlined" onClick={handleRegistrationClick}>регистрация</Button>
              {/* <Button variant="outlined" onClick={() => navigate('/event-register')}>спортсмены</Button> */}
              {/* <Button variant="outlined">протоколы</Button>
              <Button variant="outlined">отчеты</Button> */}
            </Stack>
          </CardContent>
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ pr: 2, pb: 2 }}>
            <Button variant="text" onClick={() => setOpenEdit(true)}>редактировать</Button>
            {/* <Button variant="text" onClick={() => onDelete(competition._id)}>удалить</Button> */}
          </Stack>
        </Card>
      </Box>
      <JudgeModal
        open={openJudge}
        handleClose={() => setOpenJudge(false)}
        judges={[]}
        competition={competition}

      />
      <CompetitionProgramPopup open={openProgram} onClose={() => setOpenProgram(false)} />
       {openEdit &&
        <NewEventModal
          open={openEdit}
          handleClose={() => setOpenEdit(false)}
          curent={competition}
        />
      }
    </>
  );
}

export default CompetitionCard;
