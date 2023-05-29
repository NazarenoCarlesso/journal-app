import { collection, doc, getDocs, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // TODO: dispatch (saving new note)
    dispatch(savingNewNote())
    // UID
    const { uid } = getState().auth
    // console.log(state)
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }
    await setDoc(newDoc, newNote)
    newNote.id = newDoc.id
    // dispatch (newNote)
    dispatch(addNewEmptyNote(newNote))
    // dispatch (activar nota)
    dispatch(setActiveNote(newNote))
  }
}

export const loadNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    if (!uid) return null
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)
    // console.log(docs)
    const notes = []
    docs.forEach(doc => notes.push({ id: doc.id, ...doc.data() }))
    dispatch(setNotes(notes))
  }
}