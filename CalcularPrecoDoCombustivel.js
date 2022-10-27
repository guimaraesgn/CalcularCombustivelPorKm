console.log('\n---Programa para Calcular sua Viagem com o Preço atual do Combustivel---\n')

let precoDoEtanol = 5.79;
let precoDoGasolina = 6.66;
const valorMedioCarroPorKm = 10;
let distanciaDaViagemKm = 100;
const tipoCombustivel = 'Gasolina';

let gasolinaporKm = distanciaDaViagemKm / valorMedioCarroPorKm;

if (tipoCombustivel === 'Etanol') {
    let gastoTotal = gasolinaporKm * precoDoEtanol;
    console.log('Gastos em uma viagem: ');
    console.log(gastoTotal.toFixed(2));
} else {
    let gastoTotal = gasolinaporKm * precoDoGasolina;
    console.log('Gastos em uma viagem: ');
    console.log(gastoTotal.toFixed(2));
}





