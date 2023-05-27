import { Router } from 'express';
import RocketsController from '../controllers/RocketsController';

const rocketsRoutes = Router();
const rocketController = new RocketsController();

rocketsRoutes.get('/spaceSearch', rocketController.getRocketPending)
rocketsRoutes.get('/', rocketController.getAllRockets);

rocketsRoutes.get('/:id', rocketController.getRocketById);

rocketsRoutes.get('/name/:name', rocketController.getRocketByName);

rocketsRoutes.get('/company/:company', rocketController.getRocketByCompany);


export default rocketsRoutes;
