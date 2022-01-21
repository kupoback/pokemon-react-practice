import "../styles/globals.scss";
import App from "next/app";
import Layout from "../components/Layout";

import { apiCall } from "../apiRequest";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        setPokemon(pageProps.pokemon);
    });

    return (
        <Layout pokemon={pageProps.pokemon}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
    const pokemon = await apiCall(["pokedex/1"])
        .then((response) => {
            return response.length && response[0].pokemon_entries;
        })
        .catch((err) => console.error("There was an error:", err));

    const appProps = await App.getInitialProps(appContext);

    // Bind data to the pageProps for access
    appProps.pageProps.pokemon = pokemon;

    return {
        ...appProps,
    };
};
