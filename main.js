//criar funções para cada tipo de operação matemática: adição, subtração, multiplicação e divisão
function adicao(a, b) {
    return a+b;
}

function subtracao(a,b) {
    return a-b;
}

function multiplicacao(a,b) {
    return a*b;
}

function divisao(a,b) {
    if(b !== 0) {
        return a/b;
    } else {
    return "Erro: divisão por zero!";
    }
}
//criar a função da calculadora
function calculadora(operacao, a, b) {
    switch(operacao) {
        case 'soma':
            return adicao(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            return "Operação inválida!";
    }
}
let a = parseFloat(prompt('Digite um número'));
let b = parseFloat(prompt('Digite outro número'));
let operacao = prompt('Digite quais as opções desejadas: soma, subtracao, multiplicacao ou divisao: ');
let resultado = calculadora(operacao, a, b);
console.log(resultado);