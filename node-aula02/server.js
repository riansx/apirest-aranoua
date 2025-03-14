import http from "http";




// Função Declaration
/* function executaChamada(request, response){
    console.log("Chamada realizada - console.");
    response.writeHead({"Content-Type":"text/plain: charset=utf-8"});
    response.end("Chamada realizada - browser.")
}*/

// Função Expression
/*const executaChamada = function (req, res){
    console.log("Chamada realizada - console.");
    res.writeHead(200,{"Content-Type":"text/plain: charset=utf-8"});
    res.end("Chamada realizada - browser.")
}*/

// Função Arrow
/*const executaChamada = (req, res) => {
    console.log("Chamada realizada - console.");
    res.writeHead(200,{"Content-Type":"text/plain: charset=utf-8"});
    res.end("Chamada realizada - browser.")
}*/

const server = http.createServer((req, res) => {
    console.log("Chamada realizada - console.");
    res.writeHead(200,{"Content-Type":"text/plain: charset=utf-8"});
    res.end("Chamada realizada ATUALIZADO - browser.")
});

function inicioServidor(){
    console.log("Servidor iniciado!");
}

server.listen(3001,inicioServidor);