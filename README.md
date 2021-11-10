# Pokédex Backend:
# November 2021 React Workshop


> "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession.  

> Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!"


> — Professor Oak, 1998

## We're going to finish building a mobile Pokédex webapp!

Professor Oak wants to bring his Pokédex into the 21st century with a modern API-Driven Mobile-First React App, and has chosen Clique Studios to make it happen.

We started this project out last month with a design that was built into mobile-first front-end with application Next.JS, and now we're going to be using an actual front-end handoff from last month's workshop (Thanks Angie!) as the starting point for this month's backend project.  

Your core goal will be to wire it up to the live API, and to engineer solutions around the API's complexity & limitations.

This is a free-flow type of workshop, so there isn't a tutorial for you to follow, or a "correct" way to do it — you'll be using your existing react & javascript knowledge!  You'll need to explore the API, the existing code, and all available resources and make a call on how to best build this out.  


### Designs

Although you probably won't need to do any front-end work, the original designs are here as a reference.

[Figma - Pokédex | Pokédex prototype with Style Guide and Wireframes. Designed for developers who are learning a new...](https://www.figma.com/community/file/979132880663340794)

# Sample API Data

For this project, the client has provided sample API responses for front-end to work with inside the `samples` folder. They've already been pre-imported into templates as JavaScript objects (so the front-end devs wouldn't be fetching live data from the API).  

- pokemon.json - a list of the first 151 Pokemon
- eevee.json - Sample data for an individual Pokemon

In the starter files, there are API routes where you can access the APIs in your browser (Firefox is good for exploring API endpoints).  `/api/eevee` for the single Pokémon, or `/api/pokemon` for the list of pokemon.

Note that the pre-formatted JSON given to the front-end devs was a combination of the individual [Eevee Pokémon data](https://pokeapi.co/docs/v2#pokemon), and the [Eevee Species data](https://pokeapi.co/docs/v2#pokemon-species).  The live api separates this data into two separate calls.

# Live API

You'll be moving this application from the sample data front-end used to the live Pokédex API! You'll have your choice of using the Rest API or the GraphQL API — please use whichever one you feel the most comfortable with.  

- **Rest API** - [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)
- 🆕 **BETA GraphQL** - [https://pokeapi.co/docs/graphql](https://pokeapi.co/docs/graphql)

There are also wrapper libraries out there which could expedite your work.  You're welcome to use these as well if you'd like, but this isn't required

- **Node Server-side with auto caching**: [Pokedex Promise v2](https://github.com/PokeAPI/pokedex-promise-v2) by Thomas Asadurian and Alessandro Pezzé
- **Browser-side with auto caching**: [pokeapi-js-wrapper](https://github.com/PokeAPI/pokeapi-js-wrapper) by Alessandro Pezzé

# Starting Code

[Atlassian](https://bitbucket.org/clique_studios/october-react-workshop-frontend/src/main/)

Please use this repo as a starter for this project, and commit to a branch using your name.

# Goals

***This challenge is for the back-end api connection and favorites only.***  

- **MAIN OBJECTIVE - PAGES/ROUTES**: Using the Next.js handoff from front-end, connect the following views/pages to the API to create a functional webapp :
    - Start / Home page
        - Clicking on a Pokémon should take you to the individual Pokémon page.
    - Search Results page
        - There is not a built-in search endpoint, you'll need to get creative.
            - It's hard to find in the documentation, so here is the endpoint for the "National Pokedex" which lists all Pokemon - [https://pokeapi.co/api/v2/pokedex/1/](https://pokeapi.co/api/v2/pokedex/1/)
        - Case-insensitive search that should return all matching Pokémon.
        - ***BONUS***: Expand the search functionality to also search for types (rock, electric, etc...), or a combo of types (flying dragon)
    - Individual Pokemon page
        - Name, Picture, Types, Color (from primary type), About Info, Description, and Base Stats should all pull from the API for that particular pokemon.
    - 404 page
- **BONUS OBJECTIVE - SHINY**
    - When viewing an individual Pokémon's page, give a 1/100 chance for the picture to display the shiny version of that Pokémon's (if it exists)
- **BONUS OBJECTIVE** - **FAVORITES**:
    - Clicking the heart icon should mark a Pokémon as a favorate
        - Favorites should display on the initial landing page
        - These can be stored in memory any way you like (global state library like Redux, Redux Toolkit, or Recoil, maybe react hooks like useContext, etc...)
        - Have Favorites persist on page reload (local storage, cookies?)
- When it makes sense, break complex bits of react into their own components.
- Push up your repo to bitbucket when finished and...
- Have fun!

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
