import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Pokemones from "../containers/Pokemones";
import Favoritos from "../containers/Favoritos";
import Layout from "../components/Layout";
import Pokemon from "../containers/Pokemon";

function App() {
  return (
    <>
      <div className="contenedor">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/pokemones" element={<Pokemones />}></Route>
              <Route path="/pokemones/*" element={<Pokemon />}></Route>
              <Route path="/favoritos" element={<Favoritos />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
