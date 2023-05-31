import { fileUpload } from '../../src/helpers/fileUpload'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'db35oxxl1',
  api_key: '798399984732465',
  api_secret: '3dbxWfiG7XFPOxBT2XNvUSgtJdg',
  secure: true
})

describe('fileUpload testing... ', () => {
  test('debe de subir el archivo correctamente a Cloudinary', async () => {
    const imageUrl = 'https://media.tenor.com/fTTVgygGDh8AAAAM/kitty-cat-sandwich.gif'
    const file = await fetch(imageUrl).then(res => res.blob()).then(blob => new File([blob], 'kitty.gif'))
    const url = await fileUpload(file)
    // ELIMINAR LA IMAGEN DE LA NUBE
    // console.log(url)
    const arr = url.split('/')
    const id = arr[arr.length - 1].replace('.gif', '')
    console.log(id)
    await cloudinary.api.delete_resources(['journal/' + id])
    // PRUEBAS
    expect(typeof url).toBe('string')
    expect(url.length).toBeGreaterThan(10)
    expect(url).toContain('https://')
  })

  test('debe de retornar null', async () => {
    const file = new File([], 'foto.jpg')
    const url = await fileUpload(file)

    expect(url).toBeNull()
  })
})