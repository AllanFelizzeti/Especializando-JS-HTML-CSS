console.log(`\n rabalhando com Condicionais\n`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15
const estaAcompanhada = false
let temPassagemComprada = false
const distino = "Rio de Janeiro"

console.log("\n Destinos possíveis:")
console.log(listaDeDestinos) 


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let destinoExiste = false
let contador = 0
while(contador < 3){
    if (listaDeDestinos[contador] == distino){
        destinoExiste = true
        break
    } 
    contador += 1
}

console.log("Destino existe: ", listaDeDestinos[contador - 1])

console.log("Embarque: \n\n")
if (idadeComprador >= 18 || estaAcompanhada == true && temPassagemComprada == true){
    console.log("Boa Viagem!")
} else {
    console.log("Você não pode embarcar")
}