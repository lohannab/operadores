const leia = require("readline-sync");

let numero1;
let numero2;
let resultado;

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");

resultado = numero1 % numero2;

console.log(`O resultado do resto da divisão entre ${numero1} e ${numero2} = ${resultado}`);

