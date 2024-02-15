import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Box, Typography, TextField, Button, Stack } from '@mui/material';
import { RootState } from '../store'; // Замените на актуальный путь к вашему хранилищу
import { ScoreRow } from '../types';
import MainWrap from './MainWrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',

};

const rowStyle = {
  overflow: 'auto',
  display: 'flex',
  gap: '40px'
}

// Компонент для отдельной строки таблицы
const ScoreRowComponent: React.FC<{ scoreRow: ScoreRow }> = ({ scoreRow }) => {

  return (
    <TableRow>
      <TableCell>{scoreRow.changeStand}</TableCell>
      <TableCell>{scoreRow.athlete}</TableCell>
      {scoreRow.seriesScores.map((series, index) => (

        <Cell _series={series} row={scoreRow} index={index} key={index} />
      ))}
      <TableCell align="center">{scoreRow.totalPoints}</TableCell>
      <TableCell align="center">{scoreRow.place}</TableCell>
      <TableCell align="center">{scoreRow.rankAchieved}</TableCell>

    </TableRow >
  );
}

const Cell = ({ _series, row, index }: { _series: number[] | null, row: ScoreRow, index: number }) => {
  const [series, setSeries] = useState(_series)
  const [open, setOpen] = useState(false)
  const [s1, setS1] = useState<number>(series ? series[0] : 0)
  const [s2, setS2] = useState<number>(series ? series[1] : 0)
  const [s3, setS3] = useState<number>(series ? series[2] : 0)
  const [focusedFieldIndex, setFocusedFieldIndex] = useState<number | null>(null);


  const handler = () => {
    setOpen(false)
    setSeries([Number(s1), Number(s2), Number(s3)])
  }

  const handleFieldFocus = (index: number) => {
    setFocusedFieldIndex(index);
  };

  const handleButtonClick = (value: number) => {
    switch (focusedFieldIndex) {
      case 0:
        setS1(value);
        setFocusedFieldIndex(1);
        break;
      case 1:
        setS2(value);
        setFocusedFieldIndex(2);
        break;
      case 2:
        setS3(value);
        setFocusedFieldIndex(null); // если это последнее поле, сбрасываем фокус
        break;
      default:
        break;
    }
  };

  const handleResetClick = () => {
    setSeries(null)
    setOpen(false)
  }


  return (
    <>
      {series ?
        <TableCell align="center" onClick={() => setOpen(true)} sx={{ cursor: 'pointer' }}>
          <div><strong>{series && series.reduce((a, b) => a + b, 0)}</strong></div>
          <div></div>
          {
            series && series.map((score) => (
              <div>{score}</div>
            ))
          }
        </TableCell >
        :

        <TableCell sx={{ backgroundColor: "#efefef", cursor: "pointer", textAlign: "center" }} onClick={() => setOpen(true)}>
          +
        </TableCell>
      }
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <Box sx={{mb:2}}>
            <Typography variant='h5'>{row.athlete}</Typography>
            <Typography>Серия {index + 1}</Typography>
          </Box>
          <Box style={rowStyle}>
            <Box>
              <Typography>Попадание</Typography>
              <TextField autoFocus onFocus={() => handleFieldFocus(0)} margin='normal' fullWidth label="Бросок 1" value={s1} ></TextField>
              <TextField onFocus={() => handleFieldFocus(1)} margin='normal' fullWidth label="Бросок 2" value={s2} ></TextField>
              <TextField onFocus={() => handleFieldFocus(2)} margin='normal' fullWidth label="Бросок 3" value={s3} ></TextField>
              <TextField margin='normal' fullWidth label="Результат" value={s1+s2+s3} ></TextField>

              <Stack spacing={2} direction="row">
                <Button variant='outlined' onClick={handler}>Сохранить</Button>
                <Button variant='outlined' onClick={handleResetClick}>Очистить</Button>
              </Stack>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px" }}>
              {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((value, index) => (
                <Button key={index} variant='contained' onClick={() => handleButtonClick(value)}>{value}</Button>
              ))}
              <Button variant='contained' sx={{ gridColumnStart: 1, gridColumnEnd: 5 }} onClick={() => handleButtonClick(0)}>{0}</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

// Основной компонент таблицы
const ScoresTableComponent: React.FC = () => {
  const rows = useSelector((state: RootState) => state.scores.rows);

  return (

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

  );
};

export default ScoresTableComponent;
