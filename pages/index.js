import { useEffect, useState } from "react";
// import {apiCall} from "../apiRequest";

import Head from "next/head";
import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

export default function Home({data}) {
	// const [pokemons, setPokemons] = useState(data);
	// const [randomPokemons, setRandomPokemons] = useState(null);
	// const [shuffle, setShuffle] = useState(false);

	// const shufflePokemon = (e) => {
	// 	e.preventDefault();
	// 	setRandomPokemons(pokemons.sort(() => Math.random() - 0.5));
	// 	setShuffle(true);
	// }	

	// useEffect(() => {
	// 	setShuffle(false);
	// }, [shuffle]);

	return (<h1>test</h1>)

	return (
        <main className={styles.homepage}>
            <Head>
                <title>My Pokédex!</title>
                <meta name="Pokémon Pokédex"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<div className="container">
				<div className={styles.homepage__cards}>
					{pokemons && randomPokemons.slice(0, 6).map((pokemon, index) => {
						return (
							<Card key={index} pokemon={pokemon.pokemon_species} pokemonId={pokemon.entry_number} />
						)
					})}
					{shuffle && randomPokemons.slice(0, 6).map((pokemon, index) => {
						return (
							<Card key={index} pokemon={pokemon.pokemon_species} pokemonId={pokemon.entry_number} />
						)
					})}
				</div>
				<button className="btn" onClick={(e) => shufflePokemon(e)}>Shuffle Pokémon</button>
            </div>
        </main>
    );
}


// export async function getStaticProps() {
// 	const data = await apiCall(['pokedex/1'])
// 	.then(response => {
// 		return response.length && response[0];
// 	})
// 	.catch(err => console.error("There was an error:", err));
// 	if (!data) {
// 		return {
// 			notFound: true,
// 		}
// 	}
	
// 	return {
// 		props: {
// 			data: data.pokemon_entries,
// 		}
// 	}
// }