import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        background: 'radial-gradient(circle, rgba(0,167,68,1) 0%, rgba(0,83,33,1) 100%)',
        padding: 4
      }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  )
}
