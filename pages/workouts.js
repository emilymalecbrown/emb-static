import WorkoutCard from 'components/WorkoutCard'
import { getWorkouts } from 'pages/api/workouts'

export default function Peloton({ workoutData }) {
  return (
    <div className="max-w-full mb-16 prose">
      <p>
        I workout sometimes. Not only does it make me feel better, but I like
        setting goals and tracking my progress. Peloton has been great for both
        of these! Because it's API-driven I can pull the data and maniputate it
        for myself.
      </p>
      <p>Here are some recent workouts I've done...</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
        {workoutData.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await getWorkouts()

  return {
    props: {
      workoutData: data,
    },
  }
}
