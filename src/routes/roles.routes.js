import { Router } from "express";
import { methods as rolescontroller} from "../controllers/roles.controller";

const router = Router();

router.get('/', rolescontroller.getroles);
router.get('/:id',rolescontroller.getrol);
router.delete('/:id',rolescontroller.deleterol);
router.post('/',rolescontroller.addrol);
router.put('/:id',rolescontroller.updaterol);

export default router;