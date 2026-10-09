
 // Cria uma função para classificar a nota do aluno
function classificarNota(nota) {
    // Verifica se a nota é maior ou igual a 6
    if (nota >= 6) {
        return "Aprovado";
    } else {
        // Retorna reprovado caso a nota seja menor que 6
        return "Reprovado";
    }
}

// Testa a função com diferentes notas
console.log("Nota 8:", classificarNota(8));
console.log("Nota 5:", classificarNota(5));
console.log("Nota 6:", classificarNota(6));
console.log("Nota 3:", classificarNota(3));
