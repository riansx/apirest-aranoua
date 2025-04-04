import express from 'express';
import {
    listarPessoas
} from '../controllers/PessoaController.js';

const router = express.Router();
// Rotas para pessoas
router.get('/', listarPessoas);
// http://localhost:3000/pessoas
export default router;