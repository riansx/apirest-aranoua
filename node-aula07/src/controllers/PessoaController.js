import Pessoa from '../models/Pessoa.js';

// Listar todas as pessoas
export const listarPessoas = async (req,res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    } catch(error){
        res.status(500).json({ error: 'Erro ao listar pessoas.'});
    }
};