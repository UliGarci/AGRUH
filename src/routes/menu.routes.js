import { Router } from "express";
import { methods as menucontroller } from "../controllers/menu.controller";

const router = Router();

router.get('/',menucontroller.getalimentos);
router.get('/:id',menucontroller.getalimento);
router.post('/',menucontroller.addalimento);
router.delete('/:id',menucontroller.deletealimento);
router.put('/:id',menucontroller.updatealimento);

export default router;