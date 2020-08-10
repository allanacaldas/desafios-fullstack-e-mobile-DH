function naipeDeTruco(naipe) {
    var podeAdicionar = false;
    var todasAsCartas = [];
    for (let i = 1; i <= 12; i++) {
        if (i !== 8 && i !== 9) {
            todasAsCartas.push(i + " de " + naipe);
        }
    }
    console.log(todasAsCartas);
}


naipeDeTruco("espadas");
naipeDeTruco("paus");