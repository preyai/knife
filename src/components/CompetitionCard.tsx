
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


const CompetitionCard = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Box sx={{ minWidth: 275, padding:2 }}>
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip icon={<CheckCircleIcon />} label="Чемпионат России" color="success" />
              <Typography sx={{ ml: 1 }} color="text.secondary">
                Даты проведения: 10.02.2023 - 11.03.2023
              </Typography>
            </Stack>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Место проведения: г. Краснодар
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined">судейская коллегия</Button>
              <Button variant="outlined">программа</Button>
              <Button variant="outlined">регистрация</Button>
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
    </>
  );
}

export default CompetitionCard;
