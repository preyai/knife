import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeOptions } from './theme.ts'
import { Provider } from 'react-redux'
import store from './store.ts'

const theme = createTheme(themeOptions)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
