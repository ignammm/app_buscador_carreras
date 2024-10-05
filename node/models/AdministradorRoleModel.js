import db from "../database/db";
import { DataTypes } from "sequelize";
import AdministradorModel from "./AdministradorModel.js";
import RolesModel from "./RolModel.js";

const AdministradorRoleModel = db.define('administradores_roles', {
    id_administrador: {
        type: DataTypes.INTEGER,
        references: {
            model: AdministradorModel,
            key: 'id'
        }
    },
    id_role: {
        type: DataTypes.INTEGER,
        references: {
            model: RolesModel,
            key: 'id'
        }
    }
});

export default AdministradorModel