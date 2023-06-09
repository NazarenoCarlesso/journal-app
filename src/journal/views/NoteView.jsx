import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGalery } from '../components/ImageGalery'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { useEffect, useMemo, useRef } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startDeletingNote, startSavingNote, startUploadingFiles } from '../../store/journal/thunks'
import Swal from 'sweetalert2'

export const NoteView = () => {
  const dispatch = useDispatch()
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)
  // WARNING RE-RENDER
  // const initialValue = useMemo(() => ({ title: note.title, body: note.body }), [note])
  const { title, body, onInputChange, formState } = useForm(note)

  useEffect(() => {
    // console.warn('useEffect call')
    dispatch(setActiveNote(formState))
  }, [formState, dispatch])

  useEffect(() => {
    if (messageSaved.length > 0) Swal.fire('Nota Actualizada', messageSaved, 'success')
  }, [messageSaved])

  const dateString = useMemo(() => {
    const newDate = new Date(note.date)
    return newDate.toUTCString()
  }, [note.date])

  const onSaveNote = () => { dispatch(startSavingNote()) }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    // console.log('subiendo archivos')
    dispatch(startUploadingFiles(target.files))
  }

  const onDelete = () => {
    dispatch(startDeletingNote())
  }

  const fileInputRef = useRef()

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>
      <input type='file' multiple onChange={onFileInputChange} style={{ display: 'none' }} ref={fileInputRef} />
      <IconButton color='primary' disabled={isSaving} onClick={() => fileInputRef.current.click()}>
        <UploadOutlined />
      </IconButton>
      <Grid item>
        <Button
          color='primary'
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='standard'
          fullWidth
          placeholder='Ingrese un título'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type='text'
          variant='standard'
          fullWidth
          multiline
          placeholder='¿Qué sucedió en el día de hoy?'
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent='end'>
        <Button onClick={onDelete} sx={{ mt: 2 }} color='error'>
          <DeleteOutline />
        </Button>
      </Grid>
      {/* Image Galery */}
      <ImageGalery images={note.imageUrls} />
    </Grid>
  )
}
