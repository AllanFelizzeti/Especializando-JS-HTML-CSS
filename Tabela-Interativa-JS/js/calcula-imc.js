var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if(!pesoValido){
        pesoValido = false
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido")
    }

    if(!alturaValido){
        alturaValido = false;
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")
    }
    if(alturaValido && pesoValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

function validaPeso(peso){
    if(peso >=0 && peso <200){
        return true;
    }else{
        return false;
    }       
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}