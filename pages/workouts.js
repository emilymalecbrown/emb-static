import WorkoutCard from '../components/WorkoutCard'

import { getWorkouts } from './api/workouts'

export default function Peloton ({ workoutData }) {
  return (
    <div>
      <div>
        I love workout data. Peloton has been great for this because everything
        has been tracked and I can pull the data and maniputate it myself.
      </div>
      <h1>Here are some recent workouts I've done...</h1>
      <div className='flex flex-wrap -mb-4 -mx-4'>
        {workoutData.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps () {
  const { data } = await getWorkouts(20)

  return {
    props: {
      workoutData: data
    }
  }
}
