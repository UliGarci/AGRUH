import {Router} from 'express';
import { methods as tiendacontroller } from '../controllers/tienda.controller';

const router = Router();

router.get('/',tiendacontroller.getproductos);
router.get('/:id',tiendacontroller.getproducto);
router.post('/',tiendacontroller.addproducto);
router.delete('/:id',tiendacontroller.deleteproducto);
router.put('/:id',tiendacontroller.updateproducto);

export default router;