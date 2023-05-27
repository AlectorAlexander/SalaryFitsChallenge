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

}

export default PayloadsService;
