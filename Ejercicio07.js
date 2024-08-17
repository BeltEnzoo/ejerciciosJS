//Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
//menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function impresion(array) {
    if (array.length !== 10) {
        console.error('no tiene 10 números.');
        return;
    }

    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}

impresion(array);
