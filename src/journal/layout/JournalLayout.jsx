import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

// eslint-disable-next-line no-unused-vars
const drawerWidth = 240

export const JournalLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} />
      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
