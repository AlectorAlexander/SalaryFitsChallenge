import { Router } from 'express';
import RocketsController from '../controllers/RocketsController';

const rocketsRoutes = Router();
const rocketController = new RocketsController();

rocketsRoutes.get('/', rocketController.getAllRockets);

rocketsRoutes.get('/:id', rocketController.getRocketById);

export default rocketsRoutes;
