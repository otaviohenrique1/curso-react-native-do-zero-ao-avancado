var x1 = 1; // Tem escopo pouco limitado
let x2 = 1; // Tem escopo limitado
const x3 = 1; // const -> constante (Valor nao pode ser alterado)

// Exemplo de var
function exibe_mensagem1() {
    var mensagem = 'mensagem1';
    return mensagem;
}
// console.log(mensagem);

// Exemplo de let
function exibe_mensagem2() {
    let mensagem = 'mensagem';
    return mensagem;
}
// console.log(mensagem);

// Exemplo de const
x3 = 2;
// console.log(x3);
