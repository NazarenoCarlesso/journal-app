import { JournalLayout } from '../layout/JournalLayout'
import { Journal } from '../pages/Journal'

export const JournalRouter = [
  {
    path: '/journal/',
    element: <JournalLayout />,
    children: [
      {
        path: '/journal/',
        element: <Journal />
      }
    ]
  }
]
