"use client";

import { PokemonListItem, PokebuildType } from "@/types/pokemon";
import { NextPage } from "next";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import PokemonItem from "./pokemonItem";
import "./page.scss";

const Pokemons: NextPage = () => {
  const [pokemonsList, setPokemonsList] = useState<PokemonListItem[]>([]);
  const [types, setTypes] = useState<PokebuildType[]>([]);
  const [selectedGen, setSelectedGen] = useState<number | "">("");
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    async function loadData() {
      try {
        const [pokemonRes, typesRes] = await Promise.all([
          fetch("https://tyradex.app/api/v1/pokemon"),
          fetch("https://tyradex.app/api/v1/types"),
        ]);

        const pokemonData: PokemonListItem[] = await pokemonRes.json();
        const typesData: PokebuildType[] = await typesRes.json();

        setPokemonsList(pokemonData);
        setTypes(typesData);
      } catch (error) {
        console.error("Erreur chargement API :", error);
      }
    }

    loadData();
  }, []);

  const handleGenChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelectedGen(value === "" ? "" : Number(value));
    },
    []
  );

  const filteredList = useMemo(() => {
    return pokemonsList.filter((pokemon) => {
      if (selectedGen && pokemon.generation !== selectedGen) {
        return false;
      }

      if (
        selectedType &&
        !pokemon.types?.some((type) => type.name === selectedType)
      ) {
        return false;
      }

      return true;
    });
  }, [pokemonsList, selectedGen, selectedType]);

  const availableGenerations = useMemo(() => {
    return [...new Set(pokemonsList.map((p) => p.generation))].sort(
      (a, b) => a - b
    );
  }, [pokemonsList]);

  console.log(types)

  return (
    <div id="pokemons_list_page">
      <div id="filters">
        <select value={selectedGen} onChange={handleGenChange}>
          <option value="">Toutes les générations</option>
          {availableGenerations.map((gen) => (
            <option key={gen} value={gen}>
              Génération {gen}
            </option>
          ))}
        </select>

        <div id="type-buttons">
          <button
            className={selectedType === "" ? "active" : ""}
            onClick={() => setSelectedType("")}
          >
            Tous
          </button>

          {types.map((type) => (
            <button
              key={type.id}
              className={selectedType === type.name.fr ? "active" : ""}
              onClick={() => setSelectedType(type.name.fr)}
              title={type.name.fr}
            >
              <Image
                src={type.sprites}
                alt={type.name.fr}
                width={24}
                height={24}
                unoptimized
              />
            </button>
          ))}
        </div>

        <span id="count">{filteredList.length} pokémon</span>
      </div>

      <ul id="pokemons_list">
        {filteredList.map((pokemon) => (
          <PokemonItem key={pokemon.pokedex_id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;