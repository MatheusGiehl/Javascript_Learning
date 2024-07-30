function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado)
}

somar(10, 15)

// Entrada -> Processamento -> Saída.
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

 let completo = nomeCompleto("Matheus", "Giehl")

 console.log(completo)

//  Retorno condicional. 

function maiorDeIdade(idade) {
    if (idade >=18) {
        return true;
    } else {
        return false;
    }
}

const verificar = maiorDeIdade(18);

if (verificar) {
    console.log('É maior de idade.');
} else {
    console.log('É menor de idade.')
}