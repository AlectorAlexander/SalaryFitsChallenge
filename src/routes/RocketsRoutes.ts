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
rocketsRoutes.get('/launches/pending', rocketController.getNextRocketPending);

// Rotas personalizadas
rocketsRoutes.get('/search/active', rocketController.getActiveRocket);
rocketsRoutes.get('/search/falcon', rocketController.getFalconRockets);
rocketsRoutes.get('/search/high-success-rate', rocketController.getHighSuccessRateRockets);
rocketsRoutes.get('/search/images', rocketController.getRocketsWithImages);
rocketsRoutes.get('/search/date/:date', rocketController.getRocketsLaunchedAfterDate);

export default rocketsRoutes;
