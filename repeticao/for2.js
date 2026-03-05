import leia from 'readline-sync';

let nome, idade;
const lista = [5];


for(let i= 0; i < 5; i++){
    nome = leia.question("Digite o nome: ");
    idade = leia.questionInt("Digite sua idade: ");
    lista.push({nome, idade});
}

console.log(lista);