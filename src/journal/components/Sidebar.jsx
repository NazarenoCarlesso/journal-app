import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadNotes } from '../../store/journal/thunks'
import { SideNote } from './SideNote'

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ drawerWidth }) => {
  const dispatch = useDispatch()

  const { displayName } = useSelector(state => state.auth)
  const { notes } = useSelector(state => state.journal)

  useEffect(() => {
    // console.warn('useEffect call')
    dispatch(loadNotes())
  }, [dispatch])

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent' // temporary si debe ocultarse
        open={true}
        onClose={() => { console.log('Drawer closed') }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar sx={{ alignSelf: 'center' }}>
          <Typography variant='h6' noWrap className='animate__animated animate__fadeInLeft animate__faster'>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            notes.map(note => <SideNote key={note.id} note={note} />)
          }
        </List>
      </Drawer>
    </Box>
  )
}
