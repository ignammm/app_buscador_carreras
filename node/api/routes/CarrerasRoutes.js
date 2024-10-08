import express from 'express';
import { 
    createCarrera, 
    deleteCarrera, 
    getAllCarreras, 
    getCarreraById, 
    updateCarrera 
} from '../controllers/CarrerasController.js';

const router = express.Router();

router.get('/:id_institucion', getAllCarreras);          
router.get('/:id', getCarreraById);      
router.post('/', createCarrera);          
router.put('/:id', updateCarrera);       
router.delete('/:id', deleteCarrera);     

export default router;
