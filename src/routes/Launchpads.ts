import { Router } from 'express';
import LaunchpadsController from '../controllers/LaunchpadsController';

const launchpadsRoutes = Router();
const launchpadsController = new LaunchpadsController();

launchpadsRoutes.get('/', launchpadsController.getAllLaunchpads);

launchpadsRoutes.get('/:id', launchpadsController.getLaunchpadById);

export default launchpadsRoutes;
