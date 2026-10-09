
 // Cria a função dobro utilizando uma função declarada
function dobro(numero) {
    // Retorna o número multiplicado por 2
    return numero * 2;
}

// Cria a função utilizando uma expressão
const dobroExpressao = function(numero) {
    // Retorna o número multiplicado por 2
    return numero * 2;
};

// Cria a função utilizando arrow function
const dobroArrow = numero => numero * 2;

// Exibe o resultado das três funções no console
console.log("Função declarada:", dobro(5));
console.log("Função de expressão:", dobroExpressao(5));
console.log("Arrow function:", dobroArrow(5));
