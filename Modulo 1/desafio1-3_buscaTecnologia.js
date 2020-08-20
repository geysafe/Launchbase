/*----------------------------------------------------------
DESAFIO para fortalecer os conceitos de Funções, Métodos,
Estrutura de repetição e Escopos.

Crie um programa que armazena um array de usuários (objetos),
cada usuário tem um nome e suas tecnologias (novo array).
Percorra a lista de usuários com uma estrutura de repetição
imprimindo em tela as informações dos usuários:
---------------------------------------------------------- */

const user = [
    { name: 'Mario', skill: ['Javascrip', 'HTML']},
    { name: "Carlos", skill: ["HTML", "CSS"] },
    { name: "Jasmine", skill: ["JavaScript", "CSS"] },
    { name: "Tuane", skill: ["JavaScript", "Node.js"] },
    { name: 'Fábio', skill: ['HTML', 'CSS', 'Javascript'] },
    { name: 'Bruna', skill: ['Python', 'Django', 'SQL'] },
    { name: 'Mayara', skill: ['Java', 'C#', 'C++'] },
    { name: 'Clayton', skill: ['HTML', 'Javascript'] },
]


function checkskills(programer) {
    for (let skill of programer.skill) {
        if (skill == "CSS") return true
        }

    return false
    
}

for (i = 0; i < user.length; i++){
    const verificacao = checkskills(user[i])

    if (verificacao){
        console.log(`O programador ${user[i].name} possui conhecimento em ${user[i].skill.join(', ')} \n`)
    } 

}