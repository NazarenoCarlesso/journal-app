import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
const drawerWidth = 240

export const JournalLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}

      {/* Sidebar */}

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}
        <Outlet />
      </Box>
    </Box>
  )
}
