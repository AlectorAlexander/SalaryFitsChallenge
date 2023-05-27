import Launchpads from "../database/models/LaunchpadsModels";

class LaunchpadService {

  public async getAllLaunchpads(): Promise<Launchpads[]> {
    const launchpads = await Launchpads.findAll();
    return launchpads;
  }

  public async getLaunchpadById(id: string): Promise<Launchpads | null> {
    const launchpad = await Launchpads.findByPk(id);
    return launchpad;
  }

}

export default LaunchpadService;
