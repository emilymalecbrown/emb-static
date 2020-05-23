import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getWorkouts } from './api/workouts'

export default function Peloton ({ workoutData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        {workoutData.map(workout => (
          <>
            <h1>
              {workout.peloton.ride.title} - {workout.fitness_discipline}
            </h1>
          </>
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
