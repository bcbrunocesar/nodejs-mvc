import { Request, Response } from 'express';
import { AbstractBaseGetController } from '../base-controller/AbstractBaseGetController';

class SearchPokemonController extends AbstractBaseGetController{

  constructor() {
    super('/pokemons')
  }

  protected execute(req: Request, res: Response): any {
    const pokemon = 'charizard';
    return res.json({ pokemon });
  }
}

export { SearchPokemonController };
