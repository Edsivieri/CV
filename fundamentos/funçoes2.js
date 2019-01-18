// armazenando uma funçao em uma variavel
//constante nome da constante recebe uma funçao anonima
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
/* Armazenadno uma função arrow em uma variavel
forma reduzida de se contruir em uma função
*/
const soma = (a, b) => {
    return a + b
} //a => subistitui o termo function
console.log(soma(2, 3))

let divisão = (z,g) => {
    return z/g
}
console.log(divisão(4, 2))

/* retorno implicito
funão com apenas uma sentença de codigo 
*/
const subtração = (a, b) => a - b

var multiplicação = (c, d) => 2 * d
console.log(multiplicação(2, 4))

let imprimi2 = e => console.log(e) // com apenas um elemento n é necessario os ()
imprimi2('Kawabunga')

let imprimir3 = h => console.log(h)
imprimir3('Casal gay')
//[1,2,3]
//[1,4,9]
var z = 4
function dobro(){
 var result = []// a variavel result existe apenas dentro da função e nao fora dela ela é apenas 
 // dentro da variavel 

 for (var i = 0; i <Array.length; i++){
     result.push(Array[i]*Array[i])
 }
 return result
}
dobro([1,2,3,4])
console.log(dobro())
//queremos criar um modo que os resultados sejam "salvos" em algum lugar criando uma variavel
dobro();
console.log(z)// no caso z foi declarada fora da funçao sendo global



