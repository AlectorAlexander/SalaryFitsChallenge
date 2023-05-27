import { Router } from 'express';
import RocketsController from '../controllers/RocketsController';

const rocketsRoutes = Router();
const rocketController = new RocketsController();

// Rotas relacionadas aos foguetes
rocketsRoutes.get('/', rocketController.getAllRockets);
rocketsRoutes.get('/:id', rocketController.getRocketById);
rocketsRoutes.get('/name/:name', rocketController.getRocketByName);
rocketsRoutes.get('/company/:company', rocketController.getRocketByCompany);
rocketsRoutes.get('/country/:country', rocketController.getRocketByCountry);

// Rotas relacionadas aos lançamentos
rocketsRoutes.get('/launches/success', rocketController.getRocketsSuccess);
rocketsRoutes.get('/launches/failed', rocketController.getRocketsFailure);
rocketsRoutes.get('/launches/pending', rocketController.getRocketPending);

export default rocketsRoutes;
