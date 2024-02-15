import React from 'react';
import { Box, Table, TableHead, TableBody, TableRow, TableCell, makeStyles, Button, TableContainer, Paper } from '@mui/material';
import MainWrap from './MainWrap';
import { useNavigate } from 'react-router-dom';

// Создаем стили с помощью makeStyles
// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 600,
//     backgroundColor: '#f0f0f0',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     borderRadius: 8,
//   },
//   cell: {
//     fontSize: 16,
//     borderBottom: '1px solid #ddd',
//     padding: theme.spacing(1),
//   },
//   headerCell: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     backgroundColor: '#ddd',
//     padding: theme.spacing(1),
//   },
// }));

const participants = [
    { id: '1', name: 'Иванов Иван', birthDate: '1995-05-10', team: 'Команда 1', rank: '6/дан' },
    { id: '2', name: 'Петров Петр', birthDate: '1990-12-15', team: 'Команда 2', rank: '5/дан' },
    { id: '3', name: 'Сидорова Анна', birthDate: '2000-08-21', team: 'Команда 3', rank: '4/дан' },
    // Добавьте другие участники по мере необходимости
];

const RegisteredParticipantsPage = () => {
    //   const classes = useStyles(); // Подключаем стили
    const navigate = useNavigate(); // Хук для навигации

    const handleRegistrationClick = () => {
        // Перенаправляем пользователя на страницу со списком зарегистрированных участников
        navigate(`/event-register/1`);
    };

    return (
        <MainWrap>
            <Box sx={{ padding: 2 }}>
                <Button variant="contained" color="primary" sx={{ mb: 2, mr: 2 }}>
                    Добавить участника
                </Button>
                <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleRegistrationClick}>
                    Страница регистрации
                </Button>
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell >N°</TableCell>
                                <TableCell >Спортсмен</TableCell>
                                <TableCell >Дата рождения</TableCell>
                                <TableCell >Команда</TableCell>
                                <TableCell >Разряд</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {participants.map((participant, index) => (
                                <TableRow key={participant.id}>
                                    <TableCell >{index + 1}</TableCell>
                                    <TableCell >{participant.name}</TableCell>
                                    <TableCell >{participant.birthDate}</TableCell>
                                    <TableCell >{participant.team}</TableCell>
                                    <TableCell >{participant.rank}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </MainWrap>
    );
};

export default RegisteredParticipantsPage;
