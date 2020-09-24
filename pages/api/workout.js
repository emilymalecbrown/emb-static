import axios from 'axios'
import { singleWorkout, singleWorkoutPerformance } from 'pages/api/routes'
import { authenticate } from 'pages/api/authenticate'

export const getWorkout = async (workoutId) => {
  const authentication = await authenticate()

  const { data } = await axios.get(singleWorkout(workoutId), {
    headers: {
      cookie: `peloton_session_id=${authentication.session_id};`,
    },
  })

  return data
}

export const getWorkoutPerformance = async (workoutId) => {
  const authentication = await authenticate()

  const { data } = await axios.get(singleWorkoutPerformance(workoutId), {
    headers: {
      cookie: `peloton_session_id=${authentication.session_id};`,
    },
  })

  return data
}
