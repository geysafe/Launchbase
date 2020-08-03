// teste rápido
const name = 'Banguela'


//Calculo da média das notas entre os alunos e informar o resultado

const aluno = "Pucca"
const notaAluno = 8.4

const aluno1 = 'Bang' // neste e no formato acima não é possível colocar outras varíaveis
const notaAluno1 = 7.3

const aluno2 = 'Patão'
const notaAluno2 = 1.8

const nome2 = `Banguela e ${aluno1} são machos` //template string, chamando outra variável
console.log(name)

const media = (notaAluno + notaAluno1 + notaAluno2)/3

console.log(typeof media) // typeoff para descobrir qual o tipo da variável
console.log(media)


//Se a média for maior que 5, parabenizar a turma

if (media > 5){
    console.log(`A média foi ${media}. Parabéns!`)
} else{
    console.log('A média é menor que 5')

}