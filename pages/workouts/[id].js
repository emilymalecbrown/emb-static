import Layout from '../../components/Layout'
import { getWorkout, getWorkoutPerformance } from '../api/workout'
import PropTypes from 'prop-types'

function Workout ({ workoutData, workoutPerformance }) {
  const renderAchievements = () => {
    if (!Array.isArray(workoutData.achievement_templates)) return null

    return workoutData.achievement_templates.map(achievement => (
      <div key={achievement.name}>
        <h2>{achievement.name}</h2> <img src={achievement.image_url} />
      </div>
    ))
  }

  return (
    <Layout>
      <title>{workoutData.ride.title}</title>
      <div>{renderAchievements()}</div>
    </Layout>
  )
}

export async function getServerSideProps (context) {
  const workoutData = await getWorkout(context.params.id)
  const workoutPerformance = await getWorkoutPerformance(context.params.id)

  return {
    props: {
      workoutData,
      workoutPerformance
    }
  }
}

Workout.propTypes = {
  workoutData: PropTypes.shape({
    achievement_templates: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    created: PropTypes.number.isRequired,
    created_at: PropTypes.number.isRequired,
    device_time_created_at: PropTypes.number.isRequired,
    device_type: PropTypes.string.isRequired,
    device_type_display_name: PropTypes.string.isRequired,
    end_time: PropTypes.number.isRequired,
    fitbit_id: PropTypes.any,
    fitness_discipline: PropTypes.string.isRequired,
    ftp_info: PropTypes.shape({
      ftp: PropTypes.number.isRequired,
      ftp_source: PropTypes.any,
      ftp_workout_id: PropTypes.any
    }).isRequired,
    has_leaderboard_metrics: PropTypes.bool.isRequired,
    has_pedaling_metrics: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    is_total_work_personal_record: PropTypes.bool.isRequired,
    leaderboard_rank: PropTypes.any,
    metrics_type: PropTypes.any,
    name: PropTypes.string.isRequired,
    peloton: PropTypes.shape({
      countdown: PropTypes.any,
      created_at: PropTypes.number.isRequired,
      end_time: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      is_complete: PropTypes.bool.isRequired,
      is_encore: PropTypes.bool.isRequired,
      is_live: PropTypes.bool.isRequired,
      is_studio: PropTypes.bool.isRequired,
      pedaling_end_time: PropTypes.number.isRequired,
      pedaling_start_time: PropTypes.number.isRequired,
      ride: PropTypes.shape({
        class_type_ids: PropTypes.arrayOf(PropTypes.any).isRequired,
        content_format: PropTypes.string.isRequired,
        content_provider: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        difficulty_estimate: PropTypes.number.isRequired,
        difficulty_level: PropTypes.any,
        difficulty_rating_avg: PropTypes.number.isRequired,
        difficulty_rating_count: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        extra_images: PropTypes.arrayOf(PropTypes.any).isRequired,
        fitness_discipline: PropTypes.string.isRequired,
        fitness_discipline_display_name: PropTypes.string.isRequired,
        has_closed_captions: PropTypes.bool.isRequired,
        has_pedaling_metrics: PropTypes.bool.isRequired,
        home_peloton_id: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        instructor: PropTypes.any,
        instructor_id: PropTypes.string.isRequired,
        is_archived: PropTypes.bool.isRequired,
        is_closed_caption_shown: PropTypes.bool.isRequired,
        is_explicit: PropTypes.bool.isRequired,
        is_live_in_studio_only: PropTypes.bool.isRequired,
        language: PropTypes.string.isRequired,
        length: PropTypes.number.isRequired,
        live_stream_id: PropTypes.string.isRequired,
        live_stream_url: PropTypes.any,
        location: PropTypes.string.isRequired,
        metrics: PropTypes.arrayOf(PropTypes.any).isRequired,
        original_air_time: PropTypes.number.isRequired,
        overall_estimate: PropTypes.number.isRequired,
        overall_rating_avg: PropTypes.number.isRequired,
        overall_rating_count: PropTypes.number.isRequired,
        pedaling_duration: PropTypes.number.isRequired,
        pedaling_end_offset: PropTypes.number.isRequired,
        pedaling_start_offset: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        ride_type_id: PropTypes.string.isRequired,
        ride_type_ids: PropTypes.arrayOf(PropTypes.any).isRequired,
        sample_vod_stream_url: PropTypes.any,
        scheduled_start_time: PropTypes.number.isRequired,
        series_id: PropTypes.string.isRequired,
        sold_out: PropTypes.bool.isRequired,
        studio_peloton_id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        total_in_progress_workouts: PropTypes.number.isRequired,
        total_ratings: PropTypes.number.isRequired,
        total_workouts: PropTypes.number.isRequired,
        vod_stream_id: PropTypes.string.isRequired,
        vod_stream_url: PropTypes.string.isRequired
      }).isRequired,
      ride_id: PropTypes.string.isRequired,
      scheduled_start_time: PropTypes.any,
      seconds_since_start: PropTypes.any,
      server_time: PropTypes.number.isRequired,
      start_time: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      total_home_reservations: PropTypes.number.isRequired,
      total_workouts: PropTypes.number.isRequired
    }).isRequired,
    peloton_id: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    ride: PropTypes.shape({
      captions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      class_type_ids: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      content_format: PropTypes.string.isRequired,
      content_provider: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      difficulty_estimate: PropTypes.number.isRequired,
      difficulty_level: PropTypes.any,
      difficulty_rating_avg: PropTypes.number.isRequired,
      difficulty_rating_count: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
      equipment_ids: PropTypes.arrayOf(PropTypes.any).isRequired,
      equipment_tags: PropTypes.arrayOf(PropTypes.any).isRequired,
      excluded_platforms: PropTypes.arrayOf(PropTypes.any).isRequired,
      extra_images: PropTypes.arrayOf(PropTypes.any).isRequired,
      fitness_discipline: PropTypes.string.isRequired,
      fitness_discipline_display_name: PropTypes.string.isRequired,
      has_closed_captions: PropTypes.bool.isRequired,
      has_free_mode: PropTypes.bool.isRequired,
      has_pedaling_metrics: PropTypes.bool.isRequired,
      home_peloton_id: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      instructor_id: PropTypes.string.isRequired,
      is_archived: PropTypes.bool.isRequired,
      is_closed_caption_shown: PropTypes.bool.isRequired,
      is_explicit: PropTypes.bool.isRequired,
      is_live_in_studio_only: PropTypes.bool.isRequired,
      language: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
      live_stream_id: PropTypes.string.isRequired,
      live_stream_url: PropTypes.any,
      location: PropTypes.string.isRequired,
      metrics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      origin_locale: PropTypes.string.isRequired,
      original_air_time: PropTypes.number.isRequired,
      overall_estimate: PropTypes.number.isRequired,
      overall_rating_avg: PropTypes.number.isRequired,
      overall_rating_count: PropTypes.number.isRequired,
      pedaling_duration: PropTypes.number.isRequired,
      pedaling_end_offset: PropTypes.number.isRequired,
      pedaling_start_offset: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      ride_type_id: PropTypes.string.isRequired,
      ride_type_ids: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      sample_vod_stream_url: PropTypes.any,
      scheduled_start_time: PropTypes.number.isRequired,
      series_id: PropTypes.string.isRequired,
      sold_out: PropTypes.bool.isRequired,
      studio_peloton_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      total_in_progress_workouts: PropTypes.number.isRequired,
      total_ratings: PropTypes.number.isRequired,
      total_workouts: PropTypes.number.isRequired,
      vod_stream_id: PropTypes.string.isRequired,
      vod_stream_url: PropTypes.any
    }).isRequired,
    start_time: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    strava_id: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    title: PropTypes.any,
    total_leaderboard_users: PropTypes.number.isRequired,
    total_work: PropTypes.number.isRequired,
    user: PropTypes.shape({
      block_explicit: PropTypes.bool.isRequired,
      created_at: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      is_profile_private: PropTypes.bool.isRequired,
      is_provisional: PropTypes.bool.isRequired,
      last_workout_at: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      total_followers: PropTypes.number.isRequired,
      total_following: PropTypes.number.isRequired,
      total_non_pedaling_metric_workouts: PropTypes.number.isRequired,
      total_pedaling_metric_workouts: PropTypes.number.isRequired,
      total_workouts: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      workout_counts: PropTypes.any
    }).isRequired,
    user_id: PropTypes.string.isRequired,
    workout_type: PropTypes.string.isRequired
  }).isRequired
}

export default Workout
