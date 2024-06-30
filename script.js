// O alert é uma das mais simples caixas de diálogo
// sua principal função é mostrar ao usuário uma mensagem
// para chamar essa função, basta utilizarmos o código alert(), que receberá uma string
alert("Hello World.");

// console.log()
// Essa função é usada para imprimir mensagens de registro ou depuração no console do navegador ou no console do ambiente de desenvolvimento.
console.log("Hello World.");

// As variáveis ​​podem ser usadas para armazenar dados em um programa, como strings, números, objetos JSON ou valores booleanos. Em JavaScript, existem três tipos de variáveis ​​diferentes: var , let , e const.

// Use const tanto quanto possível, a menos que você precise redeclarar ou levantar uma variável . 

// Use let se estiver trabalhando com loops . 

// Use var apenas se:
//  -> você está trabalhando em código legado , 
//  -> você precisa de uma variável que possa redeclarar ou 
//  -> você precisa de uma variável acessível em qualquer lugar do programa (ou seja, globalmente)

// Tipos de váriaveis

// Strings são úteis para guardar dados que podem ser representados em forma de texto.
let nome = "Matheus";
// Number armazena números 
let idade = 21;
// Booleano: dados que apresentam apenas duas possibilidades de valores – true (verdadeiro) ou false (falso);
let logado = true;
// Array: matriz que pode ser composta por diferentes tipos de dados;
let funcoes = ["Duelista", "Iniciador", "Controlador", "Sentinela"];
// Objeto: tipo de dado que funciona como uma entidade independente, no qual há um conjunto de atributos aninhados a uma variável
let dados = {nome : "Matheus", idade : 21, altura: 172};

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof logado);
console.log(typeof funcoes);
console.log(typeof dados);