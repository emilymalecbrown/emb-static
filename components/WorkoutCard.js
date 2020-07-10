import PropTypes from 'prop-types'

function WorkoutCard ({ workout }) {
  const { is_total_work_personal_record: pr, fitness_discipline } = workout

  const renderDiscipline = () => (
    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
      #{fitness_discipline}
    </span>
  )

  return (
    <div className='shadow-lg'>
      {workout.achievement_templates &&
        workout.achievement_templates.length > 0 &&
        workout.achievement_templates.map(achievement => (
          <img
            className='w-full'
            src={achievement.image_url}
            alt={achievement.description}
          />
        ))}
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>
          {workout.peloton.ride.title}
        </div>
        <p className='text-gray-700 text-base'>
          {workout.peloton.ride.description}
        </p>
      </div>
      <div className='px-6 py-4'>
        {pr && (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #personalbest
          </span>
        )}
        {renderDiscipline()}
      </div>
    </div>
  )
}

WorkoutCard.propTypes = {
  workout: PropTypes.shape({
    achievement_templates: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.string,
        image_url: PropTypes.string,
        name: PropTypes.string,
        slug: PropTypes.string
      })
    ),
    created: PropTypes.number,
    created_at: PropTypes.number,
    device_time_created_at: PropTypes.number,
    device_type: PropTypes.string,
    device_type_display_name: PropTypes.string,
    end_time: PropTypes.number,
    fitbit_id: PropTypes.any,
    fitness_discipline: PropTypes.string,
    ftp_info: PropTypes.shape({
      ftp: PropTypes.number,
      ftp_source: PropTypes.any,
      ftp_workout_id: PropTypes.any
    }),
    has_leaderboard_metrics: PropTypes.bool,
    has_pedaling_metrics: PropTypes.bool,
    id: PropTypes.string,
    is_total_work_personal_record: PropTypes.bool,
    leaderboard_rank: PropTypes.any,
    metrics_type: PropTypes.any,
    name: PropTypes.string,
    peloton: PropTypes.shape({
      countdown: PropTypes.any,
      created_at: PropTypes.number,
      end_time: PropTypes.number,
      id: PropTypes.string,
      is_complete: PropTypes.bool,
      is_encore: PropTypes.bool,
      is_live: PropTypes.bool,
      is_studio: PropTypes.bool,
      pedaling_end_time: PropTypes.number,
      pedaling_start_time: PropTypes.number,
      ride: PropTypes.shape({
        class_type_ids: PropTypes.arrayOf(PropTypes.any),
        content_format: PropTypes.string,
        content_provider: PropTypes.string,
        description: PropTypes.string,
        difficulty_estimate: PropTypes.number,
        difficulty_level: PropTypes.any,
        difficulty_rating_avg: PropTypes.number,
        difficulty_rating_count: PropTypes.number,
        duration: PropTypes.number,
        extra_images: PropTypes.arrayOf(PropTypes.any),
        fitness_discipline: PropTypes.string,
        fitness_discipline_display_name: PropTypes.string,
        has_closed_captions: PropTypes.bool,
        has_pedaling_metrics: PropTypes.bool,
        home_peloton_id: PropTypes.string,
        id: PropTypes.string,
        image_url: PropTypes.string,
        instructor: PropTypes.any,
        instructor_id: PropTypes.string,
        is_archived: PropTypes.bool,
        is_closed_caption_shown: PropTypes.bool,
        is_explicit: PropTypes.bool,
        is_live_in_studio_only: PropTypes.bool,
        language: PropTypes.string,
        length: PropTypes.number,
        live_stream_id: PropTypes.string,
        live_stream_url: PropTypes.any,
        location: PropTypes.string,
        metrics: PropTypes.arrayOf(PropTypes.any),
        original_air_time: PropTypes.number,
        overall_estimate: PropTypes.number,
        overall_rating_avg: PropTypes.number,
        overall_rating_count: PropTypes.number,
        pedaling_duration: PropTypes.number,
        pedaling_end_offset: PropTypes.number,
        pedaling_start_offset: PropTypes.number,
        rating: PropTypes.number,
        ride_type_id: PropTypes.string,
        ride_type_ids: PropTypes.arrayOf(PropTypes.any),
        sample_vod_stream_url: PropTypes.any,
        scheduled_start_time: PropTypes.number,
        series_id: PropTypes.string,
        sold_out: PropTypes.bool,
        studio_peloton_id: PropTypes.string,
        title: PropTypes.string,
        total_in_progress_workouts: PropTypes.number,
        total_ratings: PropTypes.number,
        total_workouts: PropTypes.number,
        vod_stream_id: PropTypes.string,
        vod_stream_url: PropTypes.string
      }),
      ride_id: PropTypes.string,
      scheduled_start_time: PropTypes.any,
      seconds_since_start: PropTypes.any,
      server_time: PropTypes.number,
      start_time: PropTypes.number,
      status: PropTypes.string,
      total_home_reservations: PropTypes.number,
      total_workouts: PropTypes.number
    }),
    peloton_id: PropTypes.string,
    platform: PropTypes.string,
    ride: PropTypes.shape({
      captions: PropTypes.arrayOf(PropTypes.string),
      class_type_ids: PropTypes.arrayOf(PropTypes.string),
      content_format: PropTypes.string,
      content_provider: PropTypes.string,
      description: PropTypes.string,
      difficulty_estimate: PropTypes.number,
      difficulty_level: PropTypes.any,
      difficulty_rating_avg: PropTypes.number,
      difficulty_rating_count: PropTypes.number,
      duration: PropTypes.number,
      equipment_ids: PropTypes.arrayOf(PropTypes.any),
      equipment_tags: PropTypes.arrayOf(PropTypes.any),
      excluded_platforms: PropTypes.arrayOf(PropTypes.any),
      extra_images: PropTypes.arrayOf(PropTypes.any),
      fitness_discipline: PropTypes.string,
      fitness_discipline_display_name: PropTypes.string,
      has_closed_captions: PropTypes.bool,
      has_free_mode: PropTypes.bool,
      has_pedaling_metrics: PropTypes.bool,
      home_peloton_id: PropTypes.string,
      id: PropTypes.string,
      image_url: PropTypes.string,
      instructor_id: PropTypes.string,
      is_archived: PropTypes.bool,
      is_closed_caption_shown: PropTypes.bool,
      is_explicit: PropTypes.bool,
      is_live_in_studio_only: PropTypes.bool,
      language: PropTypes.string,
      length: PropTypes.number,
      live_stream_id: PropTypes.string,
      live_stream_url: PropTypes.any,
      location: PropTypes.string,
      metrics: PropTypes.arrayOf(PropTypes.string),
      origin_locale: PropTypes.string,
      original_air_time: PropTypes.number,
      overall_estimate: PropTypes.number,
      overall_rating_avg: PropTypes.number,
      overall_rating_count: PropTypes.number,
      pedaling_duration: PropTypes.number,
      pedaling_end_offset: PropTypes.number,
      pedaling_start_offset: PropTypes.number,
      rating: PropTypes.number,
      ride_type_id: PropTypes.string,
      ride_type_ids: PropTypes.arrayOf(PropTypes.string),
      sample_vod_stream_url: PropTypes.any,
      scheduled_start_time: PropTypes.number,
      series_id: PropTypes.string,
      sold_out: PropTypes.bool,
      studio_peloton_id: PropTypes.string,
      title: PropTypes.string,
      total_in_progress_workouts: PropTypes.number,
      total_ratings: PropTypes.number,
      total_workouts: PropTypes.number,
      vod_stream_id: PropTypes.string,
      vod_stream_url: PropTypes.any
    }),
    start_time: PropTypes.number,
    status: PropTypes.string,
    strava_id: PropTypes.string,
    timezone: PropTypes.string,
    title: PropTypes.any,
    total_leaderboard_users: PropTypes.number,
    total_work: PropTypes.number,
    user: PropTypes.shape({
      block_explicit: PropTypes.bool,
      created_at: PropTypes.number,
      id: PropTypes.string,
      image_url: PropTypes.string,
      is_profile_private: PropTypes.bool,
      is_provisional: PropTypes.bool,
      last_workout_at: PropTypes.number,
      location: PropTypes.string,
      total_followers: PropTypes.number,
      total_following: PropTypes.number,
      total_non_pedaling_metric_workouts: PropTypes.number,
      total_pedaling_metric_workouts: PropTypes.number,
      total_workouts: PropTypes.number,
      username: PropTypes.string,
      workout_counts: PropTypes.any
    }),
    user_id: PropTypes.string,
    workout_type: PropTypes.string
  })
}

export default WorkoutCard
