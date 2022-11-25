import { Router } from "express";
import { methods as spacontroller } from "../controllers/spa.controller";

const router = Router();

router.get('/',spacontroller.getservices);
router.get('/:id',spacontroller.getservice);
router.post('/',spacontroller.addservice);
router.put('/:id',spacontroller.updateservice);
router.delete('/:id',spacontroller.deleteservice);
export default router;