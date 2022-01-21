import Header from "./Header";

import {removeDashes} from "../util";

const Layout = ({children, pokemon}) => {

    const pokemonNames = pokemon && pokemon.map(({pokemon_species}) => removeDashes(pokemon_species.name));

    return (
        <div className="wrapper">
            <Header pokemonNames={pokemonNames} />
            {children}
        </div>
    );
};

export default Layout;
