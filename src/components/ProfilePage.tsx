import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, Box, CardMedia } from '@mui/material';
import MainWrap from './MainWrap';

interface AthleteProfileProps {
  name: string;
  dob: string;
  gender: string;
  coach: string;
  rank: string;
  country: string;
  region: string;
  city: string;
}

interface Competition {
  name: string;
  date: string;
  location: string;
  preliminaryScore: number;
  finalScore: number;
  position: number;
}

interface AthleteCompetitionsProps {
  competitions: Competition[];
}

const AthleteProfile: React.FC<AthleteProfileProps> = ({
  name,
  dob,
  gender,
  coach,
  rank,
  country,
  region,
  city,
}) => {
  return (
    <Card>
      <Box display="flex">
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={'https://media.istockphoto.com/id/1364917563/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D1%81%D0%BE-%D1%81%D0%BA%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=1Frn_po3QKsbnGa-ynAQjGtviYDlDjSzsvgrACdrfIU='}
          alt={`Фото ${name}`}
        />
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography>Дата рождения: <strong>{dob}</strong></Typography>
          <Typography>Пол: <strong>{gender}</strong></Typography>
          <Typography>Тренер: <strong>{coach}</strong></Typography>
          <Typography>Звание: <strong>{rank}</strong></Typography>
          <Typography>Страна: <strong>{country}</strong></Typography>
          <Typography>Регион: <strong>{region}</strong></Typography>
          <Typography>Город: <strong>{city}</strong></Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

const AthleteCompetitions: React.FC<AthleteCompetitionsProps> = ({ competitions }) => {
  return (
    <Paper sx={{marginTop:4}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Соревнование</TableCell>
            <TableCell>Дата</TableCell>
            <TableCell>Место проведения</TableCell>
            <TableCell>Предварительный счет</TableCell>
            <TableCell>Итоговый счет</TableCell>
            <TableCell>Позиция</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competitions.map((competition, index) => (
            <TableRow key={index}>
              <TableCell>{competition.name}</TableCell>
              <TableCell>{competition.date}</TableCell>
              <TableCell>{competition.location}</TableCell>
              <TableCell>{competition.preliminaryScore}</TableCell>
              <TableCell>{competition.finalScore}</TableCell>
              <TableCell>{competition.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const ProfilePage: React.FC = () => {
  const athleteProfile = {
    name: 'Артемий Ивановский',
    dob: '10.01.1997',
    gender: 'Мужчина',
    coach: 'Павел Смирнов',
    rank: '1-й спортивный разряд',
    country: 'Россия',
    region: 'Рязанская область',
    city: 'Рязань',    
  };

  const competitions = [
    {
      name: 'Всероссийское соревнование "Звёздный Турнир"',
      date: '21.07.2023 - 24.07.2023',
      location: 'Москва',
      preliminaryScore: 500,
      finalScore: 540,
      position: 2,
    },
    {
      name: 'Чемпионат Центрального федерального округа',
      date: '21.06.2023 - 24.06.2023',
      location: 'Тула',
      preliminaryScore: 480,
      finalScore: 0,
      position: 9,
    }    
  ];

  return (
    <MainWrap>
      <Box>
        <AthleteProfile {...athleteProfile} />
        <AthleteCompetitions competitions={competitions} />
      </Box>
    </MainWrap>
  );
};

export default ProfilePage;
