import PokemonResponse from "../../responses/pokemon/PokemonResponse";

class GetAllPokemonsRepository {
  public execute(): Promise<PokemonResponse[]> {
    const pokemons: PokemonResponse[] = [{
      name: 'pikachu',
      type: 'eletric',
      power: 83
    },
    {
      name: 'charizard',
      type: 'fire',
      power: 91
    },
    {
      name: 'turtoide',
      type: 'water',
      power: 82
    },
    {
      name: 'charmander',
      type: 'fire',
      power: 83
    }];

    return new Promise<PokemonResponse[]>((resolve) => {
      resolve(pokemons);
    });
  }
}

export { GetAllPokemonsRepository }
