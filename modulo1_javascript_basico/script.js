// Comentario de uma linha
/*
Comentario
de
varias
linhas
*/
// var nome = 'Matheus';
// var idade = prompt('Digite a sua idade');
// console.log(idade);

function entrar() {
    let area = document.getElementById('area');
    let texto = prompt('Digite o seu nome?');

    if (texto == '' || texto == null) {
        alert("Digite o seu nome novamente");
        area.innerHTML = 'Bem-vindo...';
    } else {
        area.innerHTML = 'Bem-vindo ' +  texto;
    }
}

function entrar2(nome) {
    let area = document.getElementById('area2');
    let texto = prompt('Digite o seu sobrenome?');
    area.innerHTML = nome + ' ' +  texto;
}
