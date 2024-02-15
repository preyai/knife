import React from 'react';
import { Box, Table, TableHead, TableBody, TableRow, TableCell, makeStyles, Button, TableContainer, Paper, Stack } from '@mui/material';
import MainWrap from './MainWrap';
import { useNavigate } from 'react-router-dom';

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

    const copyToClipboard = () => {
        navigator.clipboard.writeText("http://simpl.preyai.ru/event-register/1")
          .then(() => {
            // Уведомление или действие после успешного копирования
            alert("Ссылка скопирована в буфер обмена");
          })
          .catch(err => {
            // Обработка ошибки при копировании
            console.error('Ошибка при копировании: ', err);
          });
      };

    return (

            <Box sx={{ padding: 2 }}>
                <Stack spacing={2} direction="row" sx={{mb:2}}>
                    <Button variant="contained" color="primary" onClick={handleRegistrationClick}>
                        Добавить участника
                    </Button>
                    <Button variant="contained" color="primary" onClick={copyToClipboard}>
                        Скопировать ссылку
                    </Button>
                </Stack>
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

    );
};

export default RegisteredParticipantsPage;
