import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Competition } from '../types';


interface CompetitionsState {
    competitions: Competition[];
}

const initialState: CompetitionsState = {
    competitions: [
        {
            id: "1",
            name: "Чемпионат России",
            sportType: "Спортивное метание ножа",
            startDate: "2023-07-01",
            endDate: "2023-07-05",
            location: "г. Москва",
            judges: [
                {
                    id: "j1",
                    name: "Иван Иванов Иванович",
                    region: "Москва",
                    category: "1K"
                },
                {
                    id: "j2",
                    name: "Мария Петрова Андреевна",
                    region: "Санкт-Петербург",
                    category: "1K"
                },
                // Другие судьи...
            ],
        },
        {
            id: "2",
            name: "Открытый чемпионат",
            sportType: "Спортивное метание ножа",
            startDate: "2023-08-15",
            endDate: "2023-08-20",
            location: "г. Казань",
            judges: [
                {
                    id: "j3",
                    name: "Сергей Сергеев Сергеевич",
                    region: "Казань",
                    category: "1K"
                },
                {
                    id: "j4",
                    name: "Елена Васильева Степановна",
                    region: "Нижний Новгород",
                    category: "1K"
                },
                // Другие судьи...
            ],
        },
    ],
};

const competitionsSlice = createSlice({
    name: 'competitions',
    initialState,
    reducers: {
        addCompetition: (state, action: PayloadAction<Competition>) => {
            state.competitions.unshift(action.payload);
        },
        deleteCompetition: (state, action: PayloadAction<string>) => {
            state.competitions = state.competitions.filter(comp => comp.id !== action.payload);
        },
        updateCompetition: (state, action: PayloadAction<Competition>) => {
            const { id } = action.payload;
            const index = state.competitions.findIndex(comp => comp.id === id);
            if (index !== -1) {
                state.competitions[index] = action.payload;
            }
        },
    },
});

export const { addCompetition, deleteCompetition, updateCompetition } = competitionsSlice.actions;

export default competitionsSlice.reducer;