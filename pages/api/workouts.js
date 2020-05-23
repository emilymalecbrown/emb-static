// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import { workouts } from './routes'
import { authenticate } from './authenticate'

export const getWorkouts = async () => {
  const authentication = await authenticate()

  const sessionId = authentication.session_id

  const { data } = await axios.get(workouts(process.env.PELOTON_USER_ID), {
    headers: {
      cookie: 'peloton_session_id=' + sessionId + ';'
    }
  })

  return data
}
