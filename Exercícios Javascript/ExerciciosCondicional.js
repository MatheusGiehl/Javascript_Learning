// Substitua o @ pela condicional correta para que o resultado seja true.
let x = 10;
let y = 5;
// console.log(x @ y)
console.log(x != y)

// Substitua o @ pela condicional correta para que o resultado seja false.
let w = "10";
let z = 10;
// console.log(w @ z)
console.log(w === z)

// Substitua o @ pela condicional correta para que o resultado seja true.
let a = 10;
let b = 5;
//console.log(a @ b)
console.log(a > b)

// Crie uma condicional para verificar se o preço da carne está barato ou caro. Até R$ 45,00 está barato.
let preco = 40.3;
let caroOuBarato = preco <= 45;

if(caroOuBarato) {
    console.log('O preço da carne está barato.')
}  else {
    console.log('O preço da carne está caro.')
}