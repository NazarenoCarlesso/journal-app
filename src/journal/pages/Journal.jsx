import { IconButton } from '@mui/material'
// import { NoteView } from '../views/NoteView'
import { NothingSelected } from '../views/NothingSelected'
import { AddOutlined } from '@mui/icons-material'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Journal = () => {
  const { status } = useSelector(state => state.auth)

  if (status !== 'authenticated') return <Navigate to='/auth/login' />

  return (
    <>
      {/* Nothing selected */}
      <NothingSelected />
      {/* Note view */}
      {/* <NoteView /> */}
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </>
  )
}
