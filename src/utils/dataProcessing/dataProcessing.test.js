import {
  uncapitalizeFirstLetter,
  filterPokemonProperties,
  filterPokemons,
} from "./dataProcessing.js";

describe("Given a uncapitalizeFirstLetter function", () => {
  describe("When it is called", () => {
    test("Then it should uncapitalize the first letter of a string", () => {
      expect(uncapitalizeFirstLetter("Pokemon")).toBe("pokemon");
    });

    test("Then it should handle an empty string", () => {
      expect(uncapitalizeFirstLetter("")).toBe("");
    });
  });
});

describe("Given a filterPokemonProperties function", () => {
  describe("When it is called with a pokemon", () => {
    test("Then it should filter and format Pokemon properties", () => {
      const pokemon = {
        id: 25,
        name: "pikachu",
        height: 4,
        types: [{ type: { name: "electric" } }],
        abilities: [
          { ability: { name: "static" } },
          { ability: { name: "lightning-rod" } },
        ],
      };

      const filteredPokemon = filterPokemonProperties(pokemon);

      expect(filteredPokemon).toEqual({
        id: 25,
        name: "Pikachu",
        img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
        height: 4,
        types: ["electric"],
        abilities: ["static", "lightning-rod"],
        isFavourite: false,
      });
    });
  });

  describe("When it is called with a pokemon that have some properties with null", () => {
    test("Then it should filter and format Pokemon properties to null", () => {
      const pokemon = {
        id: 25,
        name: null,
        height: null,
        types: null,
        abilities: null,
      };

      const filteredPokemon = filterPokemonProperties(pokemon);

      expect(filteredPokemon).toEqual({
        id: 25,
        name: null,
        img: "https://img.pokemondb.net/sprites/black-white/anim/normal/null.gif",
        height: null,
        types: [],
        abilities: [],
        isFavourite: false,
      });
    });
  });
});

describe("Given a filterPokemons function", () => {
  describe("When it is called", () => {
    test("Then it should filter and format an array of Pokemons", () => {
      const pokemons = [
        {
          id: 25,
          name: "pikachu",
          height: 4,
          types: [{ type: { name: "electric" } }],
          abilities: [
            { ability: { name: "static" } },
            { ability: { name: "lightning-rod" } },
          ],
        },
      ];

      const filteredPokemons = filterPokemons(pokemons);

      expect(filteredPokemons).toEqual([
        {
          id: 25,
          name: "Pikachu",
          img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
          height: 4,
          types: ["electric"],
          abilities: ["static", "lightning-rod"],
          isFavourite: false,
        },
      ]);
    });
  });
});
