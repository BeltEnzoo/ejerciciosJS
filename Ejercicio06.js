//Crear una función que reciba un array por parámetro
//e imprima por consola todos los valores de ese array.

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const array = [100, 200, 300, 400, 500];
imprimirArray(array);
