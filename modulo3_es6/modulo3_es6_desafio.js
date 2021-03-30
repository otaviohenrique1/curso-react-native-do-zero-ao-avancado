// Desafios JavaScript
// --------------------------------------------------------------
// Desafio 1
let produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
console.log(produtos);
console.log(produtos.length);
produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
produtos.splice(2, 1);
console.log(produtos);
produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
let find = produtos.find((item) => item === 'Computador');
if (find) {
    console.log("Item encontrado");
} else {
    console.log("Item não encontrado");
}
produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
produtos.splice(1, 1);
console.log(produtos);
// --------------------------------------------------------------
// Desafio 2
let numeros = [1,3,5,7,0,9];
console.log(numeros);
numeros = [1,3,5,7,0,9];
let sort = numeros.sort((a, b) =>  a - b);
console.log(sort);
numeros = [1,3,5,7,0,9];
let reverse = numeros.reverse();
console.log(reverse);
// --------------------------------------------------------------
// Desafio 3
let data = new Date();
let dia = data.getDate();
let mes = (data.getMonth() + 1);
let ano = data.getFullYear();
let hoje = `${dia}/${mes}/${ano}`;
console.log(hoje);
// --------------------------------------------------------------
