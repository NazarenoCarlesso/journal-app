/* eslint-disable no-unused-vars */
import { loginUserWithEmail, registerUserWithEmail, signInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()
    // console.log({ result })
    if (!result.ok) { return dispatch(logout({ message: result.message })) }
    dispatch(login(result))
  }
}

export const startRegisterUserWithEmail = (user) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await registerUserWithEmail(user)
    // console.log({ result })
    if (!result.ok) { return dispatch(logout({ message: result.message })) }
    dispatch(login(result))
  }
}

export const startLoginUserWithEmail = (user) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await loginUserWithEmail(user)
    // console.log({ result })
    if (!result.ok) { return dispatch(logout({ message: result.message })) }
    dispatch(login(result))
  }
}
