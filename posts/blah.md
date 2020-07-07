---
title: "Building a static site and blog on Next.js"
date: "2020-05-22"
---

What I learned
Performance + SSG is not a given… 

Menial problems I faced

### PropTypes and imports. 

Since I was working with large responses from an “unofficial” external API (documented on Swagger here), I really wanted to use PropTypes to have both validation and some Intellisense for the responses. Since I didn’t write the API myself and the response structure wasn’t familiar to me, massaging and rendering the data nicely required a lot of looking back to the Swagger documentation and manually inspecting response payloads. I wanted to make this easier on myself!

I was able to create PropTypes declarations with the JSON payloads without any manual work using this handy open source tool: http://rmosolgo.github.io/prop-types/, however I wasn’t able to get Intellisense working in VSCode _unless_ the PropTypes declarations were made in the same file (does not work with PropTypes as imports!). I can’t figure out if this was something I was doing wrong or if it’s just a little :bug:.

### Choosing a theming / component library

I’ve used rebass + styled-system and wanted try to to use theme-ui and go a little more ~custom~… Quickly moved away from using any component based system and went with tailwindcss. I think people shy away from class-based CSS tooling like this because the HTML markup itself looks messy, but I think that is a fear that comes from the anxiety about maintainability if _you are writing the CSS_. I know that I don't have to maintain the CSS behind the classes and if I'm using them as prescribed, I'm golden. 
 

