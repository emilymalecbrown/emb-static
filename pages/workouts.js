import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getWorkouts } from './api/workouts'

export default function Peloton ({ workoutData }) {
  return (
    <Layout>
      <div>
        I love workout data. Peloton has been great for this because everything
        has been tracked and I can pull the data and maniputate it myself.
      </div>
      <h1>Here are some recent workouts I've done...</h1>
      <section>
        {workoutData.map(workout => (
          <h1>
            <Link href='/workouts/[id]' as={`/workouts/${workout.id}`}>
              <a>
                {workout.peloton.ride.title} -{workout.fitness_discipline}
              </a>
            </Link>
          </h1>
        ))}
      </section>
    </Layout>
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
