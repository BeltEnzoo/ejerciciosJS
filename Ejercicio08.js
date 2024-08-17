//Crea una función que reciba un array de números y un número por
//parámetro e imprima por consola cada número del array multiplicado 
//por el número pasado por parámetro

const array = [1,2,3,4,5,6,7];
let num = prompt('ingrese un numero');

function Ejer7(array, num) {
    for (let i = 0; i < array.length; i ++) {
        let resultado = (array[i] * num) 
        console.log(resultado);
    }
}

Ejer7(array, num);