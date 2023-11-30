import { Box, Button, Typography } from "@mui/material";
import CompetitionCard from "./CompetitionCard";
import MainWrap from "./MainWrap";
import NewEventModal from "./NewEventModal";
import { useState } from "react";
import JudgeModal from "./JudgeModal";


export default function Competitions() {
    const [openAdd, setOpenAdd] = useState(false)
    
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
            <CompetitionCard />
            <CompetitionCard />
            <CompetitionCard />
            <CompetitionCard />
            <CompetitionCard />
            <NewEventModal open={openAdd} handleClose={() => setOpenAdd(false)} />
            
        </MainWrap>
    )
}