import {getConnection} from '../database/database'
import { methods as gymreservacionescontroller } from '../controllers/gymreservaciones.controller'
import { Router } from 'express'

const router = Router();

router.get('/',gymreservacionescontroller.getGymReservaciones);
router.get('/:id',gymreservacionescontroller.getGymReservacion);
router.post('/',gymreservacionescontroller.addGymReservacion);
router.put('/:id',gymreservacionescontroller.updateGymReservacion);
router.delete('/:id',gymreservacionescontroller.deleteGymReservacion);

export default router;