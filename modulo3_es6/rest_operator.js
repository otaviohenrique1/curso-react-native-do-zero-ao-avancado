function minhaLista(...nomes) {
    console.log(nomes);
}

minhaLista("Matheus", "Lucas", "Joao", "Maria");

function listaNumeros(...numeros) {
    console.log(numeros);
}
listaNumeros(1,2,3,4,5);

function cadastrar(usuarios, ...novosUsuarios) {
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    console.log(totalUsuarios);
}
let usuarios = ["Matheus", "Joao"];
let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");