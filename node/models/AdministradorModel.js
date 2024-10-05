import { DataTypes } from "sequelize";
import db from "../database/db.js";

const AdministradorModel = db.define('Administradores', {
    nombre: { type: DataTypes.STRING(45) },
    correo: { type: DataTypes.STRING(60) },
    clave: { type: DataTypes.STRING(45) },
    estado: { type: DataTypes.INTEGER },
    id_institucion: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Institucion',
            key: 'id'
        }
    }
});

export default AdministradorModel