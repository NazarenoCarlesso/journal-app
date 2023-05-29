/* eslint-disable no-unused-vars */
import { loginUserWithEmail, registerUserWithEmail, signInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const user = localStorage.getItem('user')
    if (!user) return dispatch(logout())
    dispatch(login(JSON.parse(user)))
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

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    console.log(uid)
  }
}
