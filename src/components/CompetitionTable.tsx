import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CompetitionEvent } from '../types';


interface CompetitionTableProps {
    events: CompetitionEvent[];
}
const CompetitionTable: React.FC<CompetitionTableProps> = ({ events }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="competition table">
                <TableHead>
                    <TableRow>
                        <TableCell>Возрастная группа</TableCell>
                        <TableCell>Дисциплина</TableCell>
                        <TableCell>Дата</TableCell>
                        <TableCell>Время</TableCell>
                        <TableCell>Этап</TableCell>
                        <TableCell>Кол-во стендов</TableCell>
                        <TableCell>Кол-во участников</TableCell>
                        <TableCell>Меню</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map((event, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {event.ageGroup}
                            </TableCell>
                            <TableCell>{event.discipline}</TableCell>
                            <TableCell>{event.date}</TableCell>
                            <TableCell>{event.time}</TableCell>
                            <TableCell>{event.stage}</TableCell>
                            <TableCell>{event.numberOfTargets}</TableCell>
                            <TableCell>{event.numberOfParticipants}</TableCell>
                            <TableCell>
                                <IconButton aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CompetitionTable;