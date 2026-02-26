export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  id: number;
  pokedexId: number;
  apiGeneration: number;
  apiTypes: {
    name: string;
    image: string;
  }[];
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  types: PokemonType[];
  stats: {
      HP: number;
      attack: number;
      defense: number;
      special_attack: number;
      special_defense: number;
      speed: number;
    },
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
  other: {
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokebuildType {
  id: number;
  name: string;
  image: string;
  englishName: string;
}
