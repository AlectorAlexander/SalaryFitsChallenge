import { Router } from 'express';
import CapsulesController from '../controllers/CapsuleController';

const capsulesRoutes = Router();
const capsuleController = new CapsulesController();

capsulesRoutes.get('/', capsuleController.getAllCapsules);

capsulesRoutes.get('/pickup', capsuleController.getCapsuleByTimesUsed);

capsulesRoutes.get('/:id', capsuleController.getCapsuleById);


export default capsulesRoutes;
