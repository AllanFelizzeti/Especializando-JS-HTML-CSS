console.log(`Trabalhando com Condicionais\n`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15
const estaAcompanhada = false
const temPassagemComprada = true

console.log("Destinos possíveis:")
console.log(listaDeDestinos) 

// if (idadeComprador >= 18){
//     console.log("Comprador é maior de Idade")
//     listaDeDestinos.splice(1, 1)
// } else if (estaAcompanhada == true) {
//     //A pessoa é menor de idade
//     console.log("Comprador menor de idade mas esta acompanhado de um de maior resposavel")
//     listaDeDestinos.splice(1, 1)
// }else {
//     console.log("Não é maior de Idade e não esta acomnhade de um maior responsavel")
// }

if (idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Comprador é maior de Idade ou esta acompanhado por um maior responsave\n")
    listaDeDestinos.splice(1, 1)
}else {
    console.log("Não é maior de Idade e não esta acomnhade de um maior responsavel\n")
}

console.log(listaDeDestinos)

console.log("Embarque: \n\n")
if (idadeComprador >= 18 || estaAcompanhada == true && temPassagemComprada == true){
    console.log("Boa Viagem!")
} else {
    console.log("Você não pode embarcar")
}