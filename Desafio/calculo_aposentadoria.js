/*---------------------------------------------------------

Crie um programa para calcular a aposentadoria de uma pessoa.

Baseado nos valores utilize as fórmulas a seguir para calcular
se a pessoa está apta ou não para se aposentar e no fim 
imprima uma mensagem em tela.

- O tempo de contribuição mínimo para homens é de 35 anos e,
para mulheres, 30 anos;
- Utilizando a regra 85-95, a soma da idade com o tempo de 
contribuição do homem precisa ser de no mínimo 95 anos,
enquanto a mulher precisa ter no mínimo 85 anos na soma.

Com base nas regras acima imprima na tela as mensagens:
- SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
- SE a pessoa NÃO estiver aposentada: Silvana, você ainda não
pode se aposentar!;

---------------------------------------------------------*/

const nome = "Roberto";
const sexo = "M";
const idade = 70;
const contribuicao = 35;
const soma = idade + contribuicao

if (sexo == "F"){
    if (contribuicao >= 30 && soma >= 85){
        console.log(`${nome}, você pode se aposentar!`)
    } else{
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else{
    if (contribuicao >= 35 && soma >= 95){
        console.log(`${nome}, você pode se aposentar!`)
    } else{
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}
