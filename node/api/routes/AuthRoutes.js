import express from 'express';
import { check } from 'express-validator';
import { registerAdmin, loginAdmin, validateToken, logout } from '../controllers/AuthController.js';

const router = express.Router();

router.post(
    '/register',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('clave', 'La clave debe tener al menos 6 caracteres').isLength({ min: 6 }),
    ],
    registerAdmin
);

router.post(
    '/login',
    [
        check('nombre', 'Ingrese un nombre válido').not().isEmpty(),
        check('clave', 'La claves obligatorio').exists(),
    ],
    loginAdmin
);

router.post('/validate-token', validateToken);
router.post('/logout', logout);

export default router;
