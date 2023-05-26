import Cores from "../database/models/CoresModels";

class CoresService {

  public async getAllCores(): Promise<Cores[]> {
    const cores = await Cores.findAll();
    return cores;
  }

  public async getCoreById(id: string): Promise<Cores | null> {
    const core = await Cores.findByPk(id);
    return core;
  }

}

export default CoresService;
