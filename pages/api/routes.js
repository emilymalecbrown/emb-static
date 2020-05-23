export const workouts = (userId, limit = 10, page = 1) =>
  `https://api.onepeloton.com/api/user/${userId}/workouts?joins=peloton.ride&limit=${limit}&page=${page}&sort_by=-created`
export const achievements = userId =>
  `https://api.onepeloton.com/api/user/${userId}/achievements`
export const singleWorkout = workoutId =>
  `https://api.onepeloton.com/api/workout/${workoutId}?joins=peloton%2Cpeloton.ride%2Cpeloton.ride.instructor%2Cuser`
