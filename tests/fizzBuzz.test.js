const fizzBuzz = require("../src/fizzBuzz");

describe("FizzBuzz Function", () => {
  let consoleSpy;

  // Antes de cada test, creamos un espía de consola
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  // Después de cada test, limpiamos el espía de consola
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("Debe imprimir números del 1 al 100 con las reglas de FizzBuzz", () => {
    fizzBuzz();

    // Espera 100 llamadas a console.log (una por cada número del 1 al 100)
    expect(consoleSpy).toHaveBeenCalledTimes(100);

    // Verificar algunos casos específicos
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1); // 1
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 2); // 2
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Fizz"); // Fizz
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 4); // 4
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "Buzz"); // Buzz
    expect(consoleSpy).toHaveBeenNthCalledWith(6, "Fizz"); // Fizz
    expect(consoleSpy).toHaveBeenNthCalledWith(10, "Buzz"); // Buzz
    expect(consoleSpy).toHaveBeenNthCalledWith(15, "FizzBuzz"); // FizzBuzz
    expect(consoleSpy).toHaveBeenNthCalledWith(30, "FizzBuzz"); // FizzBuzz
    expect(consoleSpy).toHaveBeenNthCalledWith(100, "Buzz"); // Buzz
  });

  test('Debe imprimir "Fizz" para múltiplos de 3', () => {
    fizzBuzz();

    // Casos para múltiplos de 3
    for (let i = 3; i <= 100; i += 3) {
      if (i % 5 !== 0) {
        // Asegurarse de no contar los múltiplos de 15
        expect(consoleSpy).toHaveBeenCalledWith("Fizz");
      }
    }
  });

  test('Debe imprimir "Buzz" para múltiplos de 5', () => {
    fizzBuzz();

    // Casos para múltiplos de 5
    for (let i = 5; i <= 100; i += 5) {
      if (i % 3 !== 0) {
        // Asegurarse de no contar los múltiplos de 15
        expect(consoleSpy).toHaveBeenCalledWith("Buzz");
      }
    }
  });

  test('Debe imprimir "FizzBuzz" para múltiplos de 3 y 5', () => {
    fizzBuzz();

    // Casos para múltiplos de 15
    for (let i = 15; i <= 100; i += 15) {
      expect(consoleSpy).toHaveBeenCalledWith("FizzBuzz");
    }
  });
});
