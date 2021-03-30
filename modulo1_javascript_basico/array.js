let lista = ["1", "2", "3", "4", "5", 1, 2, 3, 4, 5];
console.log(lista.length);
console.log(lista[2]);
console.log(lista.indexOf("5")); // Item que existe
console.log(lista.indexOf("10")); // Item que nao existe
lista.join(",");
console.log(lista);
lista.join(" / ");
console.log(lista);

lista.push("6"); // Adiciona um elemento da lista 
console.log(lista);
lista.pop(); // Remove o ultimo elemento da lista 
console.log(lista);

lista.unshift("6"); // Adiciona um elemento no inicio da lista 
console.log(lista);
lista.shift(); // Remove o primeiro elemento da lista 
console.log(lista);

// Verifica se o item "1" existe na lista
console.log(lista.indexOf("1"));
lista[0] = "100"; // Muda o valor do item da posicao lista[0] de "1" para "100" 
console.log(lista);
if (lista.indexOf("2") > -1) {
    // -1 -> Nao encontrou valor na lista
    // 1 -> Encontrou valor na lista
    alert("Esse item esta na lista");
    console.log(lista.indexOf("2"));
} else {
    alert("Opa nao encontrado");
    console.log(lista.indexOf("20"));
}

let lista1 = ["1"];
console.log(lista1);
let lista2 = ["2"];
console.log(lista2);
console.log(lista2.concat(lista2));