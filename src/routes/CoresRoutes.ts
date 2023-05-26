import { Router } from 'express';
import CoresController from '../controllers/CoresController';

const coresRoutes = Router();
const coresController = new CoresController();

coresRoutes.get('/', coresController.getAllCores);

coresRoutes.get('/:id', coresController.getCoreById);

export default coresRoutes;
