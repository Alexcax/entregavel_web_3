
 // Declara as variáveis que serão utilizadas nas frases
const nome = "Alexsander";
const idade = 18;
const curso = "Engenharia da Computação";

// Cria uma frase utilizando Template Literals
const fraseTemplate = `Meu nome é ${nome}, tenho ${idade} anos e curso ${curso}.`;

// Cria a mesma frase utilizando concatenação
const fraseConcatenacao = "Meu nome é " + nome + ", tenho " + idade + " anos e curso " + curso + ".";

// Exibe as duas frases no console
console.log("Template Literals:", fraseTemplate);
console.log("Concatenação:", fraseConcatenacao);
