import express from 'express';
import { 
    createCarrera, 
    deleteCarrera, 
    getAllCarreras, 
    getCarreraById, 
    updateCarrera 
} from '../controllers/CarrerasController.js';
import { validationCarrera } from '../middlewares/validations/validationCarrera.js';

const router = express.Router();

router.get('/:id_institucion', getAllCarreras);          
router.get('/:id/carrera', getCarreraById);      
router.post('/', validationCarrera(), createCarrera);          
router.put('/:id', validationCarrera(), updateCarrera);       
router.delete('/:id', deleteCarrera);     

export default router;
