import { Router } from "express";
import {methods as usuarioscontroller} from './../controllers/usuarios.controller';

const router = Router();

router.get('/',usuarioscontroller.getusuarios);
router.get('/:id',usuarioscontroller.getusuario);
router.delete('/:id',usuarioscontroller.deleteusuario);
router.post('/',usuarioscontroller.addusuario);
router.put('/:id',usuarioscontroller.updateusuario);
export default router;
