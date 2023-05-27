import { Request, Response } from 'express';
import RocketsService from '../services/RocketsServices';


class RocketsController {
  constructor(private rocketsService = new RocketsService()) {};
 
  public getAllRockets = async (req: Request, res: Response): Promise<void> => {
    try {
      const rockets = await this.rocketsService.getAllRockets();
      res.json(rockets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch rockets' });
    }
  }


  public getRocketById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const rocket = await this.rocketsService.getRocketById(id);
    console.log(rocket);
    if (rocket) {
        res.json(rocket);
      } else {
        res.status(404).json({ error: 'rocket not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch rocket' });
    }
  };
}

export default RocketsController;
