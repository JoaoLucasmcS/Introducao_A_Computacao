let dataInicial = new Date("2024-06-03");
let dataFinal = new Date ("2024-07-12");

let dataInicialEmMiisegundos = dataInicial.getTime();
let dataFinalEmMilisegundos = dataFinal.getTime();

diferencaEmMiliSegundos = dataFinalEmMilisegundos - dataInicialEmMiisegundos;

diferencaEmDias = diferencaEmMiliSegundos / (1000 * 3600 * 24);

console.log("Diferença em dias: ", diferencaEmDias);