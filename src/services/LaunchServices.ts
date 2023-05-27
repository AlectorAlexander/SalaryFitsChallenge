import Launch from "../database/models/LaunchsModels";

class LaunchService {

  public async getAllLaunchs(): Promise<Launch[]> {
    const launches = await Launch.findAll();
    return launches;
  }

  public async getLaunchById(id: string): Promise<Launch | null> {
    const launch = await Launch.findByPk(id);
    return launch;
  }

  public async updateLaunch(id: string, data: any): Promise<Launch | null> {
    await Launch.update(data, {
      where: { id },
    });
    const updatedLaunch = await Launch.findByPk(id);
    return updatedLaunch;
  }

  public async getRocketPending (): Promise<Launch | null> {
    const launchs = await Launch.findAll({
      where: {
        upcoming: true,
      },
      order: [['dateUnix', 'ASC']],
      limit: 1,
      })
      return launchs[0];
}
}

export default LaunchService;
