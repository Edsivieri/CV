/* explicação do desafio do tabuleiro

*/ 
let tamanho = 12;// tamanho da mesa
let board = "";// variavel da mesa
for(let y = 0; y < tamanho; y++)//primeira linha de for dando os valores de y
// e como y é menor que o tamanho
{for(let x= 0; x < tamanho; x++)
    //segunda linha de for dando os valores de x
    // e como x é menor que o tamanho
    {if((x+y)%2 == 0)// somatorio de x+ y divido por 2 que sobre resto 0 o numero altera o espaçamento
        {board += "  ";//se for verdade a mesa adiciona um espaço
    } else {board += "#";//se for falso a mesa adiciona um simbolo
    }}
            board += "\n";//para criar os espaçamentos usando uma formula regex que adiciona uma linha
    }
console.log(board)      