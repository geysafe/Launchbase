/* ------------------------------------------------------
Criar um programa que calcula a média das turmas
de alunos e retorna o calculo da média.
------------------------------------------------------ */

const alunosTurmaA = [
    {nome: 'Roberto', nota: 6.8},
    {nome: 'Samuel', nota: 5.4},
    {nome: 'Rodrigo', nota: 4.8},
    {nome: 'Ben', nota: 3.0},
    {nome: 'Miguel', nota: 3.2},
]

const alunosTurmaB = [
    {nome: 'Olivia', nota: 10},
    {nome: 'Julia', nota: 6.5},
    {nome: 'Melissa', nota: 5.8},
    {nome: 'Bruna', nota: 7.4},
    {nome: 'Manu', nota: 9.6},
]

//função para o calculo de média
function calculaMedia(alunos){
    return(alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota +alunos[4].nota)/5
}

//função de impressão seguindo a premissa de média mínima e os parâmetros
function imprimirMensagem(media, turma){
    if(media > 5){
        console.log(`A média da turma ${turma} foi de ${media}. PARABÉNS!!`)
    } else{
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

//duas constantes que receberão os valores da função média
const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

//execução da função de impressão
imprimirMensagem(media1, 'Turma A')
imprimirMensagem(media2, 'Turma B')