import { Op } from "sequelize";
import Payload from "../database/models/PayloadsModels";

class PayloadsService {

  public async getAllPayloads(): Promise<Payload[]> {
    const payloads = await Payload.findAll();
    return payloads;
  }

  public async getPayloadById(id: string): Promise<Payload | null> {
    const payload = await Payload.findByPk(id);
    return payload;
  }

  public async getPayloadByName(name: string): Promise<Payload[] | null> {
    try {
      const payloads = await Payload.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
  
      return payloads;
    } catch (error) {
      console.error('Error in getLaunchpadByName:', error);
      return null;
    }
  }

  public async getPayloadByType(type: string): Promise<Payload[] | null> {
    try {
      const payloads = await Payload.findAll({
        where: {
          type: {
            [Op.like]: `%${type}%`,
          },
        },
      });
  
      return payloads;
    } catch (error) {
      console.error('Error in getLaunchpadByName:', error);
      return null;
    }
  }
  
  
 

}

export default PayloadsService;
