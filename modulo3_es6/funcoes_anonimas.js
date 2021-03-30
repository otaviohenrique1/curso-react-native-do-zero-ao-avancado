function adicionar(...numeros) {
    const total = numeros.reduce((total, proximo) => {
        let soma = total + proximo;
        return soma;
    });
    console.log(total);

    /*
    const total = numeros.reduce((total, proximo) => total + proximo);
    console.log(total);
    */

    /*
    const total = numeros.reduce(function(total, proximo) {
        return total + proximo;
    });
    console.log(total);
    */
}
adicionar(1,2,3,4,5,6);