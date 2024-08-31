/**
 * Ejercicio: FizzBuzz
 *
 * Consigna:
 * Escribe una función llamada `fizzBuzz` que imprima los números del 1 al 100 en la consola.
 * Pero para múltiplos de tres, debe imprimir "Fizz" en lugar del número y para los múltiplos de cinco imprimir "Buzz".
 * Para números que son múltiplos de ambos tres y cinco, debe imprimir "FizzBuzz".
 *
 * Ejemplos:
 * 1 -> 1
 * 2 -> 2
 * 3 -> Fizz
 * 4 -> 4
 * 5 -> Buzz
 * 6 -> Fizz
 * ...
 * 15 -> FizzBuzz
 * ...
 * 100 -> Buzz
 */

function fizzBuzz() {
	// Escriba su ejercicio aquí
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

module.exports = fizzBuzz;
