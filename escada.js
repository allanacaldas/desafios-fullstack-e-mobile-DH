function escada(degraus) {
    var escada = [];
    for (var i = 1; i <= degraus; i++) {
        escada.push(" ".repeat(degraus - i) + "#".repeat(i));
    }
    return escada;
}

console.log(escada(5));