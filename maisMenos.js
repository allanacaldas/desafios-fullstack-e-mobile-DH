function maisMenos(array) {
    var arrayPositiva = [];
    var arrayDeZeros = [];
    var arrayNegativa = [];
    var arrayDosPercentuais = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrayPositiva.push(array[i]);
        }
        else if (array[i] < 0) {
            arrayNegativa.push(array[i]);
        } else {
            arrayDeZeros.push(array[i]);
        }
    }

    var percentualDosPositivos = arrayPositiva.length / array.length;
    var percentualDosNegativos = arrayNegativa.length / array.length;
    var percentualdosZerados = arrayDeZeros.length / array.length;

    arrayDosPercentuais.push(percentualDosPositivos);
    arrayDosPercentuais.push(percentualdosZerados);
    arrayDosPercentuais.push(percentualDosNegativos);

    return arrayDosPercentuais;

}

console.log(maisMenos([1, 2, 0, -1]));