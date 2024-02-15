import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from 'simpl-api'
import { RootState } from '../store'
import { restApi } from '../feathers'



type AuthState = {
    loading: boolean
    user: User | null
    accessToken: string | null
    error: string | null
}

const initialState: AuthState = {
    loading: true,
    accessToken: null,
    user: null,
    error: null
};


export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async ({ email, password }: { email: string, password: string }): Promise<AuthState> => {
        try {
            const result = await restApi.authenticate({
                strategy: 'local',
                email,
                password
            })

            return {
                loading:true,
                accessToken: result.accessToken,
                user: result.user,
                error: null
            }
        } catch (error: any) {
            return {
                loading:true,
                accessToken: null,
                user: null,
                error: error.message
            }
        }

    }
)
export const reAuthenticate = createAsyncThunk(
    'auth/reAuthenticate',
    async (): Promise<AuthState> => {
        try {
            const result = await restApi.reAuthenticate()

            return {
                loading:true,
                accessToken: result.accessToken,
                user: result.user,
                error: null
            }
        } catch (error: any) {
            return {
                loading:true,
                accessToken: null,
                user: null,
                error: error.message
            }
        }

    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    restApi.logout
)

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authenticate.fulfilled, (state, action) => {
            if (action.payload.user && action.payload.accessToken) {
                state.loading = true
                state.accessToken = action.payload.accessToken
                state.user = action.payload.user
            }
            else {
                state.loading = true
                state.error = action.payload.error
            }
        })
        builder.addCase(reAuthenticate.fulfilled, (state, action) => {
            if (action.payload.user && action.payload.accessToken) {
                state.loading = true
                state.accessToken = action.payload.accessToken
                state.user = action.payload.user
            }
            else {
                state.loading = true
                state.error = action.payload.error
            }
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.loading = true
            state.accessToken = null
            state.user = null
        })
    },
})

export const { } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user