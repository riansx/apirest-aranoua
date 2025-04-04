// src/models/Pessoa.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js'; // Importa a configuração do Sequelize

// Definição do modelo Pessoa
class Pessoa extends Model {}

Pessoa.init(
    {
      // Definição dos atributos
      nome: {
        type: DataTypes.STRING,
        allowNull: false, // Campo obrigatório
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false // Campo obrigatório
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, // Campo obrigatório
        unique: true, // Garante que o email seja único
        validate: {
          isEmail: true, // Validação para formato de email
        },
      },
    },
    {
      sequelize, // Conexão do Sequelize
      modelName: 'Pessoa', // Nome do modelo
      tableName: 'pessoas', // Nome da tabela no banco de dados
      timestamps: true // Adiciona campos createdAt e updatedAt
    }
  );
  
  export default Pessoa;
