// var alunosDeSegunda = [3, 5, -1, 0, -3, -4];
// var alunosDeTerca = [7, 8, 9, 10];
// var alunosDeQuarta = [6, 5, -1, 0, -3, -7];
// var alunosDeQuinta = [-3, 5, 11, -5, -7];
// var alunosDeSexta = [6, -2, -8, 0, -3, -7];
// var alunosDeSabado = [0, 5, -1, 0, -3, 10, 9, -7];


function acontece(arrayDeAlunos, quantidadeMininaDeAlunos) {
    var listaDePresentes = 0;
    for (var i = 0; i < arrayDeAlunos.length; i++) {
        if (arrayDeAlunos[i] <= 0) {
            listaDePresentes++;
        }
    }
    if (listaDePresentes >= quantidadeMininaDeAlunos) {
        return true;
    } else {
        return false;
    }

}

function aberturas(todasAsTurmasDaSemana, quantidadeMininaDeAlunos) {
    var resultadoFinal = [];
    for (var i = 0; i < todasAsTurmasDaSemana.length; i++) {
        resultadoFinal[i] = acontece(todasAsTurmasDaSemana[i], quantidadeMininaDeAlunos);
    }
    return resultadoFinal;
}




