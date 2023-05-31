/* eslint-disable react/prop-types */
import { ImageList, ImageListItem } from '@mui/material'

export const ImageGalery = ({ images = [] }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={164}>
      {images.map(url => (
        <ImageListItem key={url}>
          <img
            src={`${url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='Note Image'
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
