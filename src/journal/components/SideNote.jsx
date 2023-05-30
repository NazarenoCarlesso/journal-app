/* eslint-disable react/prop-types */
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideNote = ({ note }) => {
  const dispatch = useDispatch()

  const secondaryText = note.body.slice(0, 32).concat(note.body.length > 32 ? '... ' : '')

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
          <ListItemText secondary={secondaryText} sx={{ minWidth: 150 }} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
