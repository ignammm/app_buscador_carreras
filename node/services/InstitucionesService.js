import { json } from "sequelize";
import InstitucionModel from "../models/InstitucionModel.js";

export const findAllInstituciones = async () => {
    try {
        const instituciones = await InstitucionModel.findAll();
        if (!instituciones) {
            throw new Error("Una institucion no respeta el formato");
        }
        return instituciones;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const findInstitucionById = async (id) => {
    try {
        const institucion = await InstitucionModel.findByPk(id);
        if (!institucion) {
            throw new Error("Institución no encontrada");
        }
        return institucion;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const createInstitucionService = async (body) => {
    try {
        await InstitucionModel.create(body);
        return {
            message: 'La institución se creó correctamente'
        };
    } catch (error) {
        throw new Error( error.message = 'No se pudo crear la institucion correctamente');
    }
}


export const updateInstitucionService = async (id, body) => {
    try {
        await InstitucionModel.update(body, {where: {id: id} });
        return {
            message: 'La institucion se actualizó correctamente'
        };
    } catch (error) {
        throw new Error ( error.message = 'Algo salio mal al actualizar la institucion');
    }
}


export const deleteInstitucionService = async (id) => {
    try {
        const institucion = await InstitucionModel.findByPk(id);
        institucion.estado = 0;
        await institucion.save();
        return {
            message: 'Institución deshabilitada correctamente'
        };
    } catch (error) {
        throw new Error( error.message = 'No se pudo deshabilitar la institucion' );
    }
};


