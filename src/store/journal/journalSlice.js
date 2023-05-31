/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
    // active: {
    //   id: '123',
    //   title: '',
    //   body: '',
    //   date: '',
    //   imageUrls: [], // https://foto1.jpg, https://foto2.jpg ...
    // }
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    updateNotes: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note)

      state.messageSaved = `${action.payload.title}, actualizada correctamente`
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [
        ...state.active.imageUrls,
        ...action.payload
      ]
      state.isSaving = false
    },
    deleteNoteById: (state, action) => {
      state.active = null
      state.notes = state.notes.filter(note => note.id !== action.payload)
    },
    savingNewNote: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    clearNotes: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.notes = []
      state.active = null
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  updateNotes,
  deleteNoteById,
  savingNewNote,
  setPhotosToActiveNote,
  clearNotes
} = journalSlice.actions
