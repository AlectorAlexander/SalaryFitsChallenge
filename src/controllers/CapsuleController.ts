import { Request, Response } from 'express';
import CapsulesService from '../services/CapsulesServices';


class CapsulesController {
  constructor(private capsulesService = new CapsulesService()) {};
 
  public getAllCapsules = async (req: Request, res: Response): Promise<void> => {
    try {
      const capsules = await this.capsulesService.getAllCapsules();
      res.json(capsules);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch capsules' });
    }
  }


  public getCapsuleById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const capsule = await this.capsulesService.getCapsuleById(id);
    if (capsule) {
        res.json(capsule);
      } else {
        res.status(404).json({ error: 'Capsule not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch capsule' });
    }
  };

  public getCapsuleByTimesUsed = async (req: Request, res: Response): Promise<void> => {
    try {
      const capsule = await this.capsulesService.getCapsulesByTimesUsed();
      if (capsule) {
        res.json(capsule);
      } else {
        res.status(404).json({ error: 'Capsule not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch capsule' });
    }
  }
  


}

export default CapsulesController;
