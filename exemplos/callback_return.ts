function printaValoresNumericos(num1: number, num2: number) : void {
    console.log(num1 + num2);
}

function somarValoresNumericos(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number) : number {
    return numero * numero;
}

console.log(somarValoresNumericos(1, 3, aoQuadrado)); 