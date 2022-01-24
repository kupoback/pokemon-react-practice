/**
 * Scripts
 */
import { useRouter } from "next/router";
import { apiCall, standaloneCall } from "../../apiRequest";
import { cleanNames, cleanDescription } from "../../util";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    registerables,
} from "chart.js";
import { Radar } from "react-chartjs-2";

/**
 * Next Components
 */
import Image from "next/image";

/**
 * Custom Components
 */
import Favorite from "../../components/Favorite";

/**
 * Icons
 */
import RulerIcon from "../../components/svg/RulerIcon";
import WeightIcon from "../../components/svg/WeightIcon";

/**
 * Styles
 */
import styles from "../../styles/Pokemon.module.scss";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Pokemon = ({ query, pokemonData }) => {
    const router = useRouter();
    const { name } = router.query;

    const {
        descriptionArray,
        height,
        sprites,
        weight,
    } = pokemonData;

    const abilities = pokemonData.abilities.map(({ ability }) => cleanNames(ability.name));

    // Special instance Switch/case for changing the stat name
    const stats = pokemonData.stats.map(({ stat, base_stat }) => {
        let name = stat.name;
        switch (name) {
            case "attack":
                name = "atk";
                break;
            case "defense":
                name = "def";
                break;
            case "special-attack":
                name = "satk";
                break;
            case (name = "special-defense"):
                name = "sdef";
                break;
            case (name = "speed"):
                name = "spd";
                break;
            // Not sure why i need to do this, but it keeps defaulting to speed
            // when I use default:
            case (name = "hp"):
                name = name;
                break;
        }

        return {
            name: name.toUpperCase(),
            value: base_stat,
        };
    });

    const statValues = stats.map(({ value }) => parseInt(value));

    const types = pokemonData.types.map(({ type }) => cleanNames(type.name));
	const firstType = types[0].toLowerCase();
    const typeBkgdColors = `type__${firstType}__background`;
    const typeTextColors = `type__${firstType}__font`;

    const graphData = {
        labels: stats.map(({ name }) => name),
        datasets: [
            {
                label: "Base Stats",
                data: statValues,
                backgroundColor: hexToRgb(firstType, 0.5),
                borderColor: hexToRgb(firstType, 0.8),
                borderWidth: 1,
            },
        ],
    };

    const graphOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            r: {
                suggestedMax: Math.max.apply(Math, statValues) + 5,
                suggestedMin: Math.min.apply(Math, statValues) - 5,
            },
        },
    };

    return (
        <div className={`${styles.pokemon} ${typeBkgdColors}`}>
            <span className={styles.pokemon__favorite}>
                <Favorite />
            </span>
            <div className={styles.pokemon__ball}>
                <svg
                    width='207'
                    height='208'
                    viewBox='0 0 207 208'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                >
                    <g opacity='0.1'>
                        <path
                            d='M127.865 104C127.865 117.676 116.779 128.762 103.103 128.762C89.4276 128.762 78.3414 117.676 78.3414 104C78.3414 90.3244 89.4276 79.2381 103.103 79.2381C116.779 79.2381 127.865 90.3244 127.865 104Z'
                            fill='white'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M103.103 208C155.497 208 198.841 169.257 206.05 118.857H145.139C139.02 136.169 122.51 148.571 103.103 148.571C83.6966 148.571 67.1868 136.169 61.068 118.857H0.156477C7.3656 169.257 50.71 208 103.103 208ZM61.068 89.1429H0.156477C7.3656 38.7431 50.71 0 103.103 0C155.497 0 198.841 38.7431 206.05 89.1429H145.139C139.02 71.8314 122.51 59.4286 103.103 59.4286C83.6966 59.4286 67.1868 71.8314 61.068 89.1429ZM127.865 104C127.865 117.676 116.779 128.762 103.103 128.762C89.4276 128.762 78.3414 117.676 78.3414 104C78.3414 90.3244 89.4276 79.2381 103.103 79.2381C116.779 79.2381 127.865 90.3244 127.865 104Z'
                            fill='white'
                        />
                    </g>
                </svg>
            </div>
            <h1 className={styles.name}>{name}</h1>
            <div className={styles.pokemon__image}>
                <Image src={sprites.front_default} alt={`${name} Sprite`} width='200' height='200' />
            </div>
            <div className={styles.pokemon__info}>
                <p className={`${styles.pokemon__category} ${typeBkgdColors}`}>{types.join(", ")}</p>
                <h2 className={typeTextColors}>About</h2>
                <div className={styles.pokemon__detail}>
                    <div className={styles.pokemon__detail__item}>
                        <h3>Weight</h3>
                        <p>
                            <WeightIcon />
                            {weight}kg
                        </p>
                    </div>
                    <div className={styles.pokemon__detail__item}>
                        <h3>Height</h3>
                        <p>
                            <RulerIcon /> {height}m
                        </p>
                    </div>
                    <div className={styles.pokemon__detail__item}>
                        <h3>Moves</h3>
                        {abilities.length && abilities.map((ability, index) => <p key={index}>{ability}</p>)}
                    </div>
                </div>
                {/* // @TODO Convert to an accordion  */}
                {descriptionArray.map(({description, version}) => {
                    return (
                        <div className={styles.descContainer}>
                            <h3 className={typeTextColors}>{version}</h3>
                            <p className={styles.desc}>{description}</p>
                        </div>
                    )
                })}
                <h2 className={typeTextColors}>Base Stats</h2>
                <Radar data={graphData} options={graphOptions} />
            </div>
        </div>
    );
};

export default Pokemon;

Pokemon.getInitialProps = async ({ query }) => {
    const { name } = query;

    const pokemonData = await apiCall([`pokemon/${name}`])
        .then((response) => {
            return response.length && response[0];
        })
        .then(async (data) => {
            // Add the description of the pokemon to the object
            const descriptArr = await standaloneCall(data.species.url)
                .then(({ flavor_text_entries }) => {
                    console.log(flavor_text_entries);
                    const englishText = flavor_text_entries
                        .filter(({language}) => language.name === 'en')
                        .map(({flavor_text, version}) => ({
                            description: cleanDescription(flavor_text),
                            version: cleanNames(version.name)
                        }))
                    return englishText;
                })
                .catch((err) => console.error("Unable to get description: ", err));

            // data.description = descript;
            data.descriptionArray = descriptArr;

            return data;
        })
        .catch((err) => console.error("There was an error:", err));

    if (!pokemonData) {
        return {
            notFound: true,
        };
    }

    return {
        query,
        pokemonData,
    };
};

// Mapping used for Graph Data
const hexToRgb = (color, alpha) => {
    const typeColors = {
        rock: "b69e31",
        ghost: "70559b",
        steel: "b7b9d0",
        water: "6493eb",
        grass: "74cb48",
        psychic: "fb5584",
        ice: "9ad6df",
        dark: "75574c",
        fairy: "e69eac",
        normal: "aaa67f",
        fighting: "c12239",
        flying: "a891ec",
        poison: "a43e9e",
        ground: "dec16b",
        bug: "a7b723",
        fire: "f57d31",
        electric: "f9cf30",
        dragon: "7037ff",
    };
	const hexKey = Object.keys(typeColors).find(key => key === color);
	const hexValue = typeColors[hexKey];
	const [r, g, b] = hexValue.match(/\w\w/g).map(x => parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
}