"use client";

import { Pokemon } from "@/types/pokemon";
import { NextPage } from "next";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./page.scss";

const PokemonSingle: NextPage = () => {
  const { pokemonId } = useParams();
  const router = useRouter();

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetch(`https://tyradex.app/api/v1/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data: Pokemon) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error("Erreur API :", error);
      });
  }, [pokemonId]);

  if (!pokemon) return <p>Chargement...</p>;

  return (
    <div id="pokemon_single_page">
      <h1>{pokemon.name.fr}</h1>

      <div id="types">
        {pokemon.types?.map((type) => (
          <div id="typecontainer" key={type.name}>
            <Image
              width={30}
              height={30}
              src={type.image}
              alt={type.name}
              unoptimized
            />

            <h2>{type.name}</h2>
          </div>
        ))}
      </div>

      <div>
        <h3>Stats</h3>

        <ul>
          {pokemon.stats &&
            Object.entries(pokemon.stats).map(([name, value]) => (
              <li key={name}>
                {name} : {value}
              </li>
            ))}
        </ul>
      </div>

      <div id="container">
        <Image
          src={pokemon.sprites.regular}
          alt={pokemon.name.fr}
          width={200}
          height={200}
          unoptimized
        />
      </div>

      <button onClick={() => router.back()} className="back-button">
        Retour
      </button>
    </div>
  );
};

export default PokemonSingle;