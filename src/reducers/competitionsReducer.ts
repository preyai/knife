import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Competition } from 'simpl-api';
import { restApi } from '../feathers';
import { CompetitionData } from 'simpl-api';

interface CompetitionsState {
    data: Competition[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CompetitionsState = {
    data: [],
    status: 'idle',
    error: null
};

// Асинхронные thunks
export const fetchCompetitions = createAsyncThunk(
    'competitions/fetchCompetitions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await restApi.service('competitions').find();
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const createCompetition = createAsyncThunk(
    'competitions/createCompetition',
    async (competitionData: CompetitionData, { rejectWithValue }) => {
        try {
            const response = await restApi.service('competitions').create(competitionData);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const deleteCompetition = createAsyncThunk(
    'competitions/deleteCompetition',
    async (id: string, { rejectWithValue }) => {
        try {
            await restApi.service('competitions').remove(id);
            return id;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const updateCompetition = createAsyncThunk(
    'competitions/updateCompetition',
    async ({ id, ...competitionData }: { id: string | {}} & Partial<Competition>, { rejectWithValue }) => {
        try {
            const response = await restApi.service('competitions').patch(id, competitionData);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const competitionsSlice = createSlice({
    name: 'competitions',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // Обработка fetchCompetitions
            .addCase(fetchCompetitions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCompetitions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.data || [];
            })
            .addCase(fetchCompetitions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            // Обработка createCompetition
            .addCase(createCompetition.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            // Обработка deleteCompetition
            .addCase(deleteCompetition.fulfilled, (state, action) => {
                state.data = state.data.filter(competition => competition._id !== action.payload);
            })
            // Обработка updateCompetition
            .addCase(updateCompetition.fulfilled, (state, action) => {
                const index = state.data.findIndex(competition => competition._id === action.payload._id);
                if (index !== -1) {
                    state.data[index] = action.payload;
                }
            });
    }
});

export default competitionsSlice.reducer;
