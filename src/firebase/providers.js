import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    // console.log({ credentials })
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true,
      // User info
      displayName, email, photoURL, uid
    }
  } catch (error) {
    // console.log(error)
    const { code, message } = error
    return {
      ok: false,
      code, message,
      email: error.customData.email
    }
  }
}

export const registerUserWithEmail = async ({ email, password, displayName }) => {
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    // console.log({ result })
    const { uid, photoURL } = result.user
    // TODO: actualizar displayName en firebase
    updateProfile(FirebaseAuth.currentUser, {
      displayName: displayName
    })

    return {
      ok: true,
      uid, photoURL, email, displayName
    }
  } catch (error) {
    const { code, message } = error
    return {
      ok: false,
      code, message, email
    }
  }
}

export const loginUserWithEmail = async ({ email, password }) => {
  // signInWithEmailAndPassword
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    // console.log({ result })
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  } catch (error) {
    const { code, message } = error
    return {
      ok: false,
      code, message, email
    }
  }
}
