import { useEffect, useState } from "react";

import Head from "next/head";
import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

export default function Home({pokemon}) {
	const [pokemonData, setPokemonData] = useState(null);
	const [shufflePokemon, setShufflePokemon] = useState(pokemon);
	const [shuffle, setShuffle] = useState(false);

	const randomPokemon = (e) => {
		e.preventDefault();
		setShufflePokemon(shufflePokemon.sort(() => Math.random() - 0.5).slice(0,6));
		setShuffle(true);
	}	

	useEffect(() => {
		setPokemonData(pokemon.slice(0, 6));
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
					{(pokemonData && !shuffle) && pokemonData.slice(0, 6).map((pokemon, index) => {
						return (
							<Card key={index} pokemon={pokemon.pokemon_species} pokemonId={pokemon.entry_number} />
						)
					})}
					{shuffle && shufflePokemon.slice(0, 6).map((pokemon, index) => {
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
