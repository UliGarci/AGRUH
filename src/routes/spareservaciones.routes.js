import { Router } from "express";
import { methods as spareservacionescontroller} from "../controllers/spareservaciones.controller";

const router = Router();

router.get('/',spareservacionescontroller.getSpaReservaciones);
router.get('/:id',spareservacionescontroller.getSpaReservacion);
router.post('/',spareservacionescontroller.addSpaReservacion);
router.put('/:id',spareservacionescontroller.updateSpaReservacion);
router.delete('/:id',spareservacionescontroller.deleteSpaReservacion);

export default router;