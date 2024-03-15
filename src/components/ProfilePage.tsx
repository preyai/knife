import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
  CardMedia,
  Button,
} from "@mui/material";
import MainWrap from "./MainWrap";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { User } from "simpl-api";

interface AthleteProfileProps {
  user: User;
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

const AthleteProfile: React.FC<AthleteProfileProps> = ({ user }) => {
  return (
    <Card>
      <Box display="flex">
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={""}
          alt={`Фото ${user?.fullName}`}
        />
        <CardContent>
          <Typography variant="h5">{user?.fullName}</Typography>
          <Typography>
            Дата рождения: <strong>{user?.birthDate}</strong>
          </Typography>
          <Typography>
            Пол: <strong>{user?.gender}</strong>
          </Typography>
          {/* <Typography>
            Тренер: <strong>{}</strong>
          </Typography> */}
          <Typography>
            Звание: <strong>{user?.qualification}</strong>
          </Typography>
          <Typography>
            Страна: <strong>{user?.country}</strong>
          </Typography>
          <Typography>
            Регион: <strong>{user?.region}</strong>
          </Typography>
          <Typography>
            Город: <strong>{user?.city}</strong>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

const AthleteCompetitions: React.FC<AthleteCompetitionsProps> = ({
  competitions,
}) => {
  const navigate = useNavigate(); // Хук для навигации

  return (
    <Paper sx={{ marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Соревнование</TableCell>
            <TableCell>Дата</TableCell>
            <TableCell>Место проведения</TableCell>
            <TableCell>предварительный этап</TableCell>
            <TableCell>финал</TableCell>
            <TableCell>место</TableCell>
            <TableCell></TableCell>
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
              <TableCell>
                {competition.location === "Москва" && (
                  <Button onClick={() => navigate("/competition/1")}>
                    Перейти
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const ProfilePage: React.FC = () => {
  const { user } = useAppSelector((store) => store.auth);
  return (
    <Box>
      {user && (
        <>
          <AthleteProfile user={user} />
          <AthleteCompetitions competitions={[]} />
        </>
      )}
    </Box>
  );
};

export default ProfilePage;
