import { useEffect, useState } from "react";
import {apiCall} from "../apiRequest";

import Link from 'next/link';
import Image from 'next/image';

import Favorite from "./Favorite";

import styles from "../styles/Card.module.scss";

import {capFirstLetter} from "../util";

const Card = ({ pokemon, pokemonId }) => {
	const [pokemonSprite, setPokemonSprite] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		apiCall([`pokemon/${pokemonId}`])
			.then(resp => resp.length && setPokemonSprite(resp[0].sprites))
			.finally(() => setLoading(false));
	}, [pokemonId]);

	return (
		!loading && 
		<div className={styles.card}>
			<span className={styles.card__favorite}><Favorite /></span>
			<div className={styles.card__image}>
				<Image src={pokemonSprite.front_default} alt={`${pokemon.name} Sprite`} width="200" height="200" />
			</div>
			<div className={styles.card__name}>
				<Link href={`/pokemon/${pokemon.name}`}>
					<a><h2>{capFirstLetter(pokemon.name)}</h2></a>
				</Link>
			</div>	
		</div>
    );
};

export default Card;
