import db from "../database/db.js";
import { DataTypes } from "sequelize";

const InstitucionModel = db.define('Instituciones', {
    id: {type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING(60), unique: true },
    correo: { type: DataTypes.STRING(60), unique: true },
    direccion: { type: DataTypes.STRING(60), unique: true },
    cue: { type: DataTypes.INTEGER, unique: true },
    ubicacion_lat: { type: DataTypes.DECIMAL(22, 19) },
    ubicacion_long: { type: DataTypes.DECIMAL(22, 19) },
    telefono: { type: DataTypes.STRING(15), unique: true },
    pagina: { type: DataTypes.STRING(45) },
    estado: { type: DataTypes.INTEGER },
});

export default InstitucionModel