import { Request, Response } from 'express';
import { AbstractBaseGetController } from '../base-controller/AbstractBaseGetController';
import { GetAllPokemonsRepository } from '../../repositories/pokemon/GetAllPokemonsRepository';

class GetAllPokemonsController extends AbstractBaseGetController {

  constructor() {
    super('/pokemons');
  }

  protected execute(req: Request, res: Response): any {
    const getAllPokemonsRepository = new GetAllPokemonsRepository();

    getAllPokemonsRepository.execute().then((data) => {
      return res.json(data);
    }).catch((error) => {
      console.error(`GetAllPokemonsController [error]: ${error}`);
      return res.status(500).json('whops');
    })
  }
}

export { GetAllPokemonsController };
