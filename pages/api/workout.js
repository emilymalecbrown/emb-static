import axios from 'axios'
import { singleWorkout, singleWorkoutPerformance } from './routes'
import { authenticate } from './authenticate'

let cache = {}

export const getWorkout = async workoutId => {
  if (!cache.sessionId) {
    console.log('setting cache')

    const authentication = await authenticate()

    cache.sessionId = authentication.session_id
  }

  const { data } = await axios.get(singleWorkout(workoutId), {
    headers: {
      cookie: `peloton_session_id=${cache.sessionId};`
    }
  })

  return data
}

export const getWorkoutPerformance = async workoutId => {
  if (!cache.sessionId) {
    console.log('setting cache')

    const authentication = await authenticate()

    cache.sessionId = authentication.session_id
  }

  const { data } = await axios.get(singleWorkoutPerformance(workoutId), {
    headers: {
      cookie: `peloton_session_id=${cache.sessionId};`
    }
  })

  return data
}
