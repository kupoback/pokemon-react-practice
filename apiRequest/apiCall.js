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