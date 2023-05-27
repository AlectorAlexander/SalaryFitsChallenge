import { NextFunction, Request, Response } from 'express';
import LaunchService from '../services/LaunchServices';


class LaunchController {
  constructor(private launchService = new LaunchService()) {};
 
  public getAllLaunchs = async (req: Request, res: Response): Promise<void> => {
    try {
      const launches = await this.launchService.getAllLaunchs();
      res.json(launches);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch launches' });
    }
  }


  public getLaunchById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const launch = await this.launchService.getLaunchById(id);
    console.log(launch);
    if (launch) {
        res.json(launch);
      } else {
        res.status(404).json({ error: 'Launch not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch launch' });
    }
  };


}

export default LaunchController;
