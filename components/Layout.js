import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Header from "./Header";

const Layout = ({children, data}) => {
    const [pokemon, setPokemon] = useState(data);

    useEffect(() => {
        setPokemon(pokemon);
    })

    return (
        <div className="wrapper">
            <Header pokemon={pokemon} />
            {children}
        </div>
    );
};

export default Layout;
