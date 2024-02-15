import { SyntheticEvent, useState } from 'react';
import { Competition } from '../types';
import MainWrap from './MainWrap';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useAppSelector } from '../hooks';
import CompetitionTable from './CompetitionTable';
import RegisteredParticipantsPage from './RegisteredParticipantsPage';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const CompetitionPage = () => {
  const [value, setValue] = useState(0);
  const competition = useAppSelector((state) => state.competitions.competitions[0]);


  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Typography variant="h5" component="div">
          {competition.name}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ ml: 1 }} color="text.secondary">
            Даты проведения: {competition.startDate} - {competition.endDate}
          </Typography>
        </Stack>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Место проведения: {competition.location}
        </Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="">
          <Tab label="Программа" id='0' />
          <Tab label="Спортсмены" id='1' />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CompetitionTable events={[
          {
            ageGroup: "18-25",
            discipline: "Дистанция 3м",
            date: "2022-05-15",
            time: "10:00",
            stage: "Квалификация",
            numberOfTargets: 10,
            numberOfParticipants: 20,
          },
          {
            ageGroup: "26-35",
            discipline: "Дистанция 3м",
            date: "2022-06-20",
            time: "14:30",
            stage: "Полуфинал",
            numberOfTargets: 8,
            numberOfParticipants: 12,
          },
          {
            ageGroup: "36-45",
            discipline: "Дистанция 3м",
            date: "2022-07-05",
            time: "09:00",
            stage: "Финал",
            numberOfTargets: 2,
            numberOfParticipants: 4,
          },
        ]} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RegisteredParticipantsPage />
      </CustomTabPanel>
    </>
  );
}

export default CompetitionPage;
