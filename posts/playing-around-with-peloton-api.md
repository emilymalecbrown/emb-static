---
title: "Playing around with the Peloton API"
date: "2020-07-10"
draft: true
---

Slightly embarassed to admit it, but I was part of the wave of Peloton purchasers during quarantine. It was getting difficult to motivate to run outside with a mask, and my (then fiance, now husband) promised to also use it! I wasn't sure exactly what I was getting into, but was surprised to find that one of the most exciting aspects of the bike / app was all the data it provides about your rides. On Reddit, I saw that some people were pulling data from the Peloton API to and decided it would be fun to try it out for myself.

## The API

In doing my research I discovered the API documented very thoroughly on [Swagger](https://app.swaggerhub.com/apis/DovOps/peloton-unofficial-api/0.2.3#/)! I wasn't familiar with Swagger before and this was a great


## Getting a workout

Each request for your own Peloton data requires an expirable `session_id`. Here's the request I'm making to get mine. the response is used in all subsequent requests as part of a `cookie` header.

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

Right now, I'm just rendering the most recent 15 workouts on my <a href="workouts">workouts</a> page, but I might get a little more fancy with this in the future. The request requires your user id as a path parameter, and the `session_id` from the authentication data we fetched above.

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

## Rendering the data

I am not doing anything fancy right now with the data - just rendering a card with the title, description, and #hashtag workout discipline - styled with TailwindCSS. I had some more ambitious plan, but trying to polish up this site first and still have time to workout 😊

I did try to make working this the data a little easier by using PropTypes, so I had Intellisense in VSCode for the responses. Since I didn’t write the API myself and the response structure wasn’t familiar to me, massaging and rendering the data nicely required a lot of looking back to the Swagger documentation and manually inspecting response payloads.

I was able to create PropTypes declarations with the JSON payloads from the API responses by pasting to this [handy open source tool](http://rmosolgo.github.io/prop-types/) that converts JSON to PropType declarations.

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
    // more stuff
  })
}
```

After all this though, I was only able to get Intellisense working in VSCode if the PropTypes declarations were made in the _same file_ - it doesn't seem to work with PropTypes as imports! It's not the prettiest file. I can’t figure out if this was something I was doing wrong or if it’s a 🐛.
