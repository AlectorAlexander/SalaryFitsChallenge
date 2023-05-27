import { Router } from 'express';
import LaunchController from '../controllers/LaunchController';

const launchRoutes = Router();
const launchController = new LaunchController();

// Rota para obter todos os lançamentos
launchRoutes.get('/', launchController.getAllLaunchs);

// Rota para obter lançamento por ID
launchRoutes.get('/:id', launchController.getLaunchById);

// Rotas relacionadas a lançamentos bem-sucedidos
launchRoutes.get('/flightconference/success', launchController.getLaunchsSuccess);

// Rotas relacionadas a lançamentos com falhas
launchRoutes.get('/flightconference/failure', launchController.getLaunchsFailure);

// Rotas relacionadas a cápsulas
launchRoutes.get('/capsule/:id', launchController.getLaunchsByCapsuleId);

// Rotas relacionadas a cargas úteis
launchRoutes.get('/payload/:id', launchController.getLaunchsByPayloadId);

// Rotas relacionadas a foguetes
launchRoutes.get('/rocket/:id', launchController.getLaunchesByRocketId);

// Rotas relacionadas a locais de lançamento
launchRoutes.get('/launchpad/:id', launchController.getLaunchsByLaunchpadId);
launchRoutes.get('/launchpad/name/:name', launchController.getLaunchsByLaunchpadName);

// Rotas relacionadas a núcleos
launchRoutes.get('/core/:id', launchController.getLaunchsByCoreId);

// Rotas relacionadas a períodos de tempo
launchRoutes.post('/time', launchController.getLaunchsByTimePeriod);

export default launchRoutes;
