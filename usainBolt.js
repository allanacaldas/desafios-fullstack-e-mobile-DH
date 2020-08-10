function caloriasDeTrote(volta){
var caloriasTotaisExigidas = 0;
for(var i = 0; i <= volta; i++){
  var caloriasPorVolta = 5 * i;
  caloriasTotaisExigidas = caloriasTotaisExigidas + caloriasPorVolta;
}
console.log(caloriasTotaisExigidas);
}

caloriasDeTrote(5);
