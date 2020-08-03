/* -----------------------------------------------------------------
OBJETO é uma coleção de dados ou funcionalidades relacionados.
Geralmente composta de diversas variáveis e funções, conhecidas
como propriedades e métodos dentro dos objetos.
=> Coleção de propriedades que recebem valores ou propriedades.

Declaração de variável + abertura de chaves {}, onde são
declaradas as propriedades da variavel separadas por vírgula (,)

----------------------------------------------------------------- */

// Criar um programa que calcula média das notas entre 
// os alunos e envia mensagem do calculo da média

const aluno00 = {
    nome:'Rafael',
    nota: 8.6
}

const aluno01 = {
    nome:'Fábio',
    nota: 6.6
}

const aluno02 = {
    nome:'Vinicius',
    nota: 9.8
}


//Para acessar os valores, é necessário acessar o objeto e sua propriedade

const media = (aluno00.nota + aluno01.nota + aluno02.nota)/3
console.log(media)