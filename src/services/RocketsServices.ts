import Rocket from "../database/models/RocketsModels";

class RocketsService {

  public async getAllRockets(): Promise<Rocket[]> {
    const rockets = await Rocket.findAll();
    return rockets;
  }

  public async getRocketById(id: string): Promise<Rocket | null> {
    const rocket = await Rocket.findByPk(id);
    return rocket;
  }

}

export default RocketsService;
