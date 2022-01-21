import Link from "next/link";
import Select from "react-select";

import SearchIcon from "./svg/SearchIcon";

import styles from "../styles/SearchForm.module.scss";

const selectItem = (props) => {
	const { innerProps, innerRef, value, label } = props;
    // console.log(props);
    return (
        <div ref={innerRef} {...innerProps} className={styles.search__link}>
            <Link href={`/pokemon/${value}`}>{label}</Link>
        </div>
    );
};

const dropdownIcon = ({innerProps, innerRef}) => {
	return (
		<div ref={innerRef} {...innerProps} className={styles.search__icon}>
			<SearchIcon />
		</div>
	)
}

const customStyles = {
	menuList: () => ({ 
		padding: 0,
	}),
}

const SearchForm = ({ pokemonNames }) => {
    // const [query, setQuery] = useState("");
    // const [filterList, setFilterList] = useState([]);

    // const predictiveSearch = (value) => {
    //     setQuery(value);

    //     const queryItem = value.toLowerCase();
    //     if (queryItem.length > 2) setFilterList(pokemonNames.filter((el) => el.includes(queryItem)));
    //     else setFilterList([]);
    // };

    // const searchEvent = (e) => {
    //     e.preventDefault();
    // 	   router.push(`/search?query=${query}`);
    // };
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
            {/* <fieldset className={styles.fieldset}>
                <label className='sr-only' htmlFor='search'>
                    Search
                </label>
                <input
                    className={styles.search__input}
                    type='search'
                    name='search'
                    id='search'
                    placeholder='Search'
                    autoComplete='off'
                    value={query}
                    // onChange={(e) => setQuery(e.target.value)}
                    onChange={(e) => predictiveSearch(e.target.value)}
                />
                <button className={styles.search__submit} type='submit'>
					<SearchIcon />
                </button>
            </fieldset>
            {filterList && <DropdownList items={filterList} />} */}
        </form>
    );
};

export default SearchForm;
