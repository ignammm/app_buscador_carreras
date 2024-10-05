import db from "../database/db.js";
import { DataTypes } from "sequelize";

const RolesModel = db.define('Roles', {
    nombre: { type: DataTypes.STRING(50) },
    descripcion: { type: DataTypes.STRING(255) }
});

export default RolesModel