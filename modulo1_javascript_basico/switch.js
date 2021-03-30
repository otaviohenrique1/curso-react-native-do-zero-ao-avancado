// let x = 20;
// switch (x) {
//     case 0:
//         console.log("O x vale 0");
//         break;
//     case 1:
//         console.log("O x vale 1");
//         break;
//     case 2:
//         console.log("O x vale 2");
//         break;
//     default:
//         console.log("O x vale outro valor");
//         break;
// }

document.write("<br> Escolha o seu pedido: <br>");
document.write("<br> 0 - Sorvete / 1 - Suco <br>");
document.write("<br> 2 - Coca-cola / 3 - Agua gelada <br><br>");

function pedir() {
    let x = prompt("O que deseja pedir ?");
    switch (x) {
        case "0":
            alert("Voce pediu Sorvete");
            break;
        case "1":
            alert("Voce pediu Suco");
            break;
        case "2":
            alert("Voce pediu Coca-cola");
            break;
        case "3":
            alert("Voce pediu Agua gelada");
            break;
        default:
            alert("Ops não temos essa opção");
            break;
    }
}