import { NextFunction, Request, Response } from 'express';
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
   public getNextRocketPending = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rocket = await this.rocketsService.getRocketPending();
      if (rocket) {
      res.status(200).json(rocket);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete pendente encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message })
    }
    
  }

  public getRocketByName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name } = req.params;
      const newName = name.replace(/_/g, ' ')

      const rocket = await this.rocketsService.getRocketByName(newName);
      if (rocket) {
        res.status(200).json(rocket);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

  public getRocketByCompany = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { company } = req.params;
      
      const newCompany = company.includes('_') ? company.replace(/_/g, ' ') : company.toUpperCase() as string 
      

      const rocket = await this.rocketsService.getRocketByCompany(newCompany);
      if (rocket) {
        res.status(200).json(rocket);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

  public getRocketByCountry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { country } = req.params;
      const newCountry = country.includes('_') ? country.replace(/_/g, ' ').toUpperCase() : country.toUpperCase() as string
      
      const rocket = await this.rocketsService.getRocketByCountry(newCountry);
      if (rocket) {
        res.status(200).json(rocket);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
        }
    }
    catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }

  }

  public getRocketsSuccess = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rockets = await this.rocketsService.getRocketsSuccess();
      if (rockets) {
        res.status(200).json(rockets);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

  public getRocketsFailure = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rockets = await this.rocketsService.getRocketsFailure();
      if (rockets) {
        res.status(200).json(rockets);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

  public getActiveRocket =  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rocket = await this.rocketsService.getActiveRocket();
      if (rocket) {
        res.status(200).json(rocket);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

  public getFalconRockets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rockets = await this.rocketsService.getFalconRockets();
      if (rockets) {
        res.status(200).json(rockets);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

  public getHighSuccessRateRockets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rockets = await this.rocketsService.getHighSuccessRateRockets();
      if (rockets) {
        res.status(200).json(rockets);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

  public getRocketsWithImages = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rockets = await this.rocketsService.getRocketsWithImages();
      if (rockets) {
        res.status(200).json(rockets);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

  public getRocketsLaunchedAfterDate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { date } = req.params;
      console.log(date);
      const rockets = await this.rocketsService.getRocketsLaunchedAfterDate(date);
      if (rockets) {
        res.status(200).json(rockets);
      } else {
        const status  = 404;
        const message = 'Nenhum foguete encontrado';
        next({ status, message });
      }
    } catch (error) {
      console.error(error);
      const message = 'Erro interno do servidor';
      return next({ message });
    }
  }

}
  


export default RocketsController;
