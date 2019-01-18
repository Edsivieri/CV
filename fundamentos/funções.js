/*
funções são o  verbo, executam as ações, executam os blocos que são delimitados por {}
funçao sao um trecho de codigo nomeado que vc pode reuitilizar

*/
class Produtos {
}
console.log(typeof Produtos)

//função sem retorno
function imprimirSoma(a,b) {
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma()

function soma(a, b = 1){
    return a+b
}
console.log(soma(2,3))
console.log(soma(2))

/*function soma(c,d){
    console.log(d+c)
}
soma(3,5)*/
function somaA(c, d = 2){
    return c*d
}
console.log(somaA(6))// como d ja foi dado ele apenas necessita do primeiro elemento dando 12
console.log(somaA(6,3)) //  o segundo elemento subistituiu o d original dando 18



let z = 6
let g = 5
const imprimirCalculo = function (z, g) {
    console.log(g + z)
}
imprimirCalculo(z,g)