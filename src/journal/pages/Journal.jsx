import { IconButton } from '@mui/material'
// import { NoteView } from '../views/NoteView'
import { NothingSelected } from '../views/NothingSelected'
import { AddOutlined } from '@mui/icons-material'

export const Journal = () => {
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
