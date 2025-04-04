import { Sequelize } from 'sequelize';

// Configuração do Sequelize (SQLite como exemplo)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Arquivo do banco de dados
    logging: false
});

  // Exporta a instância do Sequelize
export default sequelize;