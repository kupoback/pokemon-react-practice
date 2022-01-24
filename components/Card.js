import { useEffect, useState } from "react";
import {apiCall} from "../apiRequest";

import Link from 'next/link';
import Image from 'next/image';

import Favorite from "./Favorite";

import styles from "../styles/Card.module.scss";

import {cleanNames} from "../util";

const Card = ({ pokemon, pokemonId }) => {
	const {name } = pokemon;
	const [pokemonSprite, setPokemonSprite] = useState([]);
	const [pokemonType, setPokemonType] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		apiCall([`pokemon/${pokemonId}`])
			.then(resp => resp.length && resp[0])
			.then(resp => {
				setPokemonSprite(resp.sprites);
				setPokemonType(resp.types[0].type.name);
			})
			.finally(() => setLoading(false));

	}, [pokemonId]);


    const cardBkgdColor = `card__${pokemonType}`;

	return (
		!loading && 
		<div className={`${styles.card} ${cardBkgdColor}`}>
			<span className={styles.card__favorite}><Favorite /></span>
			<div className={styles.card__image}>
				<Image src={pokemonSprite.front_default} alt={`${name} Sprite`} width="200" height="200" />
			</div>
			<div className={styles.card__name}>
				<Link href={`/pokemon/${name}`}>
					<a><h2>{cleanNames(name)}</h2></a>
				</Link>
			</div>	
		</div>
    );
};

export default Card;
