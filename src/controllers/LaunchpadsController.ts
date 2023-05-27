import { Request, Response } from 'express';
import LaunchpadService from '../services/LaunchpadsService';


class LaunchpadsController {
  constructor(private launchpadService = new LaunchpadService()) {};
 
  public getAllLaunchpads = async (req: Request, res: Response): Promise<void> => {
    try {
      const launchpads = await this.launchpadService.getAllLaunchpads();
      res.json(launchpads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch launchpads' });
    }
  }


  public getLaunchpadById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const launchpad = await this.launchpadService.getLaunchpadById(id);
    if (launchpad) {
        res.json(launchpad);
      } else {
        res.status(404).json({ error: 'Launchpad not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch launchpad' });
    }
  };
}

export default LaunchpadsController;
