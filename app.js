// Función para comprobar si el valor ingresado es válido
function solicitarNumero() {
    let num = parseInt(prompt("Ingrese un número por favor: "));
    if (isNaN(num)) {
        console.log("Por favor ingrese un número válido.");
        return solicitarNumero();
    }
    return num;
}

let num = solicitarNumero();

// Función para calcular el factorial
function factorial(num) {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

// Muestra el resultado
let resultadoFactorial = factorial(num);
console.log(`El factorial de ${num} es: ${resultadoFactorial}`);