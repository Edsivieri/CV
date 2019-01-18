//par nome/ valor
const saudação = "Opá" // contexto lexico 1, 
function exec() {
    const saudação = 'Olá'
    return saudação

}

// Objetos sao grupos aninhados de pares nome/valor
let Cliente_01 = {
    Nome: "Caio",
    Idade: 25,
    Escola: "Dante",
    Endereço: {
        logradouro: "Rua Mairiporã",
        numero: 123
    }
}
console.log(Cliente_01)

let size = 16;
let board = "";
for (let y = 0; y < size; y++)

{
    for (let x = 0; x < size; x++) {
        if ((x + y) % 4 == 0) {
            board += " ";
        } else {
            board += "♀";
        }

    }
    board += "\n";
}
console.log(board)

console.log('The Past Says',Past());
    function Past(){
        return "Things were great";
}

