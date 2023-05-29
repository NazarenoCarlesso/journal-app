import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGalery } from '../components/ImageGalery'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { useMemo } from 'react'

export const NoteView = () => {
  const { active: note } = useSelector(state => state.journal)
  // WARNING RE-RENDER
  // const initialValue = useMemo(() => ({ title: note.title, body: note.body }), [note])
  const { title, body, onInputChange } = useForm(note)

  const dateString = useMemo(() => {
    const newDate = new Date(note.date)
    return newDate.toUTCString()
  }, [note.date])

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
      <Grid item>
        <Button color='primary' sx={{ padding: 2 }}>
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
      {/* Image Galery */}
      <ImageGalery />
    </Grid>
  )
}
