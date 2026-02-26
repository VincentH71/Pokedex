"use client";

import { PokebuildType, Pokemon } from "@/types/pokemon";
import { NextPage } from "next";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./page.scss";

const PokemonSingle: NextPage = () => {
  const { pokemonId } = useParams();
  const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [types, setTypes] = useState<PokebuildType[]>([]);

  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data: Pokemon) => {
        setPokemon(data);
      });

    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => response.json())
      .then((data: PokebuildType[]) => {
        setTypes(data);
      });
  }, [pokemonId]);

  if (!pokemon) return <p>chargement...</p>;

  function getTypeImage(englishName: string): string {
    return types.find((t) => t.englishName === englishName)?.image || "";
  }

  return (
    <div id="pokemon_single_page">
      <h1>{pokemon.name}</h1>

      <div id="types">
        {pokemon.types?.map((type) => (
          <div id="typecontainer" key={type.type.name}>
            {getTypeImage(type.type.name) && (
              <Image
                width={30}
                height={30}
                src={getTypeImage(type.type.name)}
                alt={type.type.name}
                unoptimized
              />
            )}
            <h2>{type.type.name}</h2>
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
          src={pokemon.sprite}
          alt={pokemon.name}
          width={200}
          height={200}
        />
      </div>
      <button onClick={() => router.back()} className="back-button">
        Retour
      </button>
    </div>
  );
};

export default PokemonSingle;
