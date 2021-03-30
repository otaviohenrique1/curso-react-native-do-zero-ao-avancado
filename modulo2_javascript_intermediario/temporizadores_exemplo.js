function acao() {
    document.write("Executando...<br>");
}

// Executa de tempo em tempo
// setInterval(acao, 1000);

// Executa por um periodo de tempo
// setTimeout(acao, 3000);

let timer = setInterval(acao, 1000);
clearInterval(timer);