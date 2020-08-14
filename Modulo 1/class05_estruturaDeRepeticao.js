/* ------------------------------------------------------
Criar um programa que calcula a média das turmas
de alunos e retorna o calculo da média.
------------------------------------------------------ */

const alunosTurmaA = [
    {nome: 'Roberto', nota: 6.8},
    {nome: 'Samuel', nota: 5.4},
    {nome: 'Rodrigo', nota: 4.8},
    {nome: 'Ben', nota: 3.0},
    {nome: 'Miguel', nota: 9.2},
]

const alunosTurmaB = [
    {nome: 'Olivia', nota: 10},
    {nome: 'Julia', nota: 6.5},
    {nome: 'Melissa', nota: 5.8},
    {nome: 'Bruna', nota: 7.4},
    {nome: 'Manu', nota: 0.6},
    {nome: 'Manu', nota: 8.6}
]

//função para o calculo de média utilizando estrutura de repetição
// let - a variavel pode mudar

function calculaMedia(alunos){
    let soma = 0
    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota;
    }
    const media = soma / alunos.length;
    return media
}

function imprimirMensagem(media, turma){
    if(media > 5){
        console.log(`A média da turma ${turma} foi de ${media}. PARABÉNS!!`)
    } else{
        console.log(`A média da turma ${turma} é menor que 5. - ${media} `)
    }
}


const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

imprimirMensagem(media1, 'Turma A')
imprimirMensagem(media2, 'Turma B')