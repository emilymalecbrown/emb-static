---
title: "A story of minor automation success"
date: "2020-09-06"
---

I am currently living on an island. No bridges. Just a ferry to get off  🚢

I recently needed to book the ferry to get off the island, but there was no car availability. Some things caught my eye as I was going through the checkout: 

1. The reservation system issues you a reservation id before you book the ferry. 
2. The url to check availability can be hit over and over with that reservation id (session doesn't expire quickly).
3. The availability of ferries was changing quickly. 

I had written a cron-job to check for product availablity on Costco's site awhile back, and decided this would be another good usecase for a quick little webscraping script. 

### Goals

I had pretty basic requirements for this project. 

- Checks the ferry availability every 3 minutes 
- Sends me a text as soon as something becomes available
- Code takes me less than 15 minutes to write
- Free

### Pipedream

After some quick Google searches I came across this cool tool called [Pipedream](https://pipedream.com/). It allows you to create _Workflows_ with different steps (sequential functions), where you can pass data returned from a step in the sequence to the next step. In this case my steps were:

1. Run a cron job
2. Trigger lambda like function that scrapes the HTML on the ferry reservation page 
3. Send text to me if a spot at my desired times were available 

### Building it out

When creating a new Workflow in Pipedream a cron scheduler is one of the default options. It allows you to set the schedule where your workflow will be triggered.

I then had to add my next step - which in Pipedream was called _Run some Node.js code_. This is where I performed the HTML scaping. Pipedream's Node environment allows you to use any NPM package without any additional work. I used two libraries: 

- `axios`: to make the HTTP request to fetch the ferry reservation page 
- `node-html-parser` - allows for easy parsing of the html from the reservation page 

The code looked like this (no judgement - met the 15 minutes requirement):

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

The notable piece about this code is the return statement. The `data` returned from this function is passed along to the next step. This would allow the next step to have awareness of whether the ferry was available or not. In this case, the step was a block of code with a Twilio integration. 

### Twilio

Pipedream makes it super easy to set up with your Twilio account. It sets you up with boilerplate code and you just need to add your secrets (via their interface).

All of the code pasted below is their boilerplate except for:

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

And there you have it! This was a story of success - I did end up getting the text, and did end up booking the ferry. Happy days. I did feel slightly guilty when I realized I had built a mechanism that was faster, and allowed me to beat out, people in the ferry's own waitlist system. 

