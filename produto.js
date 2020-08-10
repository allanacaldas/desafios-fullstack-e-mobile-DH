function produto(array){
    var resultadoDaMultiplicacao = 1;
    for(var contador = 0; contador < array.length; contador++){
        resultadoDaMultiplicacao = resultadoDaMultiplicacao * array[contador];
    }
   return resultadoDaMultiplicacao;
}
console.log(produto([5,3,2,7,8]));