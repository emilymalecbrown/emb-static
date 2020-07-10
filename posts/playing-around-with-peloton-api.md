---
title: "Playing around with the Peloton API"
date: "2020-07-10"
---

### Swagger. 


### PropTypes and imports. 

Since I was working with large responses from an “unofficial” external API (documented on Swagger here), I really wanted to use PropTypes to have both validation and some Intellisense for the responses. Since I didn’t write the API myself and the response structure wasn’t familiar to me, massaging and rendering the data nicely required a lot of looking back to the Swagger documentation and manually inspecting response payloads. I wanted to make this easier on myself!

I was able to create PropTypes declarations with the JSON payloads without any manual work using this handy open source tool: http://rmosolgo.github.io/prop-types/, however I wasn’t able to get Intellisense working in VSCode _unless_ the PropTypes declarations were made in the same file (does not work with PropTypes as imports!). I can’t figure out if this was something I was doing wrong or if it’s just a little :bug:.

 

