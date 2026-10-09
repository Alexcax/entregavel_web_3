
 // Declara uma constante com valor inicial de 100
const MAX_PONTOS = 100;

// Exibe o valor inicial da constante
console.log("Valor máximo de pontos:", MAX_PONTOS);

// Tenta modificar o valor da constante
try {
    MAX_PONTOS = 150;
} catch (erro) {
    // Captura e exibe o erro gerado
    console.log("Erro:", erro.name);
    console.log("Motivo:", erro.message);
}

// Confirma que o valor original permanece o mesmo
console.log("Valor final:", MAX_PONTOS);
