// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import { workouts } from 'pages/api/routes'
import { authenticate } from 'pages/api/authenticate'

export const getWorkouts = async limit => {
  const authentication = await authenticate()

  const { data } = await axios.get(
    workouts(process.env.PELOTON_USER_ID, limit),
    {
      headers: {
        cookie: `peloton_session_id=${authentication.session_id};`
      }
    }
  )

  return data
}
