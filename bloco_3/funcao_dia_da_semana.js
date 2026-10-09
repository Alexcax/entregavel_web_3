
 // Cria uma função que recebe o número do dia da semana
function diaDaSemana(numero) {
    // Verifica o número informado utilizando switch
    switch (numero) {
        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            // Retorna uma mensagem para números inválidos
            return "Número inválido";
    }
}

// Testa a função com diferentes números
console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 3:", diaDaSemana(3));
console.log("Dia 5:", diaDaSemana(5));
console.log("Dia 7:", diaDaSemana(7));
console.log("Dia 9:", diaDaSemana(9));
