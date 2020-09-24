export const workouts = (userId, limit = 15, page = 0) =>
  `https://api.onepeloton.com/api/user/${userId}/workouts?joins=peloton.ride&limit=${limit}&page=${page}&sort_by=-created`
export const achievements = (userId) =>
  `https://api.onepeloton.com/api/user/${userId}/achievements`
export const singleWorkout = (workoutId) =>
  `https://api.onepeloton.com/api/workout/${workoutId}?joins=peloton%2Cpeloton.ride%2Cpeloton.ride.instructor%2Cuser`
export const singleWorkoutPerformance = (workoutId) =>
  `https://api.onepeloton.com/api/workout/${workoutId}/performance_graph?every_n=5`
