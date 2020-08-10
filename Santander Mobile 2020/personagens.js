var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

function filme(personagens, filmes, lancamentos, id)
{
if(id < personagens.length && id < filmes.length && id < lancamentos.length){
  console.log(personagens[id] + " é um personagem do filme " + filmes[id] + " que estreou no cinema em " + lancamentos[id])
} else {
  console.log("Essa não é uma opção válida")
}
}

filme(personagens,filmes, lancamentos,2)
