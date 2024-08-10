//Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
let num = prompt('Ingrese un numero');

function multiplo(num) {
    if (num % 5 == 0) {
        console.log(`el numero ${num} es multiplo de 5`)
    }
    else {
        console.log(`el numero ${num} NO es multiplo de 5`)
    }

}

multiplo(num);