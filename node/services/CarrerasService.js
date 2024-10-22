import CarreraModel from "../models/CarreraModel.js";

export const findAllCarreras = async (id_inst) => {
    try {
        const carreras = await CarreraModel.findAll({
            where: {
                id_institucion: parseInt(id_inst),
                estado: 1
            }
        }); 
        if (!carreras || carreras.length === 0) {
            throw new Error("No se encontraron carreras");
        }
        return carreras;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const findCarreras = async () => {
    try {
        const carreras = await CarreraModel.findAll();
        if (!carreras || carreras.length === 0) {
            throw new Error("No se encontraron carreras");
        }
        return carreras;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const findCarreraById = async (id) => {
    try {
        const carrera = await CarreraModel.findByPk(id);
        if (!carrera) {
            throw new Error("Carrera no encontrada");
        }
        return carrera;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createCarreraService = async (body) => {
    try {
        await CarreraModel.create(body);
        return {
            message: 'La carrera se creó correctamente'
        };
    } catch (error) {
        throw new Error( error.message = 'No se pudo crear la carrera correctamente');
    }
};

export const updateCarreraService = async (id, body) => {
    try {
        await CarreraModel.update(body, { where: { id: id } });
        const carreraActualizada = await CarreraModel.findByPk(id);
        return {
            message: 'La carrera se actualizó correctamente',
            carrera: carreraActualizada
        };
    } catch (error) {
        throw new Error( error.message = 'Algo salió mal al actualizar la carrera');
    }
};

export const deleteCarreraService = async (id) => {
    try {
        const carrera = await CarreraModel.findByPk(id);
        carrera.estado = 0;
        await carrera.save();
        return {
            message: 'Carrera deshabilitada correctamente'
        };
    } catch (error) {
        throw new Error( error.message = 'No se pudo deshabilitar la carrera' );
    }
};
