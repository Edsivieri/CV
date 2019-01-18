let tamanho = 8;
let mesa = "";
for (let y = 0; y < tamanho; y++) {
    for (let x = 0; x < tamanho; x++) {
        if ((x + y) % 2 == 0) {
            mesa += " ";
        } else {
            mesa += "@"
        }
       
    }mesa += "\n"; 
}

console.log(mesa)