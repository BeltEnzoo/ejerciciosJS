//Crear una función que reciba un número por parámetro e imprima 
//por consola todos los números desde el 0 hasta llegar 
//a ese número.

let num = prompt('Ingrese un numero');
function Escalera(num) {
    for (let i = 0; i <= num; i ++ ) {
        console.log (i);
    }
}

Escalera(num);