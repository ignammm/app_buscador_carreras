import { Sequelize } from "sequelize";

const db = new Sequelize('buscador_carreras_app', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});

export default db