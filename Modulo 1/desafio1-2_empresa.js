/*---------------------------------------------------------
DESAFIO para fortalecer os conceitos de OBJETOS e ARRAYS em JS.
Crie um programa que armazena dados da empresa Rocketseat
dentro de um objeto chamado empresa. Imprima em tela 
utilizando console.log o nome da empresa e seu endereço 
---------------------------------------------------------*/

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    ender: 'Rua Guilherme Gembala',
    num: 260
}

console.log(`A empresa ${empresa.nome} está localizada em \
${empresa.ender}, ${empresa.num}`)