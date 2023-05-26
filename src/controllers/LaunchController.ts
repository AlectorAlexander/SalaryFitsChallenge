import { Request, Response } from 'express';
import LaunchService from '../services/LaunchServices';

class LaunchController {
  private launchService: LaunchService;

  constructor() {
    this.launchService = new LaunchService();
  }

  public createLaunch = async (req: Request, res: Response): Promise<void> => {
    try {
      const launchData = req.body;
      const launch = await this.launchService.createLaunch(launchData);
      res.status(201).json(launch);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create launch' });
    }
  };

  public getLaunchById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const launch = await this.launchService.getLaunchById(id);
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
      const updatedLaunch = await this.launchService.updateLaunch(id, updatedData);
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
      const deleted = await this.launchService.deleteLaunch(id);
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
