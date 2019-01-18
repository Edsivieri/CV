/* A string pode ser construida com "", '' ou ``.  e as principais funções da string
console.log(Escola.indexOf('c')); da o numero do indice (0) da letra, sempre começa em 0 

console.log(Escola.substring(3)) vai apartir do indice 3 (d) pra frente, 
console.log(Escola.substring(0,3)) vai do indice 0 (c) até o indice 3 (d)
console.log(Escola.concat(' !')) varias variações de concatenação
regex? /\w/ só a primeira letra, /\w/g todas as letras, /\d/ só o primeiro digito /\d/g todos os digitos
o g significa global==  
console.log('ana, Pedro, carlos, joao'.split(',',3)) transforma num array
*/
let Escola = 'coder'
console.log(Escola.charAt(0));
console.log(Escola.charCodeAt(4));
console.log(Escola.indexOf('c'));
console.log(Escola.concat(' !'))
console.log(Escola.substring(0, 2))
console.log(Escola.replace(/\d/g,'d'))
console.log('ana, Pedro, carlos, joao'.split(',',3))


var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

var myStr = ("FirstLine\n\\SecondLine\rThirdLine");
 // Change this line

console.log(myStr)
