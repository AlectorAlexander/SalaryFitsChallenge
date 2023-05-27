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

  public getLaunchsSuccess = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const launchs = await this.launchService.getRocketsSuccess();
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      } 
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    } catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    }
  }

  public getLaunchsFailure = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const launchs = await this.launchService.getRocketsFailure();
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      } 
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    } catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    }
  }

  //get Launchs By CapsuleID
  public getLaunchsByCapsuleId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { capsule_id } = req.params;
      const launchs = await this.launchService.getLaunchsByCapsuleId([capsule_id]);
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      } 
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    } catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    }
  }
  //get Launchs By Payload ID
  public getLaunchsByPayloadId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { payload_id } = req.params;
      const launchs = await this.launchService.getLaunchsByPayloadId([payload_id]);
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      } 
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    }
    catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    }
  }

  //get Launchs By PayloadID
   public getLaunchsByPayloadtId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { payload_id } = req.params;
      const launchs = await this.launchService.getLaunchsByPayloadId([payload_id]);
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      } 
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    }
    catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    }
   }

  //get Launchs By Launchpad ID
   public getLaunchsByLaunchpadId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { launchpad_id } = req.params;
      const launchs = await this.launchService.getLaunchsByLaunchpadId([launchpad_id]);
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      } 
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    }
    catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    }
  }

  //get Launchs By Launchpad Name
   public getLaunchsByLaunchpadName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { launchpad_name } = req.params;
      const launchpadName = launchpad_name.replace(/_/g, ' ').toUpperCase() as string 
      const launchs = await this.launchService.getLaunchsByLaunchpadName(launchpadName);
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      }
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    }
    catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    
    }
  }

  //get Launchs By Core Id
   public getLaunchsByCoreId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { core_id } = req.params;
      const launchs = await this.launchService.getLaunchesByCoreId(core_id);
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      } 
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    }
    catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    }
   }

   // get Launchs by time period
   public getLaunchsByTimePeriod = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { start_date, end_date } = req.body;
      const launchs = await this.launchService.getLaunchesByTimePeriod(start_date, end_date);
      if (launchs && launchs.length > 0) {
        res.status(200).json(launchs);
      } 
      else {
        const status = 404;
        const message = 'Launches not found';
        next({ status, message });
      }
    }
    catch (error) {
      const message = 'Failed to fetch launches';
      next({ message, error });
    }
  }

  
}





export default LaunchController;
