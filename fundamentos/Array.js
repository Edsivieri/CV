/*Unidirecional, forma de agrupar diferentes valores a partir de um unico indentificador, e é indexida, 
começando em 0, 
arrays de tipos de dados
*/
const valores = [7.7, 8.9, 9.2, 6.3];
console.log(valores[0], valores[3]);
console.log(valores[1]);

valores[11] = 121;

console.log(valores);
valores.push({id: 12}, false, null);

console.log(valores);
var primeiro = valores[0];
var ultimo = valores[valores.length -1];
console.log(ultimo);


var frutas = ['Maçã', 'Banana'];
console.log(frutas)
var add = frutas.push('Laranja')
console.log(frutas)
frutas.pop()
console.log(frutas)
 frutas.shift()
console.log(frutas)
frutas.unshift('Cenoura')
console.log(frutas)
 frutas.unshift('Batata')
console.log(frutas)
var pos = frutas.indexOf('Batata')
console.log(frutas)
frutas.splice(pos,1)
console.log(frutas)

/*var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
// ['Nabo', 'Rabanete']*/
var vegetais = ['Repolho','Nabo','Rabanete','Cenoura'];
console.log(vegetais)
let posc = 1, n = 1;
vegetais.splice(posc,n);
console.log(vegetais)

console.log(typeof vegetais)
