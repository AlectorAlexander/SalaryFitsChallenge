import { Router } from 'express';
import PayloadsController from '../controllers/PayloadsController';

const payloadsRoutes = Router();
const payloadsController = new PayloadsController();

payloadsRoutes.get('/', payloadsController.getAllPayloads);

payloadsRoutes.get('/:id', payloadsController.getPayloadById);

export default payloadsRoutes;
