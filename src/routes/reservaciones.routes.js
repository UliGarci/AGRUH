import { Router } from "express";
import { methods as reservacionescontroller } from "../controllers/reservaciones.controller";
const router = Router();

router.get('/',reservacionescontroller.getreservaciones);
router.get('/:id',reservacionescontroller.getreservacion);
router.post('/',reservacionescontroller.addreservacion);
router.put('/:id',reservacionescontroller.updatereservacion);
router.delete('/:id',reservacionescontroller.deletereservacion);

export default router;