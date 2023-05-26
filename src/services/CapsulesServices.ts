import Capsule from "../database/models/CapsulesModels";

class CapsulesService {

  public async getAllCapsules(): Promise<Capsule[]> {
    const capsules = await Capsule.findAll();
    return capsules;
  }

  public async getCapsuleById(id: string): Promise<Capsule | null> {
    const capsule = await Capsule.findByPk(id);
    return capsule;
  }

}

export default CapsulesService;
