/*o bloco em si n faz diferença, outras linguagems tem escopo até onde aquela variavel é acessivel, 
var se comporta diferente de let e de const var se comporta um pouco diferente de let econst em relação 
aos seus escopos.
Lista os escopos respeitados pelos tipos de variáveis:
var: -Global -Função
let e const:
-Bloco -Global -Função
var pode estar dentro ou fora do bloco, que nao seja uma funçao ficara visivel de forma global

*/
{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)

            }
        }
    }
}
console.log(sera)
function teste(){

    var local = 123
console.log(local)
}
teste()
//ocorre um erro porque a var esta dentro de uma função
const teste1 = () =>{
    var local1 = 123
    console.log(local1)
}
teste1()

