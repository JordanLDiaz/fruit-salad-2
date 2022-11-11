import { FruitsController, PlayersController } from "./Controllers/PlayersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  playersController = new PlayersController();
  fruitsController = new FruitsController();
}

window["app"] = new App();
