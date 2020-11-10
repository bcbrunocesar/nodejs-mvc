import { Request, Response } from 'express';
import { AbstractBaseGetController } from '../base-controller/AbstractBaseGetController';
import { PokemonRepository } from '../../repositories/pokemon/PokemonRepository';
import { Routes } from '../../routes/Routes';

class GetAllPokemonsController extends AbstractBaseGetController {

  constructor() {
    super(Routes.pokemon.getAll);
  }

  protected execute(req: Request, res: Response): any {
    const pokemonRepository = new PokemonRepository();

    pokemonRepository.getAll().then((data) => {
      return res.json(data);
    }).catch((error) => {
      console.error(`GetAllPokemonsController [error]: ${error}`);
      return res.status(500).json('whops');
    })
  }
}

export { GetAllPokemonsController };
