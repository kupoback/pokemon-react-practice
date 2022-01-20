import '../styles/globals.scss'
import Layout from '../components/Layout'

import {apiCall} from "../apiRequest"

function App({ Component, pageProps, data }) {
  return (
    <Layout data={data}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

App.getInitialProps = async () => {
	const pokemon = await apiCall(['pokedex/1'])
	.then(response => {
		return response.length && response[0];
	})
	.catch(err => console.error("There was an error:", err));
  return {data: pokemon.pokemon_entries}
}