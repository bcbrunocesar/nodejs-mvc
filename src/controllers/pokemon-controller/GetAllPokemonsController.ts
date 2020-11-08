import { Request, Response } from 'express';
import { AbstractBaseGetController } from '../base-controller/AbstractBaseGetController';

class GetAllPokemonsController extends AbstractBaseGetController {

  constructor() {
    super('/pokemons');
  }

  protected execute(req: Request, res: Response): any { 
    const pokemons = ['pikachu', 'charizard', 'bulbasaur', 'turtoide', 'charmander'];
    return res.json({ pokemons });
  }
}

export { GetAllPokemonsController };
