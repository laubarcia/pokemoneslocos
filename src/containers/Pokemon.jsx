import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../assets/styles/Pokemon.module.css";
import { Link } from "react-router-dom";

function Pokemon() {

  const location = useLocation();
  const [unpokemon, setUnpokemon] = useState([]);

  const traemePokemon = async () => {
    const pedazos = location.pathname.split("/");
    const url = "https://pokeapi.co/api/v2/pokemon/" + pedazos[2] + "/";
    const res = await axios.get(url);
    setUnpokemon(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    traemePokemon();
  }, []);

  const listadoFavoritos = [];
  const handleClick = () => {
    console.log(unpokemon.name);
    let modelo = { nombre: unpokemon.name, favorito: true };
    listadoFavoritos.push(modelo);
    console.log(listadoFavoritos);
    localStorage.setItem("PokeFavoritos", JSON.stringify(listadoFavoritos));
    guardarPokeFavorito(unpokemon.name);
  };
 

  return (
    <>
      <section className={styles.contenedorDetallePokemon}>
        <h1 className={styles.titleUnpokemon}>{unpokemon?.name}</h1>
        <img src={unpokemon?.sprites?.other?.["official-artwork"]?.front_default} className={styles.imgDetalle} />
        <div className={styles.infoAdicional}>
          <div>
            <h5>Especie:</h5>
            <p>{unpokemon?.types?.[0]?.type?.name}</p>
          </div>
          <div>
            <h5>Habilidades:</h5>
            <ul className={styles.pokemonesListado}>
              <li>{unpokemon?.abilities?.[0]?.ability?.name}</li>
              <li>{unpokemon?.abilities?.[1]?.ability?.name}</li>
            </ul>
          </div>
        </div>
        <Link to={"/favoritos"} className={styles.btnFavear} onClick={handleClick}>
          Agregar a favoritos
        </Link>
      </section>
    </>
  );
}

export default Pokemon;
