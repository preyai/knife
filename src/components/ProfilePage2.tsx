import React from 'react';
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
    Button,
    CardMedia
} from '@mui/material';
import MainWrap from './MainWrap';

interface ProfileProps {
    name: string;
    dob: string;
    gender: string;
    category: string;
    registrationDate: string;
    country: string;
    region: string;
    city: string;
}

interface Event {
    name: string;
    dates: string;
    location: string;
    role: string;
    access?: string;
    score?: string;
}

interface EventsTableProps {
    events: Event[];
    title: string;
}

const Profile: React.FC<ProfileProps> = ({
    name,
    dob,
    gender,
    category,
    registrationDate,
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
                    image={'https://media.istockphoto.com/id/1200677760/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81%D0%BE-%D1%81%D0%BA%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=XAmUDQcCbmorrYBQOVADBgkzUX66S7-HSRyEzjwpxZI='}
                    alt={`Фото ${name}`}
                />
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                    <Typography>Дата рождения: {dob}</Typography>
                    <Typography>Пол: {gender}</Typography>
                    <Typography>Категория: {category}</Typography>
                    <Typography>Дата присвоения: {registrationDate}</Typography>
                    <Typography>Страна: {country}</Typography>
                    <Typography>Субъект: {region}</Typography>
                    <Typography>Город: {city}</Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

const EventsTable: React.FC<EventsTableProps> = ({ events, title }) => {
    return (
        <Box mt={4}>
            <Typography variant="h6">{title}</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Соревнования</TableCell>
                        <TableCell>Даты</TableCell>
                        <TableCell>Место</TableCell>
                        <TableCell>Должность</TableCell>
                        <TableCell>Доступ</TableCell>
                        <TableCell>Оценка</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map((event, index) => (
                        <TableRow key={index}>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.dates}</TableCell>
                            <TableCell>{event.location}</TableCell>
                            <TableCell>{event.role}</TableCell>
                            <TableCell>
                                {event.access ? (
                                    <Button variant="contained">{event.access}</Button>
                                ) : (
                                    event.score
                                )}
                            </TableCell>
                            <TableCell>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

const ProfilePage2: React.FC = () => {
    const profileData = {
        name: 'Спиркин Владимир Семенович',
        dob: '10.01.1997',
        gender: 'Мужской',
        category: 'Всероссийская категория',
        registrationDate: '03.10.2022',
        country: 'Россия',
        region: 'Рязанская область',
        city: 'Рязань',
    };

    const upcomingEvents = [
        {
            name: 'Чемпионат России',
            dates: '21.07.2023 - 24.07.2023',
            location: 'г. Москва',
            role: 'Главный судья',
            access: 'Перейти',
        },
        {
            name: 'Первенство России',
            dates: '21.06.2023 - 24.06.2023',
            location: 'г. Тула',
            role: 'Заместитель главного судья',
            access: 'Перейти',
        },
    ];

    const pastEvents = [
        {
            name: 'Всероссийские соревнования "Звездный турнир"',
            dates: '21.07.2023 - 24.07.2023',
            location: 'г. Москва',
            role: 'Главный судья',
            score: 'отлично',
        },
        {
            name: 'Чемпионат Центрального федерального округа',
            dates: '21.06.2023 - 24.06.2023',
            location: 'г. Тула',
            role: 'Заместитель главного судья',
            score: 'хорошо',
        },
    ];

    return (
        <MainWrap>
            <Box>
                <Profile {...profileData} />
                <EventsTable events={upcomingEvents} title="Доступ к соревнованиям:" />
                <EventsTable events={pastEvents} title="Предыдущее судейство:" />
            </Box>
        </MainWrap>
    );
};

export default ProfilePage2;
