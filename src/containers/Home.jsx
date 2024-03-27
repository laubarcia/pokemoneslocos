import { Link } from 'react-router-dom';
import styles from '../assets/styles/Home.module.css'
import Pokemones from './Pokemones';

function Home() {
    const loguearse = () => {
        // acá hay que ir al listado de pokemones
        alert("entraste")
    }
    return ( <>
        <section className={styles.contenedorHome}>
        <h1 className={styles.titleHome}>Pokedex</h1>
        <img src='https://e0.pxfuel.com/wallpapers/788/452/desktop-wallpaper-pokemon-png-transparent-pokemon-png-chibi-pikachu.jpg' className={styles.imagenHome}/>
        <div className={styles.contieneInput}>
        <Link to={'/pokemones'} className={styles.btnEntrar} id='entrar'>Entrar</Link>
        </div>
        
        </section>
    </> );
}

export default Home;