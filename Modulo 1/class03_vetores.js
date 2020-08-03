/* -----------------------------------------------------------------
VETOR (ou arrays) é uma variável que pode armazenar muitos valores
com um único nome e o acesso ocorre através do index.

Coleção de alguns valores agrupados em uma única variável.

----------------------------------------------------------------- */

const alunos = [
    {
        nome:'Rafael',
        nota: 8.6
    },
    {
        nome:'Fábio',
        nota: 6.6
    },
    {
        nome:'Vinicius',
        nota: 9.8
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
for (var i=0; i < 3; i++){
    console.log (`A média final da classe é ${media}. A nota do Aluno ${alunos[i].nome} é ${alunos[i].nota}.`)
}

console.log(alunos)