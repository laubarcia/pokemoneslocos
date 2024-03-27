import { Link } from "react-router-dom";
import styles from '../assets/styles/Head.module.css'

function Head() {
  return (
    <>
      <header>
        <nav>
          <Link to={"/"} className={styles.rutas}>Home</Link> <Link to={"/pokemones"} className={styles.rutas}>Pokemones</Link> <Link to={"/favoritos"} className={styles.rutas}>Favoritos</Link>
        </nav>
      </header>
    </>
  );
}

export default Head;
