import { Request, Response } from 'express';
import { AbstractBaseGetController } from '../base-controller/AbstractBaseGetController';
import { PokemonRepository } from '../../repositories/pokemon/PokemonRepository';
import { Routes } from '../../routes/Routes';
import PokemonRequestMapper from '../../mappers/pokemon/PokemonRequestMapper';

class SearchPokemonController extends AbstractBaseGetController {

  constructor() {
    super(Routes.pokemon.getById);
  }

  protected execute(req: Request, res: Response): any {
    const searchPokemonRequest = PokemonRequestMapper.from(req);
    const pokemonRepository = new PokemonRepository();

    pokemonRepository.getById(searchPokemonRequest.id).then((data) => {
      return res.json(data);
    }).catch((error) => {
      console.error(`SearchPokemonController [error]: ${error}`);
      return res.status(500).json('whoops');
    });
  }
}

export { SearchPokemonController };
