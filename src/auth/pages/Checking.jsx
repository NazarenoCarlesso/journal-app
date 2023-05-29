import { CircularProgress, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { checkingAuthentication } from '../../store/auth/thunks'

export const CheckingAuth = () => {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(checkingAuthentication())
  }, [dispatch])

  if (status === 'authenticated') return <Navigate to='/journal' />
  if (status === 'not-authenticated') return <Navigate to='/auth/login' />

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 180
      }}
    >
      <CircularProgress color='error' />
    </Grid>
  )
}
