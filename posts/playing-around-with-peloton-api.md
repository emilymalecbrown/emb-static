---
title: "Playing around with the Peloton API"
date: "2020-07-10"
---

Slightly embarassed to admit it, but I was part of the wave of Peloton purchasers during quarantine. It was getting difficult to run safely distanced from others and with a mask, and my (then fiancé, now husband) promised he would use it as well. Exercise is my primary tool for managing stress, and the Peloton quickly proved to be a great way to channel the anxious engery that abounds during this time. 

I was surprised to find that one of the most motivating aspects of the bike and the Peloton app was the data it provides about your workouts. On Reddit, I saw that some people were pulling data from the Peloton API and decided it would be fun to try it out for myself.

## The API

During some initial research I found that the API is documented very thoroughly on [Swagger](https://app.swaggerhub.com/apis/DovOps/peloton-unofficial-api/0.2.3#/)! I was not familiar with Swagger and this was a great resource for learning about the API and publically available data. 

## Getting a workout

### Authentication 

Each request for your own Peloton data requires an expirable `session_id`. You can make a request to retrieve the `session_id` using their authentication endpoint with your Peloton username and password. It is then as part of the `cookie` header in every subsequent request.

```javascript
export const authenticate = async () => {
  const response = await axios.post(
    'https://api.onepeloton.com/auth/login',
    JSON.stringify({
      username_or_email: process.env.PELOTON_USERNAME,
      password: process.env.PELOTON_PASSWORD
    })
  )
  return response.data
}
```

Right now, I am just rendering the most recent 15 workouts on my <a href="workouts">workouts</a> page. This page isn't fancy, half to play around with the API and half to learn some of the basics of TailwindCSS. The request requires your Pelton user id as a path parameter, and the `session_id` in the `cookie` header from the authentication data we fetched above.

```javascript
const workouts = (userId, limit = 15, page = 0) =>
  `https://api.onepeloton.com/api/user/${userId}/workouts?joins=peloton.ride&limit=${limit}&page=${page}&sort_by=-created`


export const getWorkouts = async limit => {
  const { session_id } = await authenticate()

  const { data } = await axios.get(
    workouts(process.env.PELOTON_USER_ID, limit),
    {
      headers: {
        cookie: `peloton_session_id=${session_id};`
      }
    }
  )

  return data
}
```

### Other routes

These are a few other routes that I am playing with... `singleWorkoutPerformance` is the most interesting one for me. Peloton does not have great ways to view performance over time, and focuses on highlighting personal bests and streaks rather trend-lines.  

```javascript
export const achievements = userId =>
  `https://api.onepeloton.com/api/user/${userId}/achievements`

export const singleWorkout = workoutId =>
  `https://api.onepeloton.com/api/workout/${workoutId}?joins=peloton%2Cpeloton.ride%2Cpeloton.ride.instructor%2Cuser`

export const singleWorkoutPerformance = workoutId =>
  `https://api.onepeloton.com/api/workout/${workoutId}/performance_graph?every_n=5`
```

## Rendering the data

I am not doing anything fancy right now with the data - just rendering a card with the title, description, and workout discipline - styled with TailwindCSS. I had some more ambitious plan, but I'm trying to polish up this site and still have time to workout 😊

I did attempt to make working with the data a little easier by using PropTypes, mainly for Intellisense in VSCode for the responses. Since the response structure wasn’t familiar to me, massaging and rendering the data nicely required a lot of looking back to the Swagger documentation and manually inspecting response payloads.

I was able to create PropTypes declarations of the API responses with [handy open source tool](http://rmosolgo.github.io/prop-types/) that converts JSON to PropTypes.

```javascript
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
    // lots more data
  })
}
```

After all this though, I was only able to get Intellisense working in VSCode if the PropTypes declarations were made in the _same file_ - it doesn't seem to work with PropTypes as imports! It's not the prettiest file. I can’t figure out if this was something I was doing wrong or if it’s a 🐛.
