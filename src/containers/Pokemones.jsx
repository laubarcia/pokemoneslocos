import { useEffect, useState } from "react";
import Item from "../components/Item";
import axios from "axios";
import styles from "../assets/styles/Pokemones.module.css";

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const traemePokemones = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    setPokemones(res.data.results);
  };
  useEffect(() => {
    traemePokemones();
  }, []);
  return (
    <>
      {" "}
      <section className={styles.contenedorListado}>
        <h1 className={styles.listadoTitle}>Listado de Pokemones</h1>
        <div className={styles.contenedorNombres}></div>
        <ul className={styles.pokemonesListado}>
          {pokemones.map((pokemon) => (
            <Item {...pokemon} key={pokemon.name}></Item>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Pokemones;
