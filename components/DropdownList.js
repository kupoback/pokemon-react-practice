import Link from "next/link";

import { cleanNames } from "../util";

import styles from "../styles/SearchForm.module.scss";

const DropdownList = ({ items }) => {
    const pokemon = items.sort((a, b) => a.localeCompare(b));
    return (
        <fieldset className={`${styles.fieldset} dropdown-list`}>
            <ul>
                {pokemon.map((pokemon, index) => {
                    return (
                        <li key={index}>
                            <Link href={`/pokemon/${pokemon}`}>{cleanNames(pokemon)}</Link>
                        </li>
                    );
                })}
            </ul>
        </fieldset>
    );
};

export default DropdownList;
