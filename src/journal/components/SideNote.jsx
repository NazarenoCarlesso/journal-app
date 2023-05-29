/* eslint-disable react/prop-types */
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideNote = ({ note }) => {
  const dispatch = useDispatch()

  return (
    <ListItem
      className='animate__animated animate__fadeInLeft animate__faster'
      disablePadding
      onClick={() => dispatch(setActiveNote(note))}
    >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={note.title} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
