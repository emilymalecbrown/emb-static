---
title: "A story of minor automation success"
date: "2020-09-06"
draft: true
---

I am currently living on an island. No bridges. Just a ferry to get off 🚢

I recently needed to book the ferry to get off the island, but there was no car availability. Some things caught my eye as I was going through the checkout: 

1. The reservation system issues you a reservation id before you book the ferry. 
2. The url to check availability can be hit over and over with that reservation id (session doesn't expire quickly).
3. The availability of ferries was changing quickly. 

I had written a cron-job to check for product availablity on a site awhile back, and decided this would be another good usecase. 

### Goals

I had pretty basic requirements for this project. 

- Checks the ferry availability every 3 minutes 
- Sends me a text as soon as something becomes available
- Free
- Code takes me less than 15 minutes to write

### Pipedream

So, after some quick Google searches I came across this cool app called [Pipedream](https://pipedream.com/). It allows you to create "Workflows" with different steps, where you can pass data along to each subsequent step. In this case my steps were:

cron job => trigger lambda like function => send text to me! 

### Building it out

When creating a new Workflow in Pipedream a cron scheduler is one of the default options, so ✅

I then had to add my next step - which in Pipedream was called "Run some Node.js code". Pipedream's Node environment allows you to use any NPM package without any additional work. I used two libraries: 

axios - to make the HTTP request to fetch the ferry page 
node-html-parser - allowed me to parse the html to make some queries*

The code looked like this (no judgement - my requirement was less than 15 minutes!):

```js
async (event, steps) => {
  const axios = require('axios');
  const htmlParser = require('node-html-parser');
  const { data } = await axios.get('https://www.steamshipauthority.com/reserve/159941400677/select_trips', 
    { headers: { 'Cookie': 'PHPSESSID=MY_PRIVATE_COOKIE' }}
  )
  const html = htmlParser.parse(data);

  const trips = html.querySelectorAll('.availability')

  // not super granular, check for any availability changes after 1:15 (index 14 in list)
  let available = false;

  [...trips].forEach((trip, index) => {
    if (index > 14 && trip.childNodes[0].rawText.includes('Available')) {
      available = true; 
    }
  })

  return {
    data: available
  }
}
```

One interesting piece about this code is the return statement. The `data` returned from this function is passed along to the next step. In my case, this step was a block of code with a Twilio integration. 

### Twilio

Pipedream makes it super easy to set up with your Twilio account. Just need to add your secrets (via their interface).

Most of the code below is boilerplate except for:

`if (!steps.nodejs.$return_value.data) return;` 

This line uses the data returned from the previous step, and served to prevent me from getting texted if a ferry was **not** available. 

```js
async (event, steps) => {
  // Read the Twilio docs at https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource
  const phone = require('phone');

  if (!steps.nodejs.$return_value.data) return;
  // Parse the given number into its E.164 equivalent
  // The E.164 phone number will be included in the first element
  // of the array, but the array will be empty if parsing fails.
  // See https://www.npmjs.com/package/phone
  const toParsed = phone(params.To)
  if (!toParsed.length) {
    throw new Error(`Phone number ${params.To} couldn't be parsed as a valid number.`)
  }
  const fromParsed = phone(params.From)
  if (!fromParsed.length) {
    throw new Error(`Phone number ${params.From} couldn't be parsed as a valid number.`)
  }

  const data = {
    To: toParsed[0],
    From: fromParsed[0],
    MessagingServiceSid: params.MessagingServiceSid,
    Body: params.Body,
    MediaUrl: params.MediaUrl,
  }
  const config = {
    method: "post",
    url: `https://api.twilio.com/2010-04-01/Accounts/${auths.twilio.AccountSid}/Messages.json`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: auths.twilio.Sid,
      password: auths.twilio.Secret,
    },
    data: require("qs").stringify(data),
  }
  return await require("@pipedreamhq/platform").axios(this, config)
}
```

And there you have it! This was a story of success -- I did end up getting the text, and did end up booking the ferry. Happy days. 