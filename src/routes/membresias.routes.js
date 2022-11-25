import { Router } from "express";
import { methods as membresiascontroller } from "../controllers/membresias.controller";

const router = Router();

router.get('/',membresiascontroller.getmembresias);
router.get('/:id',membresiascontroller.getmembresia);
router.post('/',membresiascontroller.addmembresia);
router.put('/:id',membresiascontroller.updatemembresia);
router.delete('/:id',membresiascontroller.deletemembresia);

export default router;