import { Application}  from './Application';
import * as controllers from './controllers';

const application = new Application([
  new controllers.GetAllPokemonsController(),
  new controllers.SearchPokemonController()
], 3333);

application.listen();
