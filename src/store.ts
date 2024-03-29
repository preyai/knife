import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import competitionsReducer from './reducers/competitionsReducer'
import scoresReducer from './reducers/scoresReducer'

const store = configureStore({
    reducer: {
        auth: authReducer,
        competitions: competitionsReducer,
        scores: scoresReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store