
 // Cria uma função com parâmetro padrão igual a 1
function dobro(n = 1) {
    // Retorna o dobro do número recebido
    return n * 2;
}

// Chama a função passando diferentes valores
console.log("Dobro de 5:", dobro(5));
console.log("Dobro de 10:", dobro(10));

// Chama a função sem passar nenhum argumento
console.log("Dobro sem argumento:", dobro());
