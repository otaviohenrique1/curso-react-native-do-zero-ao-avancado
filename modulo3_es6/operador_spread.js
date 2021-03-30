// Array
const primeiros = [1,2,3];
const numeros = [...primeiros,4,5,6];
console.log(primeiros);
console.log(numeros);

// Objeto
let pessoa = {
    nome: "Matheus",
    idade: 45,
    cargo: "Programador"
};

let novaPessoa = {
    ...pessoa,
    anoAtual: 2050,
    cidade: "Campo Grande"
};

console.log(pessoa);
console.log(novaPessoa);