import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import "./homepage.scss"

const Home: NextPage = () => {
  return (
    <div id="home_page">
      <h1>Bienvenue sur le pokédex !</h1>
      <Image src="/Who'sThatPokemon.png" alt="Who's that pokemon" width={320} height={320} />
      <Link href={"/pokemons"}>
        <button>Accéder à la liste de pokémons</button>
      </Link>
    </div>
  );
};

export default Home;
