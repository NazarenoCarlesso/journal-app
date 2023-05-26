import { Navigate, createBrowserRouter } from 'react-router-dom'
import { JournalApp } from '../JournalApp'
import { AuthRouter } from '../auth/router/AuthRouter'
import { JournalRouter } from '../journal/router/JournalRouter'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <JournalApp />,
    errorElement: <Navigate to='/' />
  },
  {
    path: '/auth',
    element: <JournalApp />,
    children: AuthRouter
  },
  {
    path: '/journal',
    element: <JournalApp />,
    children: JournalRouter
  }
])
