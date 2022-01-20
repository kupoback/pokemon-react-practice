export function getPokemonNames (pokemon) {
    return pokemon && pokemon
        .map(({pokemon_species}) => pokemon_species.name);
}

export function capFirstLetter(string) {
	return string
		.split(' ')
    	.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    	.join(' ');
}

export function removeDashes(string) {
	return string.replace(/-/g, ' ');
}

export function cleanDescription(string) {
	return string.replace(/(\r\n|\n|\r|\f)/gm, " ");
}