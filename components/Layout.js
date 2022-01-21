import Header from "./Header";

import {cleanNames, removeDashes} from "../util";

const Layout = ({children, pokemon}) => {

    const pokemonNames = pokemon && pokemon.map(pokemon => (
        {
            id: pokemon.entry_number,
            value: removeDashes(pokemon.pokemon_species.name),
            label: cleanNames(pokemon.pokemon_species.name),
        }
    ));

    return (
        <div className="wrapper">
            <Header pokemonNames={pokemonNames} />
            {children}
        </div>
    );
};

export default Layout;
