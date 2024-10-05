import db from "../database/db.js"
import { DataTypes } from "sequelize"
import RolesModel from "./RolModel.js";
import PermisoModel from "./PermisosModel.js";

const RolPermisoModel = db.define('roles_permisos', {
    id_role: {
        type: DataTypes.INTEGER,
        references: {
            model: RolesModel,
            key: 'id'
        }
    },
    id_permiso: {
        type: DataTypes.INTEGER,
        references: {
            model: PermisoModel,
            key: 'id'
        }
    }
});

export default RolPermisoModel

