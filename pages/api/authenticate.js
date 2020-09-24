import axios from 'axios'

export const authenticate = async () => {
  const response = await axios.post(
    'https://api.onepeloton.com/auth/login',
    JSON.stringify({
      username_or_email: process.env.PELOTON_USERNAME,
      password: process.env.PELOTON_PASSWORD,
    })
  )
  return response.data
}
