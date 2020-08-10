// function deixaEntrar(dataDeNascimento, censura){
//     if(dataDeNascimento > censura){
//         return true;
//     } else{
//         return false;
//     }
// }

// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdadeB(dataDeNascimento) {
    if(!/^\d{2}\/\d{2}\/\d{4}$/.test(dataDeNascimento)) throw("Formato de data inválido");
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
  
 function deixaEntrar(dataNascimento,censura){
     return calcularIdadeB(dataNascimento) > censura;
 }


