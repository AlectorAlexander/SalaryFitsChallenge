import { NextFunction, Request, Response } from 'express';
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

  public getLaunchpadByName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name } = req.params;
      const launchpad = await this.launchpadService.getLaunchpadByName(name);
    if (launchpad) {
        res.status(200).json(launchpad);
      } else {
        const status = 404;
        const message = `Launchpad with name ${name} not found`;
        next({status, message})
      }
    } catch (error) {
      next(error);
    }
  }

  public getLaunchpadByLocality = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { locality } = req.params;
      const launchpad = await this.launchpadService.getLaunchpadByLocality(locality);
    if (launchpad) {
        res.status(200).json(launchpad);
      } else {
        const status = 404;
        const message = `Launchpad with locality ${locality} not found`;
        next({status, message})
      }
    } catch (error) {
      next(error);
    }
  }

  public getLaunchpadByRegion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { region } = req.params;
      const launchpad = await this.launchpadService.getLaunchpadByRegion(region);
    if (launchpad) {
        res.status(200).json(launchpad);
      } else {
        const status = 404;
        const message = `Launchpad with region ${region} not found`;
        next({status, message})
      }
    } catch (error) {
      next(error);
    }
  }
}

export default LaunchpadsController;
