import { Request } from 'express';
import SearchPokemonRequest from "../../requests/pokemon/SearchPokemonRequest";

export default class PokemonRequestMapper {
  public static from({ params }: Request): SearchPokemonRequest {
    return {
      id: Number(params.id)
    }
  }
}
