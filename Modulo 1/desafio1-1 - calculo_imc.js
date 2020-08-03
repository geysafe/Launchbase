/*---------------------------------------------------------

Crie um programa para calcular o IMC e nível
de obesidade de uma pessoa.

Armazene em uma constante chamada imc o cálculo
do índice de massa corporal definido pela fórmula

IMC = massac / (altura * altura)

Se IMC >= 30 - "Funalo você está acima do peso"
Se IMC < 29.9 - "Funalo você não está acima do peso"

---------------------------------------------------------*/

const nome = 'Fábio'
const massac = 200
const altura = 1.77
var imc = massac / (altura * altura)

if (imc < 29.9){
    console.log(`${nome} Você não está acima do peso`)
} else{
    console.log(`${nome} Você está acima do peso`)
}
