import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { useMemo } from 'react'

export const LogIn = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm({
    email: 'nazareno@gmail.com',
    password: 'nazareno1234'
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log({ email, password })
    dispatch(checkingAuthentication({
      email,
      password
    }))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <>
      <Typography variant='h5' fontWeight={600} fontSize={'1.9rem'} sx={{ mb: 1 }}>
        Login
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='nazareno@gmail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='alexElLeon1234'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                type='submit'
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
