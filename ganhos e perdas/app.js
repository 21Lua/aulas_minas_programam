// perguntar entradas
var income = prompt(" Qual é valor da entrada?");

// saidas
var costs =prompt ("Qual é valor da saida?");

// Porcentagem dos impostos
var taxPercent = prompt ("Qual a porcentagem dos impostos?");

// renda bruta
var grossProfit = income - costs;

// obtendo o valor dos importos
var tax = grossProfit*taxPercent/100

// Renda Liquida
var netlncome = grossProfit - tax;

// mostrar na pagina web
document.write(" sua renda Liquida é de $" + netlncome);
