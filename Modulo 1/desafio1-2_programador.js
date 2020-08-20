/*---------------------------------------------------------
DESAFIO para fortalecer os conceitos de OBJETOS e ARRAYS em JS.
---------------------------------------------------------*/

const programador = {
    nome: 'Fernanda Faria',
    idade: 28,
    tecnologias: [
        {nome:'Python', especialidade:'Web'},
        {nome:'JavaScript', especialidade:'Web'}
    ]

}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos\
e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade\
 em ${programador.tecnologias[0].especialidade}`)