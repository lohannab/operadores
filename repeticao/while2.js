import leia from 'readline-sync';

const senhaCorreta = "1234";
let senhaDigitada = "";
let contador = 0;

console.log("Seja bem-vindo ao sistema de login!");

while (senhaDigitada !== senhaCorreta){
    senhaDigitada = leia.question("Digite a senha: ");
    contador++;
    contador > 3 ? console.log("Número de tentativas excedido. Acesso bloqueado.") : console.log("Senha incorreta. Você tem mais " + (3 - contador) + " tentativa(s).");
}

console.log("Login bem-sucedido! Bem-vindo ao sistema.");