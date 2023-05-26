import Launch from "../database/models/LaunchsModels";

class LaunchService {
  public async createLaunch(data: any): Promise<Launch> {
    const launch = await Launch.create(data);
    return launch;
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

  public async deleteLaunch(id: string): Promise<boolean> {
    const deletedRowsCount = await Launch.destroy({
      where: { id },
    });
    return deletedRowsCount > 0;
  }
}

export default LaunchService;
