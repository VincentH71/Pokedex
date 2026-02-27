import { NextPage } from "next";
import Link from "next/link";
import "./global.scss";

const Home: NextPage = () => {
  return (
    <div id="home_page">
      <h1>Bienvenue sur le pokédex !</h1>
      <img src="/Who'sThatPokemon.png" alt="Who's that pokemon" />
      <Link href={"/pokemons"}>
        <button>Accéder à la liste de pokémons</button>
      </Link>
    </div>
  );
};

export default Home;
