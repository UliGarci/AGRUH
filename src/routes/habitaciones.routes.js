import { Router } from "express";
import {methods as habitacionescontroller} from './../controllers/habitaciones.controller';

const router = Router();

router.get('/', habitacionescontroller.gethabitaciones);
router.get('/:id', habitacionescontroller.gethabitacion);
router.delete('/:id', habitacionescontroller.deletehabitacion);
router.post('/',habitacionescontroller.addhabitacion);
router.put('/:id',habitacionescontroller.updatehabitacion);
export default router;