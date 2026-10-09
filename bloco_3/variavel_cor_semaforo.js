
 // Declara uma variável com a cor do semáforo
let corSemaforo = "vermelho";

// Verifica a cor do semáforo utilizando switch
switch (corSemaforo) {
    case "vermelho":
        // Exibe a mensagem para o sinal vermelho
        console.log("Pare");
        break;

    case "amarelo":
        // Exibe a mensagem para o sinal amarelo
        console.log("Atenção");
        break;

    case "verde":
        // Exibe a mensagem para o sinal verde
        console.log("Siga");
        break;

    default:
        // Exibe uma mensagem para cores inválidas
        console.log("Cor inválida");
}
