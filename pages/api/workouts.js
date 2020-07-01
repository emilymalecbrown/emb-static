// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import { workouts } from './routes'
import { authenticate } from './authenticate'

let cache = {}

export const getWorkouts = async () => {
  if (!cache.sessionId) {
    console.log('setting cache')

    const authentication = await authenticate()

    cache.sessionId = authentication.session_id
  }

  const { data } = await axios.get(workouts(process.env.PELOTON_USER_ID), {
    headers: {
      cookie: `peloton_session_id=${cache.sessionId};`
    }
  })

  return data
}
