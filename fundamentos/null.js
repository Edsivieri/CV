let c = 3
let d = c
d++
console.log(c)
let e = d
e++
console.log(e)

// referencias e contexto de memoria
let valor //não inicializada
//console.log(valor2) //ReferenceError: valor2 is not defined não foi nem referenciado
valor = null
/* não tem nenhum valor nem um local de memoria ausencia de valor
o null zera a variavel colocando um valor nulo, 
cuidados com informações que estão nulas, elas geraram um erro do tipo typeerror como no caso abaixo

console.log(valor.toString())
*/
const produto = {
}  
console.log(produto.preço)//volta undefined porque o preço não foi definido,
console.log(produto)
produto.preço = 3.50
console.log(produto)

produto.preço = null
console.log(produto.preço)