import styles from "../styles/Pokemon.module.scss";

const Stat = ({statName, statValue}) => {
    return (
        <div className={styles.pokemon__stat}>
            <div className={styles.pokemon__stat__head}>
                <h3>{statName}</h3>
            </div>
            <div className={styles.pokemon__stat__number}>
                <div className={styles.number}>{statValue}</div>
                <div className={styles.bar}>
                    <div className={styles.stat}  style={{ width: `${statValue}%` }}></div>
                </div>					
            </div>
        </div>
    )
}

export default Stat;