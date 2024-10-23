import { isColString } from "sequelize/lib/utils";
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


