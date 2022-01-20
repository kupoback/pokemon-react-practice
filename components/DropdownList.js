import {capFirstLetter, removeDashes} from "../util"

const DropdownList = ({items}) => {
    const pokemon = items.sort((a, b) => a.localeCompare(b));
    return (
        <ul>
            {pokemon.map((pokemon, index) => <li key={index}>{capFirstLetter(removeDashes(pokemon))}</li>)}
        </ul>
    )
}

export default DropdownList;