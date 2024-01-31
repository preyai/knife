import { Box, Button, Typography } from "@mui/material";
import CompetitionCard from "./CompetitionCard";
import MainWrap from "./MainWrap";
import NewEventModal from "./NewEventModal";
import { useState } from "react";
import { Competition, Judge } from "../types"; // Предполагается, что тип Judge определен в вашем проекте
import { useAppDispatch, useAppSelector } from "../hooks";
import { addCompetition, deleteCompetition, updateCompetition } from "../reducers/competitionsReducer";

export default function Competitions() {
    const [openAdd, setOpenAdd] = useState(false);
    const dispatch = useAppDispatch();
    const competitions = useAppSelector((state) => state.competitions.competitions);


    const handleAddCompetition = (newCompetition: Competition) => {
        dispatch(addCompetition(newCompetition));
    };

    const handleDeleteCompetition = (competitionId: string) => {
        dispatch(deleteCompetition(competitionId));
    };

    const handleEditCompetition = (updatedCompetition: Competition) => {
        dispatch(updateCompetition(updatedCompetition));
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
