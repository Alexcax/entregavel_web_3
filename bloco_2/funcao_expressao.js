
 // Tenta chamar a função antes de sua declaração
try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    // Captura e exibe o erro gerado
    console.log("Erro:", erro.name);
    console.log("Motivo:", erro.message);
}

// Declara a função utilizando uma expressão
const ehMaiorDeIdadeExpressao = function(idade) {
    // Retorna true se a idade for maior ou igual a 18
    // Caso contrário, retorna false
    return idade >= 18;
};

// Chama a função após sua declaração
console.log("Idade 20:", ehMaiorDeIdadeExpressao(20));
console.log("Idade 16:", ehMaiorDeIdadeExpressao(16));
