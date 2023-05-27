import { AuthLayout } from '../layout/AuthLayout'
import { LogIn } from '../pages/LogIn'
import { Register } from '../pages/Register'

export const AuthRouter = [
  {
    path: '/auth/',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <LogIn />
      },
      {
        path: '/auth/register',
        element: <Register />
      }
    ]
  }
]
