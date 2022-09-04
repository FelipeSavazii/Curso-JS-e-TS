const form = document.getElementsByClassName('form')[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    calcIMC();
});

function calcIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    if (peso > 0 && altura > 0) {
        var imc = peso / (altura * altura);
        var imc = imc.toFixed(2);
        levelIMC(imc);
        return;
    } else {
        levelIMC();
        return;
    }
}

function levelIMC(imc = 0) {
    console.log(imc);
    const messages = {
        "error": "Preencha todos os campos",
        "underweight": "Abaixo do peso",
        "normal": "Peso normal",
        "overweight": "Acima do peso",
        "obesity": ["Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"],
    }
    const result = document.getElementsByClassName('result')[0];
    if (imc === 0) {
        result.innerHTML = messages.error;
    } else if (imc > 40) {
        result.innerHTML = `<b>IMC:</b> ${imc} - ${messages.obesity[2]}`;
    } else if (imc > 35) {
        result.innerHTML = `<b>IMC:</b> ${imc} - ${messages.obesity[1]}`;
    } else if (imc > 30) {
        result.innerHTML = `<b>IMC:</b> ${imc} - ${messages.obesity[0]}`;
    } else if (imc > 25) {
        result.innerHTML = `<b>IMC:</b> ${imc} -  ${messages.overweight}`;
    } else if (imc > 18.5) {
        result.innerHTML = `<b>IMC:</b> ${imc} - ${messages.normal}`;
    } else {
        result.innerHTML = `<b>IMC:</b> ${imc} - ${messages.underweight}`;
    };
}