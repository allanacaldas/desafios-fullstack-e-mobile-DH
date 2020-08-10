function fatorial(numero){
    var fatorial =1;
    for(var contador = 1; contador <= numero; contador++){
        fatorial = fatorial * contador;
        
    }
    return fatorial;
}
console.log(fatorial(5));