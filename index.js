const Idade = 20;

if(Idade >= 18)
{
    console.log(`Sua idade é maior ou igual à 18 anos`)  
}
else
{
    console.log(`Sua idade é menor de 18 anos`)
}



const idade = 18;

if(idade >= 18)
{
    console.log(`Você é maior de idade`)  
}
else
{
    console.log(`Você não é maior de idade`)
}
const humano = true

console.log(humano)



const mes = "Outubro";

if(mes == "Janeiro" || mes == "Dezembro")
{
    console.log(`Você faz aniversário em Janeiro ou em Dezembro`)  
}
else
{
    console.log(`Você não faz aniversário em Janeiro ou em Dezembro`)
}



const nome = "Paulo";

if(nome.substring(0,1) == "R")
{
    console.log(`Seu nome começa com a letra R`)
}
else{
    console.log(`Seu nome não começa com a letra R`)
}

const sobrenome = "Rocha";
const Nome = "Eliézer"

if(sobrenome.length >= 6 || Nome.substring(0,1) == "E")
{
    console.log(`Seu sobrenome tem ou mais de 6 letras, ou seu nome começa com a letra E`)  
}
else
{
    console.log(`Seu sobrenome não tem mais de 6 letras, ou seu nome não começa com a letra E`)
}