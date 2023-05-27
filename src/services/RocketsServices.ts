import Rocket from "../database/models/RocketsModels";
import LaunchService from "./LaunchServices";

class RocketsService {

  public async getAllRockets(): Promise<Rocket[]> {
    const rockets = await Rocket.findAll();
    return rockets;
  }

  public async getRocketById(id: string): Promise<Rocket | null> {
    const rocket = await Rocket.findByPk(id);
    return rocket;
  }

  public async getRocketByName(name: string): Promise<Rocket | null> {
    const rocket = await Rocket.findOne({ where: { name } });
    return rocket;
  }

  public async getRocketByCompany(company: string): Promise<Rocket[] | null> {
    const rocket = await Rocket.findAll({ where: { company } });
    return rocket;
  }

  public async getRocketByCountry(country: string): Promise<Rocket[] | null> {
    const rocket = await Rocket.findAll({ where: { country } });
    return rocket;
  }

  public async getRocketPending(): Promise<Rocket | null> {
    const launchService = new LaunchService()
    const launch = await launchService.getRocketPending()
    if (!launch) {
      return null
  }
    const rocket = await Rocket.findByPk(launch.rocket)
    return rocket
  }

  public  async getRocketsSuccess (): Promise<Rocket[] | null> {
    const launchService = new LaunchService()
    const launch = await launchService.getRocketsSuccess()
    if (!launch || launch.length === 0) {
      return null
  }
    const rockets = await Rocket.findAll({
      where: {
        id: launch.map(launch => launch.rocket)
      }
    })
    return rockets
}

public async getRocketsFailure (): Promise<Rocket[] | null> {
  const launchService = new LaunchService()
  const launch = await launchService.getRocketsFailure()
  if (!launch) {
    return null
  }
  const rockets = await Rocket.findAll({
    where: {
      id: launch.map(launch => launch.rocket)
    }})
    return rockets
  }


}
export default RocketsService;
