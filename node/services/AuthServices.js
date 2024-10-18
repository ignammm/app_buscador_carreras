import bcrypt from 'bcryptjs';
import jwtr from 'jwtr';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import { validationResult } from 'express-validator';
import AdministradorModel from '../models/AdministradorModel.js'
// import redisClient from '../config/redisConfig.js';

export const registerAdminService = async (nombre, clave) => {
    try {
        let admin = await AdministradorModel.findOne({ where: { nombre } });

        if (admin) {
            return { error: true, msg: 'El admin ya existe' };
        }

        admin = new AdministradorModel({
            nombre: nombre,
            clave: clave
        });

        await admin.save();

        const payload = {
            admin: {
                id: admin.id,
            },
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { error: false, token };
    } catch (error) {
        console.error('Error en registerAdminService:', error.message);
        return { error: true, msg: 'Error en el servidor' };
    }
};

export const loginAdminService = async (nombre, clave) => {
    try {
        const admin = await AdministradorModel.findOne({ where: { nombre } });

        if (!admin) {
            return { error: true, msg: 'Admin no existe' };
        }

        const isMatch = clave === admin.clave

        if (!isMatch) {
            return { error: true, msg: 'Clave incorrecta' };
        }

        const payload = {
            admin: {
                id: admin.id,
            },
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { error: false, token };
    } catch (error) {
        console.error('Error en loginAdminService:', error.message);
        return { error: true, msg: 'Error en el servidor' };
    }
};

export const validateTokenService = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        return { isValid: true, decoded };
    } catch (error) {
        console.error('Error en validateTokenService:', error.message);

        return { isValid: false };
    }
};


export const logoutService = async (token) => {
    try {
        // await redisClient.set(token, 'revoked', 'EX', 3600);
        // await jwtr.destroy(token);
        return { success: true, msg: 'Sesión cerrada exitosamente.' };
    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
        throw new Error('Error al intentar cerrar sesión.');
    }
};
