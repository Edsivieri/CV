console.log(Math.ceil(5.1))

let obj1 = {}
obj1.nome = 'Boka'//mais conveniente
//obj1['nome']= 'bola2' mais flexivel
console.log(obj1.nome)

function OBJ(nome){
    this.nome = nome;
    this.exec = function( ) {
        console.log('Execs')}
}
const obj2 = new OBJ('Cadeira','madeira')
console.log(obj2.nome)
const obj3 = new OBJ('mesa');
console.log(obj3.nome)

obj3.exec()
















/*

function encontreasoluçao(objetivo){
    function encontre(atual , historia){
        if(atual== objetivo){
            return historia;
        } else if (atual > objetivo){
            return null;
        } else{return encontre(atual +5,`(${historia}+5)`) || encontre(atual*3,`(${historia}*3)`)}
    }
    return encontre (2,"2")
}
console.log(encontreasoluçao(27));

*/