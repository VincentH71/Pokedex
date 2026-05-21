export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface TranslatedName {
  fr: string;
  en: string;
  jp: string;
}

export interface PokemonListItem {
  pokedex_id: number;
  generation: number;
  types: {
    name: string;
    image: string;
  }[];
  name: TranslatedName;
  sprites: {
    regular: string;
    shiny: string | null;
    gmax: string | null;
  };
}

export interface Pokemon {
  pokedex_id: number;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  height: number;
  weight: number;
  sprites: {
    regular: string;
    shiny: string | null;
    gmax: string | null;
  };
  types: {
    name: string;
    image: string;
  }[];
  stats: {
      HP: number;
      attack: number;
      defense: number;
      special_attack: number;
      special_defense: number;
      speed: number;
    },
}

export interface PokebuildType {
  id: number;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: string;
}
