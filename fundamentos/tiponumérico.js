const peso1 = 1.10
const peso2 = Number('2.0')
console.log(peso1*peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
const avaliação1 = 9.86
const avaliação2 = 7.5435

const total = avaliação1*peso1+avaliação2*peso2
const média = total/(peso1+peso2)
console.log(média.toFixed(2))

console.log(média.toString(2))

/* Number.isInteger(argumento) fala se o numero é inteiro ou não
//argumento.toFixed(numero de casas decimais)) 
//Argumento.toString()) transforma o numero em uma string, texto, 
//console.log((0.1+0.7).toPrecision(1)) TOPRECISION pra chegar na precisão 
se n dá erro com o arredodamento
*/
console.log("10,2"/2)
console.log((0.1+0.7).toPrecision(1))

console.log(0.3 - 0.1)
