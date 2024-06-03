let nomeDoCliente = prompt("Digite o nome do cliente: ");
console.log("Compras de ", nomeDoCliente);

let produto1 = 'Shampoo';
let marcaProduto1 = 'Seda';
let precoProduto1 = 7.5;

let produto2 = 'Condicionador';
let marcaProduto2 = 'Pantene';
let precoProduto2 = 16.25;

let maisCaro = (precoProduto2 > precoProduto1);
let totalCompra = precoProduto1 + precoProduto2;
let imposto = totalCompra*(10/100); 
let frete = totalCompra*(15/100);
let totalFinal = totalCompra + imposto + frete;


console.log("Produto 1: ", produto1, "\nMarca: ", marcaProduto1, "\nPreço: ", precoProduto1);
console.log("Produto 2: ", produto2, "\nMarca: ", marcaProduto2, "\nPreço: ", precoProduto2);
console.log("Total da compra: ", totalCompra);
console.log("Imposto: ", imposto, "\nFrete: ", frete);
console.log("Total da compra após frete e imposto: ", parseFloat(totalFinal.toFixed(2)));




