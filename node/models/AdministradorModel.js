import { DataTypes } from "sequelize";
import db from "../database/db.js";

const AdministradorModel = db.define('Administradores', {
    nombre: { type: DataTypes.STRING(45) },
    clave: { type: DataTypes.STRING(45) },
    estado: { type: DataTypes.INTEGER },
    id_institucion: { type: DataTypes.INTEGER, }
});

export default AdministradorModel