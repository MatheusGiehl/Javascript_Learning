/* 
Calcule a porcentagem entre 2 números.
Exemplo : 25% de 40 é .
Fórmula da porcentagem : (y / x) * 100
Uso da função:

let x = 40;
let y = 10;
let pctg = calcPctg(x, y);
console.log(`${pctg}% de ${x} é ${y}`)
*/

function calcPctg(x, y) {
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pctg = calcPctg(x, y);
console.log(`${pctg}% de ${x} é ${y}.`)

/* 
Calcule o preço do imóvel 
- m2 = 3,000
- 1 quarto = 1x o valor m2
- 2 quartos = 1.2 x o valor m2 
- 3 quartos = 1.5 x o valor m2
*/

function calcularImovel(tamanho,quartos) {
    if (quartos === 1) {
        return tamanho * 3000 ;
    } else if (quartos === 2) {
        return tamanho * (3000 * 1.2);
    } else if (quartos === 3) {
        return tamanho * (3000 * 1.5);
    } 
}

let tamanho = 63;
let quartos = 2;

let preco = calcularImovel(tamanho,quartos);
console.log("O preço do apartamento é: " + preco)