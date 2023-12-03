import { Box, Button, Typography } from "@mui/material";
import CompetitionCard from "./CompetitionCard";
import MainWrap from "./MainWrap";
import NewEventModal from "./NewEventModal";
import { useState } from "react";
import { Competition, Judge } from "../types"; // Предполагается, что тип Judge определен в вашем проекте

export default function Competitions() {
    const [openAdd, setOpenAdd] = useState(false);
    const [competitions, setCompetitions] = useState<Competition[]>([
        {
            id: "1",
            name: "Чемпионат России по плаванию",
            sportType: "Спортивное метание ножа",
            startDate: "2023-07-01",
            endDate: "2023-07-05",
            location: "г. Москва",
            judges: [
                {
                    id: "j1",
                    name: "Иван Иванов",
                    region: "Москва",
                    category: "A"
                },
                {
                    id: "j2",
                    name: "Мария Петрова",
                    region: "Санкт-Петербург",
                    category: "B"
                },
                // Другие судьи...
            ],
        },
        {
            id: "2",
            name: "Открытый чемпионат по легкой атлетике",
            sportType: "Спортивное метание ножа",
            startDate: "2023-08-15",
            endDate: "2023-08-20",
            location: "г. Казань",
            judges: [
                {
                    id: "j3",
                    name: "Сергей Сергеев",
                    region: "Казань",
                    category: "A"
                },
                {
                    id: "j4",
                    name: "Елена Васильева",
                    region: "Нижний Новгород",
                    category: "B"
                },
                // Другие судьи...
            ],
        },
    ]);

    const handleAddCompetition = (newCompetition: Competition) => {
        setCompetitions([...competitions, newCompetition]);
    };

    const handleDeleteCompetition = (competitionId: string) => {
        setCompetitions(competitions.filter(comp => comp.id !== competitionId));
    };

    const handleEditCompetition = (updatedCompetition: Competition) => {
        setCompetitions(competitions.map(comp =>
            comp.id === updatedCompetition.id ? updatedCompetition : comp
        ));
    };

    return (
        <MainWrap>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Соревнования
                </Typography>
                <Button variant="contained" sx={{ mb: 2 }} onClick={() => setOpenAdd(true)}>
                    Добавить
                </Button>
            </Box>
            {competitions.map((competition, index) => (
                <CompetitionCard
                    key={index}
                    competition={competition}
                    onDelete={() => handleDeleteCompetition(competition.id)}
                    onEdit={() => handleEditCompetition(competition)}
                />
            ))}
            <NewEventModal
                open={openAdd}
                handleClose={() => setOpenAdd(false)}
                handleSave={handleAddCompetition}
            />
        </MainWrap>
    )
}
