import {Router} from 'express';

import {createNuevoProducto, getProductos, getProductoById, deleteProductoById, getTotalProductos, updateProductoById} from '../controllers/producto.controller';

const router = Router();

router.get('/producto', getProductos);
router.get('/producto/count', getTotalProductos);
router.post('/producto', createNuevoProducto);
router.get('/producto/:id', getProductoById);
router.delete('/producto/:id', deleteProductoById);
router.put('/producto/:id', updateProductoById);


export default router;