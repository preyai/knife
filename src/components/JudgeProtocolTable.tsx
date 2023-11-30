import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { JudgeProtocol } from '../types';
import MenuIcon from '@mui/icons-material/Menu';



interface JudgeProtocolTableProps {
  protocols: JudgeProtocol[];
}

const JudgeProtocolTable: React.FC<JudgeProtocolTableProps> = ({ protocols }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" gutterBottom component="div">
            Судейский Протокол (Предварительный этап)
          </Typography>
        </Toolbar>
      </AppBar>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="judge protocol table">
          <TableHead>
            <TableRow>
              <TableCell>Спортсмен</TableCell>
              {/* Assuming '1', '2', '3', ..., '10' are the series of attempts */}
              {[...Array(10).keys()].map((i) => (
                <TableCell align="right" key={i}>{`Серия ${i + 1}`}</TableCell>
              ))}
              <TableCell align="right">Баллы</TableCell>
              <TableCell align="right">Место</TableCell>
              <TableCell align="right">Валюн. разряд</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {protocols.map((protocol, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {protocol.name} ({protocol.region})
                </TableCell>
                {protocol.scores.map((score, i) => (
                  <TableCell align="right" key={i}>{score}</TableCell>
                ))}
                <TableCell align="right">{protocol.totalPoints}</TableCell>
                <TableCell align="right">{protocol.rank}</TableCell>
                {/* This field is placeholder for 'Валюн. разряд'. You can add functionality to calculate or display this. */}
                <TableCell align="right">-</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default JudgeProtocolTable;
