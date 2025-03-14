
console.log("Soma: "+somarDeclaration(5,2));

//Declaration Hoisted
function somarDeclaration(a,b){
    return a+b;
}

//console.log("somarExpression: "+somarExpression(5,2));
//não funciona, pois a função foi criada no modo Expression.
const somarExpression = function(a,b){
    return a+b;
}
console.log("somarExpression: "+somarExpression(5,2));

const somarArrow = (a,b) => {
    return a+b;
}

console.log("somarArrow: "+somarArrow(5,2));

const somarArrowSimplificada = (a,b) => a+b;

console.log("somarArrowSimplificada: "+somarArrowSimplificada(5,2));

const duplicar = n => n * 2;

console.log("duplicar: "+duplicar(5));