
 // Exibe o título da primeira repetição
console.log("=== NÚMEROS COM FOR ===");

// Percorre os números de 1 até 20 utilizando for
for (let i = 1; i <= 20; i++) {
    // Verifica se o número é par ou ímpar
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}

// Exibe o título da segunda repetição
console.log("=== NÚMEROS COM WHILE ===");

// Declara o contador com valor inicial de 1
let contador = 1;

// Percorre os números de 1 até 20 utilizando while
while (contador <= 20) {
    // Verifica se o número é par ou ímpar
    if (contador % 2 === 0) {
        console.log(`${contador} é par`);
    } else {
        console.log(`${contador} é ímpar`);
    }

    // Incrementa o contador para evitar um loop infinito
    contador++;
}
