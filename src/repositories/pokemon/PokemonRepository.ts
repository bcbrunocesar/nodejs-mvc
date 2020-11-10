import PokemonResponse from "../../responses/pokemon/PokemonResponse";
import CreatePokemonRequest from "../../requests/pokemon/CreatePokemonRequest";
import UpdatePokemonRequest from "../../requests/pokemon/UpdatePokemonRequest";
import * as fakeDb from '../../fakeDb/db.json';

class PokemonRepository {
  public getAll(): Promise<PokemonResponse[]> {
    const pokemons: PokemonResponse[] = fakeDb.pokemons;

    return new Promise<PokemonResponse[]>((resolve) => {
      resolve(pokemons);
    });
  }

  public getById(id: number): Promise<PokemonResponse> {
    const pokemons: PokemonResponse[] = fakeDb.pokemons;
    const selectedPokemon = pokemons.find(p => p.id === id);

    return new Promise<PokemonResponse>((resolve) => {
      resolve(selectedPokemon);
    });
  }

  public delete(id: number): void {
    const selectedPokemon = this.getById(id);
    // perform delete
  }

  public create(pokemon: CreatePokemonRequest): void {
    // perform insert
  }

  public update(pokemon: UpdatePokemonRequest): void {
    // perform update
  }
}

export { PokemonRepository }
