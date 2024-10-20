import InstitucionModel from "../../models/InstitucionModel.js"
import { findAllInstituciones, findInstitucionById, createInstitucionService, updateInstitucionService, deleteInstitucionService } from "../../services/InstitucionesService.js"


export const getAllInstituciones = async (req, res) => {
    try {
        const instituciones = await findAllInstituciones(); 
        return res.status(200).json(instituciones); 
    } catch (error) {
        if (error.message === "No se encontraron instituciones") {
            return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: "Error del servidor" });
    }
};

export const getInstitucionById = async (req, res) => {
    try {
        const institucion = await findInstitucionById(req.params.id);
        return res.status(200).json(institucion);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createInstitucion = async (req, res) => {
    try {
        const result = await createInstitucionService(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateInstitucion = async (req, res) => {
    try {
        const result = await updateInstitucionService(req.params.id, req.body);
        return res.status(201).json(result);
    } catch (error) {
       
        return res.status(500).json({ message: error.message })
    }
}

export const deleteInstitucion = async (req, res) => {
    try {
        const result = await deleteInstitucionService(req.params.id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



