import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div id="home_page">
      <h1>Bienvenue sur le pokédex !</h1>
      <Link href={"/pokemons"}>
        <button>Accéder à la liste de pokémons</button>
      </Link>
    </div>
  );
};

export default Home;
