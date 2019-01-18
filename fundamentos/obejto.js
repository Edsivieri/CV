/*{} representam um objeto, ele pode ser vazio, é possivel definir os atributos dinamicamente,
pode se reutilizar os mesmos nomes pra chaves diferentes

*/
const prod1 = {}
prod1.nome = 'Celular Jx' //dinamicamente estamos nomeando o produto1
prod1.preço = 4776.55
prod1['Desconto de'] = .10
console.log(prod1)

const roupas = {
    Camisas: [{
        nome: "Polo Blue",
        preço: 149.00
    }, {
        nome: 'Polo Red',
        preço: 50.00
    }]
}
console.log(roupas.Camisas[0])

const prod2 = {
    nome: 'Calça Jeans',
    preço: 80.50
}
console.log(prod2)
let ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "ca": "officers"
};

// Only change code below this line.
myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"],
    "ca": ["postman"]

};
console.log(myDog)

let myCat = { 
    "Name": "Lucy",
    legs: 4,
    tails: 1,
}
console.log(myCat.tails)