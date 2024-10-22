import { 
    findAllCarreras, 
    findCarreras,
    findCarreraById, 
    createCarreraService, 
    updateCarreraService, 
    deleteCarreraService 
} from "../../services/CarrerasService.js";

export const getAllCarreras = async (req, res) => {
    try {
        const carreras = await findAllCarreras(req.params.id_institucion); 
        return res.status(200).json(carreras); 
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCarreras = async (req, res) => {
    try {
        const carreras = await findCarreras();
        return res.status(200).json(carreras);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCarreraById = async (req, res) => {
    try {
        const carrera = await findCarreraById(req.params.id);
        return res.status(200).json(carrera);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createCarrera = async (req, res) => {
    try {
        const result = await createCarreraService(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateCarrera = async (req, res) => {
    try {
        const result = await updateCarreraService(req.params.id, req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteCarrera = async (req, res) => {
    try {
        const result = await deleteCarreraService(req.params.id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
