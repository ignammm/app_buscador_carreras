import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js'; 

class AdministradorRoleModel extends Model {}

AdministradorRoleModel.init({
    id_admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'AdministradoresRoles',
    timestamps: false, 
    tableName: 'administradores_roles', 
    underscored: true, 
});


AdministradorRoleModel.removeAttribute('id'); 

export default AdministradorRoleModel;
