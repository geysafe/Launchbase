/*---------------------------------------------------------
- AUTO-DESAFIO -

Consolidação de todas as funções em um único lugar afim 
de apronfundar o conhecimento sobre o consumo de funções 
em estruturas de programação

- SUGESTOES DE MELHORIA-
Implementar um HTML futuramente para receber a "Skill" do
usuario e varrer o const usuarios
p.e:
let skills = prompt("Qual tecnologia você busca em um programador?\nR:")
console.log(skills)

---------------------------------------------------------*/


const programers = [
    { name: 'Mario', skill: ['Javascrip', 'HTML']},
    { name: "Carlos", skill: ["HTML", "CSS"] },
    { name: "Jasmine", skill: ["JavaScript", "CSS"] },
    { name: "Tuane", skill: ["JavaScript", "Node.js"] },
]


function checkskills(programer) {
    for (let skill of programer.skill) {
        if (skill == "CSS") return true
        }

    return false
    
}


for (i = 0; i < programers.length; i++){
    const verificacao = checkskills(programers[i])

    if (verificacao){
        console.log(`O programador ${programers[i].name} possui conhecimento em ${programers[i].skill.join(', ')} \n`)
    } else{
        console.log(`O programador ${programers[i].name} não possui conhecimento na tecncologia que você busca\n`)
    }

}