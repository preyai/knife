import { Box, Button, Typography } from "@mui/material";
import CompetitionCard from "./CompetitionCard";
import NewEventModal from "./NewEventModal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCompetitions } from "../reducers/competitionsReducer";

export default function Competitions() {
    const [openAdd, setOpenAdd] = useState(false);
    const dispatch = useAppDispatch();
    const competitions = useAppSelector((state) => state.competitions.data);

    useEffect(()=>{
        dispatch(fetchCompetitions())
    },[])
    
    return (
        <>
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
                    // onDelete={() => handleDeleteCompetition(competition.id)}
                    // onEdit={() => handleEditCompetition(competition)}
                />
            ))}
            <NewEventModal
                open={openAdd}
                handleClose={() => setOpenAdd(false)}
            />
        </>
    )
}
