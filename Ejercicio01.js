//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function ParImpar() {
    let num = prompt('Por favor, ingrese un num');

    if (num % 2 == 0) {
        console.log('es par');
    }
    else {
        console.log('es impar');
    }
}

ParImpar();