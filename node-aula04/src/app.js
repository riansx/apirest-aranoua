import express from "express"

const app = express();

app.get("/",(req,res) => {
    res.status(200).send("Home - Aula 04");
})

export default app;