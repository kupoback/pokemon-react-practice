import Link from "next/link";
import Select from "react-select";

import SearchIcon from "./svg/SearchIcon";

import styles from "../styles/SearchForm.module.scss";

/**
 * The dropdown option item
 * 
 * @param {*} props 
 * @returns 
 */
const selectItem = (props) => {
	const { innerProps, innerRef, value, label } = props;
    return (
        <div ref={innerRef} {...innerProps} className={styles.search__link}>
            <Link href={`/pokemon/${value}`}>{label}</Link>
        </div>
    );
};

/**
 * Replaces the search idicator icon
 * 
 * @param {*} param0 
 * @returns 
 */
const dropdownIcon = ({innerProps, innerRef}) => {
	return (
		<div ref={innerRef} {...innerProps} className={styles.search__icon}>
			<SearchIcon />
		</div>
	)
}

const SearchForm = ({ pokemonNames }) => {

    return (
        <form className={styles.search__form} action='' onSubmit={(e) => searchEvent(e)}>
            <Select
				instanceId="select-pokemon"
				placeholder="Serach pokemon"
                className={styles.search__select}
                options={pokemonNames}
				isClearable={true}
                components={{ Option: selectItem, DropdownIndicator: dropdownIcon }}
				
            />
        </form>
    );
};

export default SearchForm;
