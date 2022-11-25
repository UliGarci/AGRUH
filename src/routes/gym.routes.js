import { Router } from "express";
import { methods as gymcontroller } from "../controllers/gym.controller";

const router = Router();
router.get('/',gymcontroller.getservices);
router.get('/:id',gymcontroller.getservice);
router.post('/',gymcontroller.addservice);
router.put('/:id',gymcontroller.updateservice);
router.delete('/:id',gymcontroller.deleteservice);
export default router;