import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { RootState } from '../store'; // Замените на актуальный путь к вашему хранилищу
import { ScoreRow } from '../types';
import MainWrap from './MainWrap';

// Компонент для отдельной строки таблицы
const ScoreRowComponent: React.FC<{ scoreRow: ScoreRow }> = ({ scoreRow }) => (
  <TableRow>
    <TableCell>{scoreRow.changeStand}</TableCell>
    <TableCell>{scoreRow.athlete}</TableCell>
    {scoreRow.seriesScores.map((series, index) => (

      series ?
        <TableCell align="center" key={index}>
          <div><strong>{series && series.reduce((a, b) => a + b, 0)}</strong></div>
          <div></div>
          {
            series && series.map((score) => (
              <div>{score}</div>
            ))
          }
        </TableCell >
        :
        <TableCell sx={{ backgroundColor: "#efefef", cursor: "pointer" }}>
          +
        </TableCell>
    ))}
    <TableCell align="center">{scoreRow.totalPoints}</TableCell>
    <TableCell align="center">{scoreRow.place}</TableCell>
    <TableCell align="center">{scoreRow.rankAchieved}</TableCell>
  </TableRow >
);


// Основной компонент таблицы
const ScoresTableComponent: React.FC = () => {
  const rows = useSelector((state: RootState) => state.scores.rows);

  return (
    <MainWrap>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="таблица соревнований">
          <TableHead>
            <TableRow>
              <TableCell>Смена/Стенд</TableCell>
              <TableCell>Спортсмен</TableCell>
              <TableCell align="center">1 Серия</TableCell>
              <TableCell align="center">2 Серия</TableCell>
              <TableCell align="center">3 Серия</TableCell>
              <TableCell align="center">4 Серия</TableCell>
              <TableCell align="center">5 Серия</TableCell>
              <TableCell align="center">6 Серия</TableCell>
              <TableCell align="center">7 Серия</TableCell>
              <TableCell align="center">8 Серия</TableCell>
              <TableCell align="center">9 Серия</TableCell>
              <TableCell align="center">10 Серия</TableCell>
              {/* ...добавьте другие заголовки серий */}
              <TableCell align="center">Баллы</TableCell>
              <TableCell align="center">Место</TableCell>
              <TableCell align="center">Выполненый разряд</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <ScoreRowComponent key={index} scoreRow={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainWrap>
  );
};

export default ScoresTableComponent;
