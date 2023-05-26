import { Router } from 'express';
import LaunchController from '../controllers/LaunchController';

const launchRoutes = Router();
const launchController = new LaunchController();

launchRoutes.post('/', launchController.createLaunch);

launchRoutes.get('/launches', launchController.getAllLaunchs);

launchRoutes.get('/:id', launchController.getLaunchById);

launchRoutes.put('/:id', launchController.updateLaunch);

launchRoutes.delete('/:id', launchController.deleteLaunch);

export default launchRoutes;
