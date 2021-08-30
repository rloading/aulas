const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado (msg, true)

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];

    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura**2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('paragrafo-incorreto');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
    




































/*
const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');

const calculo = (peso / (altura * 2));

let = resultado

if (calculo < 18.5) {
    resultado = "Abaixo do peso"
}

else if (calculo >= 18.5 && calculo <= 24.9) {
    resultado = "Peso normal"
}

else if (calculo >= 25 && calculo <= 29.9) {
    resultado = "Sobrepeso"
}

else if (calculo >= 30 && calculo <= 34.9) {
    resultado = "Obesidade 1"
}

else if (calculo >= 35 && calculo <= 39.9) {
    resultado = "Obesidade 2"
}

else if (calculo >= 40) {
    resultado = "Obesidade 3"
}

document.addEventListener('submit', resultado)

console.log(resultado)

*/
