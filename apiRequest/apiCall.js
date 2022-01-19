// import axios from "axios";
// import Config from "../config";

// const { apiUrl } = Config;

// export default async function apiCall(endpoint, id = false, params = {}) {
//     const config = {}
//     if (params) config.params = params;

//     if (id) return await axios.get(`${apiUrl}/${endpoint}/${id}`, config);
//     return await axios.get(`${apiUrl}/${endpoint}`, config);
// }

import Pokedex from 'pokedex-promise-v2';
const apiCallBack = new Pokedex();

export async function apiCall(endpoints = []) {
    const endpointUrls = endpoints.length && endpoints.map(ep => `/api/v2/${ep}`);

    return await apiCallBack.getResource(endpointUrls)
}

export async function standaloneCall(endpoints = false) {
    return endpoints && await apiCallBack.getResource(endpoints)
}

export async function getPokemonsList() {
    return await apiCallBack.getPokemonsList();
}

export async function getCharacteristicById(id = false) {
    return id && await apiCallBack.getCharacteristicById(id);
}