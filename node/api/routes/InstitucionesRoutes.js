import express from 'express'
import {createInstitucion, deleteInstitucion, getAllInstituciones, getInstitucionById, updateInstitucion} from '../controllers/InstitucionesController.js'

const router = express.Router()

router.get('/', getAllInstituciones)
router.get('/:id', getInstitucionById)
router.post('/', createInstitucion)
router.put('/:id', updateInstitucion)
router.delete('/:id', deleteInstitucion)
export default router