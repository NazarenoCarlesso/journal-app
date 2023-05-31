export const fileUpload = async (file) => {
  if (!file) throw new Error('missing file')
  const cloudURL = 'https://api.cloudinary.com/v1_1/db35oxxl1/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)
  try {
    const response = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    })
    if (!response.ok) throw new Error('upload failed')
    // console.log(response)
    const cloudResponse = await response.json()
    return cloudResponse.secure_url
  } catch (error) {
    // console.log(error)
    throw new Error(error.message)
  }
}
