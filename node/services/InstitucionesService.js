import InstitucionModel from "../models/InstitucionModel.js";

export const findAllInstituciones = async () => {
    try {
        const instituciones = await InstitucionModel.findAll({
            where: {
                estado: 1
            }
        });
        if (!instituciones || instituciones.length === 0) {
            throw new Error("No se encontraron instituciones");
        }
        return instituciones;
    } catch (error) {
        throw new Error(error.message);
    }
};


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
        await InstitucionModel.update(body, { where: { id: id } });
        
        const institucionActualizada = await InstitucionModel.findByPk(id);

        if (!institucionActualizada) {
            throw new Error('Institución no devuelta correctamente luego de la actualizacion');
        }

        return {

            message: 'La institucion se actualizó correctamente',
            institucion: institucionActualizada
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


