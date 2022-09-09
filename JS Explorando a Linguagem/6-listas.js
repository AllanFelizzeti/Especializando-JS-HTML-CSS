console.log(`Trabalhando com Listas`)

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

console.log("Destinos possíveis:")
//console.log(salvador, saoPaulo, rioDeJaneiro)
listaDeDestinos.push(`Curitiba`)// adicionando um item na lista
console.log(listaDeDestinos) 

listaDeDestinos.splice(1, 1)//Remeve item da lista 
console.log(listaDeDestinos)
console.log(listaDeDestinos[1])