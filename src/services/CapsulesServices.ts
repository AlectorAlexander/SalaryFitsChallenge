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

  public async getCapsulesByTimesUsed(): Promise<Capsule[] | null> {
  try {
    const capsules = await Capsule.findAll({
      order: [['reuse_count', 'DESC']],
    });

    return capsules;
  } catch (error) {
    console.error('Error in getCapsulesByTimesUsed:', error);
    return null;
  }
}


}

export default CapsulesService;
