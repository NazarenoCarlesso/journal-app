import { IconButton } from '@mui/material'
// import { NoteView } from '../views/NoteView'
import { NothingSelected } from '../views/NothingSelected'
import { AddOutlined } from '@mui/icons-material'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'
import { NoteView } from '../views/NoteView'

export const Journal = () => {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.auth)
  const { isSaving, active } = useSelector(state => state.journal)

  if (status !== 'authenticated') return <Navigate to='/auth/login' />

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <>
      {
        active
          ? <NoteView />
          : <NothingSelected />
      }
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
        className='animate__animated animate__fadeInUp animate__faster'
        onClick={onClickNewNote}
        disabled={isSaving}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </>
  )
}
