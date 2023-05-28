// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJq5sl1w2Qk0GdXvraKJd6w0igb3fOD5s",
  authDomain: "journal-app-39d36.firebaseapp.com",
  projectId: "journal-app-39d36",
  storageBucket: "journal-app-39d36.appspot.com",
  messagingSenderId: "217494139212",
  appId: "1:217494139212:web:ca02dd6b981ba3af741fe9"
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
// Export Firebase products
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
