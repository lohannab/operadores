import leia from 'readline-sync';

let continuar = true;

do {
    console.log("Joguinho de adivinhação!");
    let numero = leia.questionInt("Digite um número: ");
    const numeroSecreto = Math.floor(Math.random() * 10);

    if (numero === numeroSecreto) {
        console.log("Parabéns! Você acertou!");
    } else {
        console.log("Que pena! Você errou. O número secreto era: " + numeroSecreto);
    }

    continuar = leia.keyInYN("Quer continuar jogando? Pague R$350,00.");

}while(continuar);