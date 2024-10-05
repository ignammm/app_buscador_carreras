import db from "../database/db.js";
import { DataTypes } from "sequelize";

const PermisoModel = db.define('Permisos', {
    nombre: { type: DataTypes.STRING(50) },
    descripcion: { type: DataTypes.STRING(255) }
});

export default PermisoModel