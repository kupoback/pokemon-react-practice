import { useEffect, useState } from "react";
import {apiCall} from "../apiRequest";

import Head from "next/head";
import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

export default function Home({data}) {
	const [pokemon, setPokemon] = useState(null);
	const [shufflePokemon, setShufflePokemon] = useState(data);
	const [shuffle, setShuffle] = useState(false);

	const randomPokemon = (e) => {
		e.preventDefault();
		setShufflePokemon(data.sort(() => Math.random() - 0.5).slice(0,6));
		setShuffle(true);
	}	

	useEffect(() => {
		setPokemon(data.slice(0, 6));
		setShuffle(false);
	}, [shuffle]);

	return (
        <main className={styles.homepage}>
            <Head>
                <title>My Pokédex!</title>
                <meta name="Pokémon Pokédex"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<div className="container">
				<div className={styles.homepage__cards}>
					{(pokemon && !shuffle) && pokemon.slice(0, 6).map((pokemon, index) => {
						return (
							<Card key={index} pokemon={pokemon.pokemon_species} pokemonId={pokemon.entry_number} />
						)
					})}
					{shuffle && pokemon.slice(0, 6).map((pokemon, index) => {
						return (
							<Card key={index} pokemon={pokemon.pokemon_species} pokemonId={pokemon.entry_number} />
						)
					})}
				</div>
				<button className="btn" onClick={(e) => randomPokemon(e)}>Shuffle Pokémon</button>
            </div>
        </main>
    );
}


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