import WorkoutCard from 'components/WorkoutCard'
import { getWorkouts } from 'pages/api/workouts'

export default function Peloton ({ workoutData }) {
  return (
    <div className='my-8'>
      <div>
        I workout sometimes. Not only does it make me feel great, but it allows
        me to set goals and track my progress. Peloton has been great for both
        of these! Because it's API-driven I can pull the data and maniputate it
        for myself.
      </div>
      <h1 className='my-4'>Here are some recent workouts I've done...</h1>
      <div className='grid grid-cols-3 gap-4'>
        {workoutData.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps () {
  const { data } = await getWorkouts()

  return {
    props: {
      workoutData: data
    }
  }
}
