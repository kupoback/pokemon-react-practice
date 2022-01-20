import Link from 'next/link';
import Image from 'next/image';

import SearchForm from "./SearchForm";

import styles from "../styles/Header.module.scss";

import {getPokemonNames} from "../util"

const Header = ({pokemon}) => {

    return (
        <header className={styles.header}>
			<div className="container">
				<Link href="/">
					<a className={styles.header__title}>
						<span className={styles.header__logo}>
							<Image src="/images/pokeball.png" alt="logo" width="24" height="24" />
						</span>
						Pokédex
					</a>
				</Link>
				<SearchForm pokemon={getPokemonNames(pokemon)} />
			</div>
        </header>
    );
}

export default Header;