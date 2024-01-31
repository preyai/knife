import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScoreRow } from '../types';

interface ScoresState {
    rows: ScoreRow[];
}

// Начальное состояние
const initialState: ScoresState = {
    rows: [
        {
            changeStand: "1/1",
            athlete: "Иванов Иван Иванович",
            seriesScores: [
                [10, 9, 10], [9, 10, 9], null, null, null, null, null, null, null, null
            ],
            totalPoints: 57, // Сумма баллов для представленных серий
            place: 1,
            rankAchieved: "1 юношеский",
        },
        {
            changeStand: "1/2",
            athlete: "Петров Петр Петрович",
            seriesScores: [
                [10, 10, 10], [10, 9, 10], null, null, null, null, null, null, null, null
            ],
            totalPoints: 59,
            place: 2,
            rankAchieved: "2 юношеский",
        },
        {
            changeStand: "1/3",
            athlete: "Сидоров Сидор Сидорович",
            seriesScores: [
                [9, 9, 10], [9, 9, 9], null, null, null, null, null, null, null, null
            ],
            totalPoints: 54,
            place: 3,
            rankAchieved: "3 юношеский",
        },
        // ... добавьте другие строки с данными спортсменов
    ],
};



export const scoresSlice = createSlice({
    name: 'scores',
    initialState,
    reducers: {
        setScores: (state, action: PayloadAction<ScoreRow[]>) => {
            state.rows = action.payload;
        },
        // Добавьте любые другие редьюсеры, которые вам могут понадобиться
    },
});

// Экспортируем actions
export const { setScores } = scoresSlice.actions;

// Экспортируем reducer
export default scoresSlice.reducer;
