import { Router } from "express";
import { methods as empleadoscontroller } from "../controllers/empleados.controller";

const router = Router();

router.get('/',empleadoscontroller.getempleados);
router.get('/:id',empleadoscontroller.getempleados);
router.post('/',empleadoscontroller.addempleado);
router.delete('/:id',empleadoscontroller.deleteempleado);
router.put('/:id',empleadoscontroller.updateempleado);

export default router;