import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './themes/theme'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
