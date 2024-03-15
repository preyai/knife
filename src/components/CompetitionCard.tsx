import {
  Box,
  Button,
  Card, CardContent,
  Stack,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Competition } from 'simpl-api';
import { useAppDispatch } from '../hooks';
import { deleteCompetition } from '../reducers/competitionsReducer';
import CompetitionProgramPopup from './CompetitionProgramPopup';
import JudgeModal from './JudgeModal';
import NewEventModal from './NewEventModal';


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
  const dispatch = useAppDispatch();

  const handleRegistrationClick = () => {
    // Перенаправляем пользователя на страницу со списком зарегистрированных участников
    navigate(`/registered-participants/${competition._id}`);
  };

  const handleDeleteClick = () => {
    dispatch(deleteCompetition(competition._id ))
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
            <Button variant="text" onClick={handleDeleteClick}>удалить</Button>
          </Stack>
        </Card>
      </Box>
      <JudgeModal
        open={openJudge}
        handleClose={() => setOpenJudge(false)}
        judges={competition.referees}
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
