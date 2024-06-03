console.log("1.Janeiro\n2.Fevereiro\n3.Março\n4.Abril\n5.Maio\n6.Junho\n7.Julho\n8.Agosto\n9.Setembro\n10.Outubro\n11.Novembro\n12.Dezembro");

let numeroEscolhido = prompt("Digite o número do mês que você quer: ");
let numeroDoMes = Number(numeroEscolhido);


switch (numeroDoMes) {  
  case 1:
        console.log("Janeiro");
        break
    case 2:
        console.log("Fevereiro");
        break
    case 3:
        console.log("Março");
        break
    case 4:
        console.log("Abril");
        break
    case 5:
        console.log("Maio");
        break
    case 6:
        console.log("Junho");
        break      
    case 7:
        console.log("Julho");
        break
    case 8:
        console.log("Agosto");
        break
    case 9:
        console.log("Setembro");
        break
    case 10:
        console.log("Outubro");
        break
    case 11:
        console.log("Novembro");
        break
    case 12:
        console.log("Dezembro");
        break  
    default:
        console.log("Número inválido.")    
        break
}