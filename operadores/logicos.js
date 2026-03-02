let x = 10;
let y = 5;
let proposicao1;
let proposicao2;
let proposicao3;
let proposicao4;
let resposta;

proposicao1 = x >  y;
console.log(`\n Proposição 1: ${proposicao1}`);

proposicao2 = x < y;
console.log(`\n Proposição 2: ${proposicao2}`);

proposicao3 = x != y;
console.log(`\n Proposição 3: ${proposicao3}`);

proposicao4 = x == y;
console.log(`\n Proposição 4: ${proposicao4}`);


console.log("\n Conjunção")

resposta= proposicao1 ^ proposicao2;
console.log("\n Proposição 1 XOR Proposição 2 é:"+ resposta);

resposta = proposicao1 ^ proposicao3; 
console.log("\nproposicao_01 XOR proposicao_03: " + resposta); 
resposta = proposicao2 ^ proposicao4; 
console.log("\nproposicao_02 XOR proposicao_04: " + resposta); 
resposta = proposicao1 ^ proposicao2; 
console.log("\nproposicao_01 XOR proposicao_02: " + resposta); 
resposta = proposicao3 ^ proposicao4               ; 
console.log("\nproposicao_03 XOR proposicao_04: " + resposta);