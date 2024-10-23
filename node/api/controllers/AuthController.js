import dotenv from 'dotenv';
dotenv.config();
import { validationResult } from 'express-validator';
import { loginAdminService, registerAdminService, validateTokenService, logoutService } from '../../services/AuthServices.js';
import { createAdminRoleServices } from '../../services/AuthorizationServices.js';

export const registerAdmin = async (req, res) => {
    const { nombre, clave, id_institucion } = req.body;

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const result = await registerAdminService(nombre, clave, id_institucion);

        if (result.error) {
            return res.status(400).json({ msg: result.msg });
        }

        res.json({ token: result.token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error en el servidor');
    }
};

export const loginAdmin = async (req, res) => {
    const { nombre, clave } = req.body;

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const result = await loginAdminService(nombre, clave);

        if (result.error) {
            return res.status(400).json({ msg: result.msg });
        }

        res.json({ token: result.token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error en el servidor');
    }
};


export const validateToken = (req, res) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, autorización denegada' });
    }

    try {
        const result = validateTokenService(token);

        if (!result.isValid) {
            return res.status(401).json({ msg: 'Token no válido', isValid: false });
        }

        return res.json({ isValid: true, decoded: result.decoded });
    } catch (error) {
        console.error('Error en validateTokenController:', error.message);
        return res.status(500).json({ msg: 'Error en el servidor', isValid: false });
    }
};

export const logout = async (req, res) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'No hay token para cerrar sesion' });
    }

    try {
        const result = await logoutService(token); 
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};