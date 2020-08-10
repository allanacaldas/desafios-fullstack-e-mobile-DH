
function saldoDeMesesComLucro(umPeriodo) {
  var comLucro = [];
  for (let i = 0; i < umPeriodo.length; i++){
     if(umPeriodo[i]>0) {
       comLucro.push(umPeriodo[i]);
          }  
  }
  return comLucro;
}

console.log(saldoDeMesesComLucro([200,-20,-10,-15,10,500,600,700,1450,-20]));


function passandoPelosPares(){
  for(var i = 0; i<=6; i++) {
      if(i%2 == 0){
          console.log("aqui eu tenho o valor de " +  i)
      }
  }
}
passandoPelosPares();

function somar5MoedasDe25Centavos(quantidadeDeMoedas){
  var soma = 0;
  for(var i = 0; i <quantidadeDeMoedas; i++){
    soma = soma + 0.25
  }
  return soma;
}

function somaDosPares(x){
  var totalPares = 0;
  for(var i = 0; i <= x; i+=2) {
      totalPares = totalPares + i;
    }
return totalPares;
}
var teste = console.log(somaDosPares(10));