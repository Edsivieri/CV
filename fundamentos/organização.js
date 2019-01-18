/*Como organizar o codigo em javascript,
codigo é feito em linhas e em blocos, antes de conseguir fazer o run, tem que salvar, 
console.log("") faz um texto aparecer
; é opicional. repl.it é um framework direto no browser  */

/* outras notas e comentarios 
constantes e variáveis e let 

let valor = ''
let numero = 1
let pqp = false 
 evitar comentarios que expliquem a nomeclatura.
 Number.isInteger(argumento) fala se o numero é inteiro ou não
argumento.toFixed(numero de casas decimais)) 
Argumento.toString()) transforma o numero em uma string, texto, 
console.log("numero"/numero)fucniona apesar de ser uma string

Number.isInteger(argumento) fala se o numero é inteiro ou não
argumento.toFixed(numero de casas decimais)) 
Argumento.toString()) transforma o numero em uma string, texto, 
console.log((0.1+0.7).toPrecision(1)) TOPRECISION pra chegar na precisão se
 n dá erro com o arredodamento

 Função Math são as principais funçoes matematicas, facilitador, tem pi tem potencias e etc
 var remainder = 11 % 3;
 console.log(remainder) da o quociente entao 11/3 3 com resto 2 o resultado da conta com % será 2
 Like the += operator, -= subtracts a number from a variable.

 myVar = myVar - 5;

 will subtract 5 from myVar.This can be rewritten as:

     myVar -= 5;

a = a - 6;
b = b - 15;
c = c - 1;
console.log(a, b, c)
 
funciona tambem para multiplicações e divisões

tambem funciona

Booleanos
console.log(false || true) // || é ou, se um for verdadeiro ele dara true, se ambos falso sera falso
console.log(true && true) //&& é E, ambos precisam ser verdadeiros

console.log(1 + 1 == 2 && 10 * 10 != 50)
But what if you want to test whether something refers
to the precise value false? Expressions like 0 == false and "" == false are also true
because of automatic type conversion. When you do not want any type conversions to happen,
there are two additional operators: === and !==. The first tests whether a value is precisely equal
to the other, and the second tests whether it is not precisely equal.
 So "" === false is false as expected. 

 
A string pode ser construida com "", '' ou ``.  e as principais funções da string
console.log(Escola.indexOf('c')); da o numero do indice (0) da letra, sempre começa em 0 

console.log(Escola.substring(3)) vai apartir do indice 3 (d) pra frente, 
console.log(Escola.substring(0,3)) vai do indice 0 (c) até o indice 3 (d)
console.log(Escola.concat(' !')) varias variações de concatenação
regex? /\w/ só a primeira letra, /\w/g todas as letras, /\d/ só o primeiro digito /\d/g todos os digitos
o g significa global==  */
/* crase `
Olá pode ter quanto espaço quiser , ele n "quebra"

$ dolar {nomedavariavel} !` crase
consegue colocar expressões matematicas, 
console.log(`1+1= ${1+1}`) = 2
*/
/*var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);
 ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n);
 Isso é como se faz para remover itens, n define o número de itens a se remover,
 a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
 ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
 ['Nabo', 'Rabanete']
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
 
 const produto = {}
 console.log(produto.preço) //volta undefined porque o preço não foi definido,
 console.log(produto)
 produto.preço = 3.50
 console.log(produto)

 produto.preço = null
 console.log(produto.preço)
 */

 /* console.log(Math.floor(Math.random() * 100) + )
 var a = 3;
 b = -a
 console.log(b)

 let theN = Number("5");

 console.log('Your Number is the square root of ', +theN * theN) *
 
 funcionamento do if  ele me traz algo SE for verdadeiro, e vazio se falso
 if (1 + 1 == 2) {
     return console.log('sim')
 } 
 ou com a função else SENAO trazendo o resultado  se falso
 if (1 + 2 == 2)  {
     return console.log('sim')
 } else {
     console.log('não')
 }

Loops
The parentheses after a for keyword must contain two semicolons.
The part before the first semicolon initializes the loop, usually by defining a binding.
The second part is the expression that checks whether the loop must continue.
The final part updates the state of the loop after every iteration.
In most cases, this is shorter and clearer than awhile construct.

 
for (let line = "1"; line.length <= 8; line += "1")
    console.log(line);  desafio interessante construir um triangulo de #
    como foi feito, usou a formula for line = o que quero que apareça, porque é uma string
    usou o lenght inves de apenas um numero e o line += o que vc quer adicionar
    */