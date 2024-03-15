import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography, TextField, Select, MenuItem, Grid } from '@mui/material';
import MainWrap from './MainWrap';
import ChatComponent from './ChatComponent';

// HeaderComponent
interface HeaderProps {
    title: string;
    dates: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ title, dates }) => (
    <Typography variant="h4" component='div' gutterBottom>
        {title}
        <Typography variant="subtitle1">{dates}</Typography>
    </Typography>
);

// LocationComponent
interface LocationProps {
    location: string;
}

const LocationComponent: React.FC<LocationProps> = ({ location }) => (
    <Typography variant="h6" component='div' gutterBottom>
        Место: {location}
    </Typography>
);

// AthleteRowComponent
interface AthleteRowProps {
    athlete: {
        name: string;
        scores: number[];
        total: number;
        place: number;
        category: string;
    };
}

const AthleteRowComponent: React.FC<AthleteRowProps> = ({ athlete }) => (
    <TableRow>
        <TableCell>{athlete.name}</TableCell>
        {athlete.scores.map((score, index) => (
            <ScoreCellComponent key={index} score={score} />
        ))}
        <TableCell>{athlete.total}</TableCell>
        <TableCell>{athlete.place}</TableCell>
        <TableCell>{athlete.category}</TableCell>
    </TableRow>
);

// ScoreCellComponent
interface ScoreCellProps {
    score: number;
}

const ScoreCellComponent: React.FC<ScoreCellProps> = ({ score }) => (
    <TableCell>{score}</TableCell>
);

// ProtocolTableComponent
interface ProtocolTableProps {
    athletes: AthleteRowProps['athlete'][];
}

const ProtocolTableComponent: React.FC<ProtocolTableProps> = ({ athletes }) => (
    <Table>
        <TableHead>
            <TableRow>
                {/* <TableCell>Смена/Стенд</TableCell> */}
                <TableCell>Спортсмен</TableCell>
                <TableCell align="center" colSpan={10}>Зачетные серии</TableCell>
                <TableCell>Итог</TableCell>
                <TableCell>Место</TableCell>
                <TableCell>Разряд</TableCell>
            </TableRow>
            <TableRow>
                <TableCell /> {/* Пустой заголовок для имени спортсмена */}
                {/* Для каждой серии создаем отдельный заголовок */}
                {[...Array(10)].map((_, index) => (
                    <TableCell key={index} align="center">{index + 1}</TableCell>
                ))}
                <TableCell /> {/* Пустой заголовок для итога */}
                <TableCell /> {/* Пустой заголовок для места */}
                <TableCell /> {/* Пустой заголовок для разряда */}
            </TableRow>
        </TableHead>

        <TableBody>
            {athletes.map((athlete, index) => (
                <AthleteRowComponent key={index} athlete={athlete} />
            ))}
        </TableBody>
    </Table>
);

// Весь протокол страницы
const Event: React.FC = () => {
    // Данные для протокола
    const protocolData = {
        title: "Чемпионат по метанию ножа",
        dates: "13.09.2022 - 18.09.2022",
        location: "г. Анапа",
        athletes: [
            {
                name: 'Ивановский Петр Константинович',
                scores: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                total: 200,
                place: 3,
                category: 'КМС'
            },
            {
                name: 'Сидоров Василий Иванович',
                scores: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                total: 300,
                place: 1,
                category: 'I'
            },
            {
                name: 'Мельтевский Михаил Алексеевич',
                scores: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
                total: 150,
                place: 4,
                category: '3 юн.'
            },
            // ... Другие атлеты
        ]
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Paper sx={{padding:2}}>
                        <HeaderComponent title={protocolData.title} dates={protocolData.dates} />
                        <LocationComponent location={protocolData.location} />
                        <ProtocolTableComponent athletes={protocolData.athletes} />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h4'>Чат</Typography>
                    <ChatComponent />
                </Grid>
            </Grid>
        </>
    );
};

export default Event;
