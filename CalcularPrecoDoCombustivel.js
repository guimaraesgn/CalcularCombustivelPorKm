console.log('\n---Programa para Calcular sua Viagem com o Preço atual do Combustivel---\n')

let precoDoCombustivel = 5.79;

const valorMedioCarroPorKm = 10;

let distanciaDaViagemKm = 100;

let gasolinaporKm = distanciaDaViagemKm / valorMedioCarroPorKm;

console.log('Gastos em uma viagem: ');

let gastoTotal = gasolinaporKm * precoDoCombustivel;

console.log(gastoTotal.toFixed(2));




