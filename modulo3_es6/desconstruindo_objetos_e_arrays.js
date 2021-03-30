// Objeto
const pessoa = {
    nome: "Matheus",
    sobrenome: "Fraga",
    idade: 10,
    cargo: "Desenvolvedor"
};
console.log(pessoa);

let { nome, sobrenome, idade, cargo } = pessoa;
console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(cargo);

let { cargo: programador } = pessoa;
console.log(programador);
console.log(pessoa);

// Array
const nomes = ["Matheus", "Fraga", 10];
console.log(nomes[1]);
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
let { 0:primeiro_nome, 2:idade2 } = nomes;
console.log(primeiro_nome, idade2);
let [ nome1, sobrenome1, idade1 ] = nomes;
console.log(nome1, sobrenome1, idade1);