import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import CompetitionTable from './CompetitionTable';

interface CompetitionProgramProps {
    open: boolean;
    onClose: () => void;
    programDetails?: ProgramDetails; // Предполагается, что у вас есть тип для деталей программы
}

interface ProgramDetails {
    ageGroup: string;
    discipline: string;
    date: string;
    time: string;
    stage: string;
    numberOfStands: number;
    numberOfParticipants: number;
}

const CompetitionProgramPopup: React.FC<CompetitionProgramProps> = ({ open, onClose, programDetails }) => {
    const [details, setDetails] = useState<ProgramDetails>(programDetails || {
        ageGroup: '',
        discipline: '',
        date: '',
        time: '',
        stage: '',
        numberOfStands: 0,
        numberOfParticipants: 0,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    const handleSubmit = () => {
        // Обработайте отправку формы, например, сохраните детали программы
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xl">
            <DialogTitle>Программа соревнований</DialogTitle>
            <DialogContent>
                <CompetitionTable events={[
                    {
                        ageGroup: "18-25",
                        discipline: "Дистанция 3м",
                        date: "2022-05-15",
                        time: "10:00",
                        stage: "Квалификация",
                        numberOfTargets: 10,
                        numberOfParticipants: 20,
                    },
                    {
                        ageGroup: "26-35",
                        discipline: "Дистанция 3м",
                        date: "2022-06-20",
                        time: "14:30",
                        stage: "Полуфинал",
                        numberOfTargets: 8,
                        numberOfParticipants: 12,
                    },
                    {
                        ageGroup: "36-45",
                        discipline: "Дистанция 3м",
                        date: "2022-07-05",
                        time: "09:00",
                        stage: "Финал",
                        numberOfTargets: 2,
                        numberOfParticipants: 4,
                    },
                ]} />
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handleSubmit}>Сохранить</Button> */}
            </DialogActions>
        </Dialog>
    );
};

export default CompetitionProgramPopup;
