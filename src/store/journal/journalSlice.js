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
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    updateNotes: (state, /* action */) => {

    },
    deleteNoteById: (state, /* action */) => {

    },
    savingNewNote: (state) => {
      state.isSaving = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, updateNotes, deleteNoteById, savingNewNote } = journalSlice.actions
