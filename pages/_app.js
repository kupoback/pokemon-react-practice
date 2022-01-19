import { useEffect, useState } from "react";
import {apiCall} from "../apiRequest";

import Layout from '../components/Layout'

import '../styles/globals.scss'


function App({ Component, pageProps, data }) {
  const [pokemons, setPokemons] = useState(data);

  console.log(data);

  // useEffect(() => {
  //   setPokemons()
  // })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

export async function getStaticProps() {
	const data = await apiCall(['pokedex/1'])
	.then(response => {
		return response.length && response[0];
	})
	.catch(err => console.error("There was an error:", err));
	if (!data) {
		return {
			notFound: true,
		}
	}
	
	return {
		props: {
			data: data.pokemon_entries,
		}
	}
}