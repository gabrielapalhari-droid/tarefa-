//soma
let num1 = 50;
let num2 = 2;

const soma = num1 + num2;

//subtração
let num3 = 50;
let num4 = 346;

const subtração = num3 - num4;

// informe o usuário
const mensagem =
  'resultado da soma é {soma}, resultado da subtração é {subtração}'
    .replace('{soma}', soma)
    .replace('{subtração}', subtração);

console.log(mensagem);

//verificação soma

let verificarSoma = soma >= 100 ? 'maior que 100' : 'menor que 100';

//verificação subtração

let verificarSubtração = subtração <= 0 ? 'menor que 0' : 'maior que 0';

console.log(verificarSoma);
console.log(verificarSubtração);
