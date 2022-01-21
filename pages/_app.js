import "../styles/globals.scss";
import App from "next/app";
import Layout from "../components/Layout";

import { apiCall } from "../apiRequest";

function MyApp({ Component, pageProps }) {
  return (
    <Layout pokemon={pageProps.data}>
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
  appProps.pageProps.data = pokemon;

  return {
    ...appProps,
  };
};
