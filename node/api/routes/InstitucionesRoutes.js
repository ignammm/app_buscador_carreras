import express from 'express'
import {createInstitucion, deleteInstitucion, getAllInstituciones, getInstitucionById, updateInstitucion} from '../controllers/InstitucionesController.js'
import { validationInstitucion } from '../middlewares/validations/validationInstitucion.js'


const router = express.Router()

router.get('/', getAllInstituciones)
router.get('/:id', getInstitucionById)
router.post('/', validationInstitucion(), createInstitucion)
router.put('/:id', validationInstitucion(), updateInstitucion)
router.delete('/:id', deleteInstitucion)
export default router