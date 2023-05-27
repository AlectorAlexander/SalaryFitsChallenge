import { Router } from 'express';
import PayloadsController from '../controllers/PayloadsController';

const payloadsRoutes = Router();
const payloadsController = new PayloadsController();

payloadsRoutes.get('/', payloadsController.getAllPayloads);


payloadsRoutes.get('/name/:name', payloadsController.getPayloadByName);

payloadsRoutes.get('/type/:type', payloadsController.getPayloadByType);


payloadsRoutes.get('/:id', payloadsController.getPayloadById);

export default payloadsRoutes;
