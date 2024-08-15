// A contagem no array começa na posição 0.
let tipos = [
    'string',
    30, 
    true
]
// Por exemplo se eu quiser o boolean true, busco pela posição 2 segindo essa lógica. 
console.log(tipos[2]);

let quantidadeDeItens = [
    1,
    2,
    3,
    4,
    5
]



// Adicionar itens.
quantidadeDeItens.push(6, 7)

// Remover o último item 
quantidadeDeItens.pop()
// Remover o primeiro item
quantidadeDeItens.shift()

console.log(`Esse array tem : ${quantidadeDeItens.length} itens.`)
console.log(quantidadeDeItens)


// Exercícios com arrays 
// 1. No array abaixo, qual o seletor de ferrari ?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
//R.:
console.log('1. ' + carros[1])

// 2. Troque a Ferrari por Audi.
//R.: 
carros[1] = 'Audi'
console.log(carros)

//3. Adicione Volvo a lista.
//R.:
carros.push('Volvo')
console.log('3. Lista com Volvo')
console.log(carros)

//4. Exiba quantos itens tem no array.
//R.:
console.log(`Esta lista possui ${carros.length} carros.`)