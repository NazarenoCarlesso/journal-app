import { Navigate, Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterUserWithEmail } from '../../store/auth/thunks'
import { CheckingAuth } from './Checking'

// eslint-disable-next-line no-unused-vars
const formData = {
  displayName: 'Nazareno',
  email: 'nazareno@gmail.com',
  password: 'nazareno1234'
}

const formValidations = {
  displayName: [(v) => v.length >= 1, 'El nombre es obligatorio'],
  email: [(v) => v.includes('@'), 'El correo debe tener una @'],
  password: [(v) => v.length >= 6, 'La contraseña debe tener más de 6 letras']
}

export const Register = () => {
  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    onInputChange, displayName, email, password, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)

  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuth = useMemo(() => status === 'checking', [status])

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid) return;
    // console.log({ displayName, email, password })
    setFormSubmitted(true)
    dispatch(startRegisterUserWithEmail(formState))
  }

  if (status === 'checking') return <CheckingAuth />
  if (status === 'authenticated') return <Navigate to='/journal' />

  return (
    <>
      <Typography variant='h5' fontWeight={600} fontSize={'1.9rem'} sx={{ mb: 1 }}>
        Register
      </Typography>
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Patrick Bateman'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='nazareno@gmail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid}
              helperText={emailValid}
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
              error={!!passwordValid}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12} display={errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant='contained'
                fullWidth
                type='submit'
                disabled={!isFormValid || formSubmitted || isCheckingAuth}
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Typography sx={{ mr: 1 }}>
              ¿Ya tienes una cuenta?
            </Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
