import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import MainWrap from './MainWrap';

interface Protocol {
  ageGroup: string;
  discipline: string;
  date: string;
  time: string;
  stage: string;
  action?: string;
}

const protocols: Protocol[] = [
    {
      ageGroup: 'мальчики 10-11 лет',
      discipline: 'дистанция 3 м',
      date: '13.10.2023',
      time: '10:00',
      stage: 'предварительный',
      action: 'перейти'
    },
    {
      ageGroup: 'девочки 10-11 лет',
      discipline: 'дистанция 3 м',
      date: '13.10.2023',
      time: '10:00',
      stage: 'предварительный',
      action: 'перейти'
    },
    {
      ageGroup: 'мальчики 12-13 лет',
      discipline: 'дистанция 3 м',
      date: '13.10.2023',
      time: '10:30',
      stage: 'предварительный',
      action: 'перейти'
    },
    {
      ageGroup: 'девочки 12-13 лет',
      discipline: 'дистанция 3 м',
      date: '13.10.2023',
      time: '11:00',
      stage: 'предварительный',
      action: 'перейти'
    },
    // ... Дополнительные протоколы
  ];

// ProtocolHeaderComponent
const ProtocolHeaderComponent: React.FC = () => (
  <div>
    <h1>ПРОТОКОЛЫ</h1>
    <p>Чемпионат России</p>
    <p>Вид спорта: спортивное метание ножа (0090001411я)</p>
    <p>Даты проведения: 10.10.2023 - 12.10.2023</p>
    <p>Место проведения: Краснодарский край, г. Краснодар</p>
  </div>
);

// ProtocolRowComponent
interface ProtocolRowProps {
  protocol: Protocol;
}

const ProtocolRowComponent: React.FC<ProtocolRowProps> = ({ protocol }) => (
  <TableRow>
    <TableCell>{protocol.ageGroup}</TableCell>
    <TableCell>{protocol.discipline}</TableCell>
    <TableCell>{protocol.date}</TableCell>
    <TableCell>{protocol.time}</TableCell>
    <TableCell>{protocol.stage}</TableCell>
    <TableCell>
      <ActionButtonComponent />
    </TableCell>
  </TableRow>
);

// ActionButtonComponent
const ActionButtonComponent: React.FC = () => (
  <Button variant="contained" color="primary">
    Перейти
  </Button>
);

// ProtocolTableComponent
const ProtocolTableComponent: React.FC = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Возрастная группа</TableCell>
          <TableCell>Дисциплина</TableCell>
          <TableCell>Дата</TableCell>
          <TableCell>Время</TableCell>
          <TableCell>Этап</TableCell>
          <TableCell>Действие</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {protocols.map((protocol, index) => (
          <ProtocolRowComponent key={index} protocol={protocol} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

// Страница протоколов
const ProtocolPage: React.FC = () => (
  <MainWrap>
    <ProtocolHeaderComponent />
    <ProtocolTableComponent />
  </MainWrap>
);

export default ProtocolPage;
