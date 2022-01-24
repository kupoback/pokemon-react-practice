# Pokédex Backend


> "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession.  

> Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!"


> — Professor Oak, 1998

## We're going to finish building a mobile Pokédex webapp!

Professor Oak wants to bring his Pokédex into the 21st century with a modern API-Driven Mobile-First React App using NextJS. The poor soul.

Your core goal will be to wire it up to the live API, and to engineer solutions around the API's complexity & limitations.

This is a free-flow type of workshop, so there isn't a tutorial for you to follow, or a "correct" way to do it — you'll be using your existing react & javascript knowledge!  You'll need to explore the API, the existing code, and all available resources and make a call on how to best build this out.  

# Live API

You'll be moving this application from the sample data front-end used to the live Pokédex API! You'll have your choice of using the Rest API or the GraphQL API — please use whichever one you feel the most comfortable with.  

- **Rest API** - [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)

There are also wrapper libraries out there which could expedite your work.  You're welcome to use these as well if you'd like, but this isn't required

- **Node Server-side with auto caching**: [Pokedex Promise v2](https://github.com/PokeAPI/pokedex-promise-v2) by Thomas Asadurian and Alessandro Pezzé
- **Browser-side with auto caching**: [pokeapi-js-wrapper](https://github.com/PokeAPI/pokeapi-js-wrapper) by Alessandro Pezzé

# Resources

- [NextJS Documentation](https://nextjs.org/docs)
- [React Documentation (Updated with Hooks)](https://beta.reactjs.org/)
- [PokéAPI Rest Endpoint Documentation](https://pokeapi.co/docs/v2)
    - [National Pokédex Rest Endpoint](https://pokeapi.co/api/v2/pokedex/1/)
- [PokéAPI GraphQL Endpoint Documentation (beta)](https://pokeapi.co/docs/graphql)
- [Redux Toolkit (State Library, optional)](https://redux-toolkit.js.org/)


&nbsp;

---
&nbsp;

# Original Next.js Readme:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
