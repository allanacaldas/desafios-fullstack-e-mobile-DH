function alturaArvoreUtopica(ciclo) {
    var alturaDaArvore = 1;
    
    for (var contador = 0; contador <= ciclo; contador++) {
        if (contador == 0) {
            alturaDaArvore = 1;
        }
        else if (contador % 2 !== 0) {
            alturaDaArvore = alturaDaArvore * 2;
        }
        else {
            alturaDaArvore++;
        }
    }
    return alturaDaArvore
}

console.log(alturaArvoreUtopica(6));