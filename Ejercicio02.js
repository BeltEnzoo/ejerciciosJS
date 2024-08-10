//Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, 
//y si ninguno lo es, indicar por consola que son iguales.
let num1 = prompt('Ingrese num1');
let num2 = prompt('Ingrese num2');

function NumMayor(num1, num2) {
    if (num1 < num2) {
        console.log(`El numero 2 ${num2} es mayor`)
    }
    else if (num1 > num2) {
        console.log(`El numero 1 ${num1} es mayor`)
    }
    else if(num1 = num2) {
        console.log('Los numeros son iguales')
    }
}

NumMayor(num1, num2);