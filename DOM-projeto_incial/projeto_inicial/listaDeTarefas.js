const criarTarefa = (evento)=> {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    console.log(valor)
}

const novaTarefa =  document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)