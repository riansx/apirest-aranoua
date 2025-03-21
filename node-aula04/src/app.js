import express from "express"

const app = express();


//middleware: express.json()
app.use(express.json());

const cidades = [
    {
        "id":1,
        "nome":"Manaus"
    },
    {
        "id":2,
        "nome":"Belém",
    },
    {
        "id":3,
        "nome":"São Paulo"
    }
]

app.get("/",(req,res) => {
    res.status(200).send("Home - Aula 04");
})

app.get("/cidades",(req,res) => {
    res.status(200).send(cidades);
})

function findCidade(id){
    return cidades.find(elemento => elemento.id === Number(id)) || null;
}

app.get("/cidades/:id",(req,res) => {

    const cidade = findCidade(req.params.id);

    if(cidade){
    res.status(200).send(cidade);
    }else{
            res.status(404).send({"error":"Não existe cidade com esse id"});
    }
    
})

app.post("/cidades", (req,res) => {
    console.log(req.body);
    cidades.push(req.body);
    res.status(201).send(req.body);
})

app.put("/cidades/:id", (req,res) => {
    const cidade = findCidade(req.params.id);
    cidade.nome = req.body.nome;
    res.status(200).send(cidade);
})

function deletaCidade(id){
    const indice = cidades.findIndex(elemento => elemento.id === Number(id));
    if(indice !== -1){
        const cidadesRemovidas = cidades.splice(indice,1);
        return cidadesRemovidas[0];
    }
    return null;
}

app.delete("/cidades/:id", (req,res) => {
    const cidadeDeletada = deletaCidade(req.params.id);
    res.status(200).send(cidadeDeletada);
})

export default app;