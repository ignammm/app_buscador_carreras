import db from "../database/db.js";
import { DataTypes } from "sequelize";

const CarrerasModel = db.define('Carreras', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING(40) },
    tipo: { type: DataTypes.STRING(60) },
    descripcion: { type: DataTypes.STRING(100) },
    plan_estudio: { type: DataTypes.STRING(100) },
    modalidad: { type: DataTypes.ENUM('presencial', 'virtual', 'mixta') },
    cupo: { type: DataTypes.STRING(45) },
    fecha_inscripcion: { type: DataTypes.DATE },
    duracion_anio: { type: DataTypes.INTEGER },
    duracion_meses: { type: DataTypes.INTEGER },
    duracion_semanas: { type: DataTypes.INTEGER },
    observacion: { type: DataTypes.STRING(45) },
    estado: { type: DataTypes.INTEGER },
    prioridad: { type: DataTypes.INTEGER },
    id_institucion: { type: DataTypes.INTEGER }
});

export default CarrerasModel
