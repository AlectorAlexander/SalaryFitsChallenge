import { Request, Response } from 'express';
import PayloadsService from '../services/PayloadsServices';


class PayloadsController {
  constructor(private payloadsService = new PayloadsService()) {};
 
  public getAllPayloads = async (req: Request, res: Response): Promise<void> => {
    try {
      const payloads = await this.payloadsService.getAllPayloads();
      res.json(payloads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch payloads' });
    }
  }


  public getPayloadById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const payload = await this.payloadsService.getPayloadById(id);
    if (payload) {
        res.json(payload);
      } else {
        res.status(404).json({ error: 'Payload not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch payload' });
    }
  };
}

export default PayloadsController;
