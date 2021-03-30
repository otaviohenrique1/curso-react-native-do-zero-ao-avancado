let peso;
let altura;
let imc;
let resultado;

function calcular() {
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura*altura);
    if (imc < 17) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br> Cuidado voce esta muito abaixo do peso!</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else if (imc > 17 && imc < 18.49) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br> Cuidado voce esta abaixo do peso!</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else if (imc > 18.5 && imc < 24.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br> Otimo voce no peso certo!</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else if (imc > 25 && imc < 29.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br> Cuidado voce esta acima do peso!</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<h3><br> Cuidado voce esta muito acima do peso!</h3><br>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }
}
