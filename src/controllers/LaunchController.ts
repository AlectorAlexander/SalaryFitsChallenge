import { Request, Response } from 'express';
import LaunchService from '../services/LaunchServices';

class LaunchController {
  private launchServices: LaunchService;

  constructor() {
    this.launchServices = new LaunchService();
  }

  public async getAllLaunchs(req: Request, res: Response): Promise<void> {
    try {
      const launches = await this.launchServices.getAllLaunchs();
      res.json(launches);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public createLaunch = async (req: Request, res: Response): Promise<void> => {
    try {
      const launchData = req.body;
      const launch = await this.launchServices.createLaunch(launchData);
      res.status(201).json(launch);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create launch' });
    }
  };

  public getLaunchById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const launch = await this.launchServices.getLaunchById(id);
      if (launch) {
        res.json(launch);
      } else {
        res.status(404).json({ error: 'Launch not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get launch' });
    }
  };

  public updateLaunch = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedLaunch = await this.launchServices.updateLaunch(id, updatedData);
      if (updatedLaunch) {
        res.json(updatedLaunch);
      } else {
        res.status(404).json({ error: 'Launch not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update launch' });
    }
  };

  public deleteLaunch = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const deleted = await this.launchServices.deleteLaunch(id);
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Launch not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete launch' });
    }
  };
}

export default LaunchController;
