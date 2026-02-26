"use client";

import { PokemonListItem } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type IProps = {
  pokemon: PokemonListItem;
};

const PokemonItem: FC<IProps> = ({ pokemon }) => {
  const id = pokemon.pokedexId;

  return (
    <li>
      <Link href={`/pokemons/${id}`}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={pokemon.name}
          width={96}
          height={96}
        />
      </Link>
    </li>
  );
};

export default PokemonItem;
