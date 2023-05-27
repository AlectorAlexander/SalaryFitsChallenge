import { Router } from 'express';
import LaunchController from '../controllers/LaunchController';

const launchRoutes = Router();
const launchController = new LaunchController();


launchRoutes.get('/', launchController.getAllLaunchs);

launchRoutes.get('/:id', launchController.getLaunchById);

launchRoutes.get('/success', launchController.getLaunchsSuccess);

launchRoutes.get('/failure', launchController.getLaunchsFailure);

/* launchRoutes.get('/:id/comments', launchController.getCommentsByLaunchId); */


export default launchRoutes;
