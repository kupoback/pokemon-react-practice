import { useEffect, useState } from "react";
import apiCall from "../apiRequest";

import Head from "next/head";

import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

import pokemon from "../samples/pokemon";

export default function Home({data}) {
	const [pokemons, setPokemons] = useState(data);
	const [shuffle, setShuffle] = useState(false);

	const shufflePokemon = (e) => {
		e.preventDefault();
		setShuffle(true);
	}	

	useEffect(() => {
		setPokemons(pokemons.sort(() => Math.random() - 0.5));
		setShuffle(false);
	}, [shuffle]);

	return (
        <main className={styles.homepage}>
            <Head>
                <title>My Pokédex!</title>
                <meta
                    name="Pokémon Pokédex"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<div className="container">
				<div className={styles.homepage__cards}>
					{pokemons.slice(0, 6).map((pokemon, index) => {
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


export async function getStaticProps() {
	const resp = await apiCall('pokedex', 1);
	const data = await resp.data;
	
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