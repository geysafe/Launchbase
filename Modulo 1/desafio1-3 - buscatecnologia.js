/*----------------------------------------------------------
DESAFIO para fortalecer os conceitos de Funções, Métodos,
Estrutura de repetição e Escopos.

Crie um programa que armazena um array de usuários (objetos),
cada usuário tem um nome e suas tecnologias (novo array).
Percorra a lista de usuários com uma estrutura de repetição
imprimindo em tela as informações dos usuários:
---------------------------------------------------------- */

const user = [
    {nome:'Fábio', tecnologias:['HTML', 'CSS', 'Javascript'] },
    {nome:'Bruna', tecnologias:['Python', 'Django', 'SQL'] },
    {nome:'Mayara', tecnologias:['Java', 'C#', 'C++'] },
    {nome:'Clayton', tecnologias:['HTML', 'Javascript'] },
]


function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            return true
    } return false
}