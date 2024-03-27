import { Link } from "react-router-dom";
import styles from '../assets/styles/Item.module.css'

function Item(props) {
    const {name, url} = props

    let urlCortada = url.split("/")
    
    return ( <>
        <li className={styles.itemsPokelista}><Link to={"/pokemones/"+urlCortada[6]} className={styles.nombrePokemon} nombre={name}><h3>{name}</h3></Link></li>
    </> );
}

export default Item;