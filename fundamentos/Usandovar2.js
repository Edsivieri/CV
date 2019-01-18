var numero = 1
{var numero = 2
    console.log('dentro =', numero)

}
console.log('fora','=',numero)
//tanto dentro quanto fora o numero será 2, porque var tem o mesmo escopo, n tendo uma função
//fuja do escopo global

var numero = 1 
{
    let numero = 2
    console.log('dentro =', numero)

}
console.log('fora', '=', numero)
//let tem esco´po de bloco permitindo existir os dois valores sem conflito
// o escopo menor tem preferencia, no caso let
