import AdministradorRoleModel from "../models/AdministradorRoleModel.js";

export const createAdminRoleServices = async (id_admin) => {
    try {
        
        const result = await AdministradorRoleModel.create({
            id_admin: id_admin,
            id_rol: 2
        });
        
        return {
            message: "Admin registrado exitosamente"
        };
    } catch (error) {

        console.error("Error al registrar el rol del admin:", error);
        throw new Error("No pudimos registrar el rol del admin: " + error.message);
    }
};

export const getAdminRole = async (id_admin) => {
    try {
        const result = await AdministradorRoleModel.findOne({
            where: {
                id_admin: id_admin
            }
        })
        
        return {
            role: result.dataValues.id_rol
        }
    } catch (error) {
        throw new Error("Error al obtener el rol de un usuario"+error.message)
    }
};


