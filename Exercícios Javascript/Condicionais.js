let idade = 16;

/* if...else
A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else. */

if (idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

// Operador ==(= =) compara "resultado". Em quanto o ===( = = =), compara resulado e o tipo da variável.

let numero = "2";

if (numero == 2) {
    console.log('Neste exemplo o resultado foi verdadeiro porque o conteúdo da string é igual ao number.')
}

if (numero === 2) {
    console.log('O tipo da variável é um number.')
} else {
    console.log('O tipo da variável é uma string, para funcionar use o tipo number.')
}


let idadeAdulto = 17;

/*if (idadeAdulto >= 18) {
    if (idadeAdulto < 60) {
    console.log('Você é um adulto.')
    } else {
        console.log('Você é um idoso.')
    }
} else {
    console.log('Você é uma criança.')
} */

// && (e) todas as condicionais = true --> true + true = true
// || (ou) pelo menos uma condicional = true --> true + false = true
    
if (idadeAdulto < 18) {
    console.log("Você é uma criança.")
} else if (idadeAdulto >= 18 && idadeAdulto < 60 ) {
    console.log("Você é um adulto.")
} else if (idadeAdulto > 60){
    console.log("Você é um idoso.")
}