import { Request, Response } from 'express';
import CoresService from '../services/CoresServices';


class CoresController {
  constructor(private coresService = new CoresService()) {};
 
  public getAllCores = async (req: Request, res: Response): Promise<void> => {
    try {
      const cores = await this.coresService.getAllCores();
      res.json(cores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch cores' });
    }
  }


  public getCoreById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const core = await this.coresService.getCoreById(id);
    if (core) {
        res.json(core);
      } else {
        res.status(404).json({ error: 'Core not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch core' });
    }
  };
}

export default CoresController;
