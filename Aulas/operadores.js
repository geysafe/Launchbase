/* =========================================================
    - OPERADORES DE COMPARAÇÃO -
  
    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a 
    ==      Igual a
    ===     Igual e do mesmo tipo
    !=      Diferente
    !==     Diferente, inclusive do tipo


    - OPERADORES LÓGICOS -

    &&      "E" As duas condições devem ser verdadeiras
            para que a condição final seja verdadeira.

    ||      "OU" Uma das condições deve ser verdadeira
            para que a condição final seja verdadeira

    !       "NÃO" nega uma condição

========================================================= */

console.log (5 <= 4) // false
console.log (4 == '4') //true - compara o número com a string
console.log (4 === '4') //false - compara número e typeoff
console.log (4 != '5') //true
console.log (4 !== '5') //true
//
console.log (4 == 4 && 78 == 4) //false
console.log (4 == 4 && 78 != 4) //true
console.log (4 != 4 || 6 == 6) //true
console.log (4 == 4 || 6 != 6) //true
console.log (!(5 > 6)) // true
console.log (!5 > 6) // false

/* =========================================================

    - DESAFIO 1
Verificar se a pessoa é maior de 18 anos.
Se sim: deixar entrar
Se não: bloquear a entrada
Se a pessoa tiver 17 anos avisar pra voltar quando fizer 18.

=========================================================*/
const age = 18

if (age == 17){
    console.log('\nVolte quando fizer 18 anos!')
} else if (age < 18){
    console.log('\nEntrada bloqueada. Você tem menos que 18 anos.')
} else{
    console.log('\nSeja bem vindo(a) - pode entrar \n ')
}

