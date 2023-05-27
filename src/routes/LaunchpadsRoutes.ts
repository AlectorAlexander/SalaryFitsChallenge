import { Router } from 'express';
import LaunchpadsController from '../controllers/LaunchpadsController';

const launchpadsRoutes = Router();
const launchpadsController = new LaunchpadsController();

launchpadsRoutes.get('/', launchpadsController.getAllLaunchpads);


launchpadsRoutes.get('/name/:name', launchpadsController.getLaunchpadByName);

launchpadsRoutes.get('/locality/:locality', launchpadsController.getLaunchpadByLocality);

launchpadsRoutes.get('/region/:region', launchpadsController.getLaunchpadByRegion);

launchpadsRoutes.get('/:id', launchpadsController.getLaunchpadById);

export default launchpadsRoutes;
