---
title: "Playing around with the Peloton API"
date: "2020-07-10"
draft: true
---

One of the most exciting things when I got the Peloton was all of the data. When I was running more, I paid for RunKeeper's premium features which had a lot of the same achievement and progress-over-time features that I am loving to see on my Peloton account. On Reddit, I saw that some people were pulling data from the Peloton API to and decided it would be fun to try it out for myself.  

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

## Swagger

This was the first time I had heard of Swagger! I'm surprised I hadn't come across it before. 

## PropTypes and imports

Since I was working with large responses from an xternal API, I really wanted to use PropTypes to have both validation and some Intellisense for the responses. Since I didn’t write the API myself and the response structure wasn’t familiar to me, massaging and rendering the data nicely required a lot of looking back to the Swagger documentation and manually inspecting response payloads. I wanted to make this easier on myself!

I was able to create PropTypes declarations with the JSON payloads without any manual work using this handy open source tool: http://rmosolgo.github.io/prop-types/

After all this though, I wasn’t able to get Intellisense working in VSCode _unless_ the PropTypes declarations were made in the same file - it doesn't seem to work with PropTypes as imports! I can’t figure out if this was something I was doing wrong or if it’s a 🐛. 

 

