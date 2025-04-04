import express from 'express';
import pessoaRoutes from './routes/PessoaRoutes.js';
import sequelize from './config/database.js';

const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api/pessoas', pessoaRoutes);

// Inicializar banco de dados
sequelize
// .sync({ force: true})

.sync()
.then(() => console.log('Banco de dados sincronizado.'))
.catch((error) => console.error('Erro ao sincronizar badno de dados:'))

export default app;