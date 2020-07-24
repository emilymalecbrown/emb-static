---
title: "Building my personal site and blog on Next.js"
date: "2020-05-22"
draft: true
---

### Next.js

This is my second exploration with Next.js - the first was when Vercel was still Zeit. I started with the [demo here](https://github.com/vercel/next-learn-starter/tree/master/demo) and built from there.

I haven't done much customization on top of this!

Some great of the great things about static site generation for this site are:

1. It's tiny and won't be updated often and building and deploying it takes 1 minute. Happens automatically on a Github merge to master!

2. I wanted to add some data that requires API calls with secrets (my peloton username and password), and those calls are made at build time. Don't have to worry about doing anything fancy to obscure them. There is zero configuration to use `process.env` variables once you've added them to the project the Vercel interface or CLI.

3. It's fun and new. The APIs are well written and there is a vibrant open source community. I'd love to contribute to the project at some point.

### Adding Domains / Vercel

**So easy**! All I needed to do was remove the name servers I was previously using for my site from Google domains, and go back to add the domains in the project settings Vercel dashboard. SSL certificates were automatically generated and I was set.

### Styling

I’ve used Rebass + Styled System, and wanted try to to use Theme UI and go a little more custom. Quickly moved away from this! This required a lot more of my own opinions on how to style the thing. I decided to use [TailwindCSS](https://tailwindcss.com/docs/installation/).

I think people shy away from class-based CSS tooling like this because the HTML markup itself looks messy. However, I think that is a fear that comes from the anxiety about maintainability of the CSS behind those classes. I know that I don't have to worry about that and if I'm using the classes as prescribed, I'm golden.

After writing a really small custom plugin for text styling I got lazy once again, and decided to use Adam Wathan's recently published [typography plugin](https://tailwindcss.com/docs/typography-plugin/).

I still need to do some tweaking on the styling, but I'm really happy with how far Tailwind can take you with so little lift.

