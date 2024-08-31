/**
 * Ejercicio: Validación de Sudoku
 *
 * Consigna:
 * Escribe una función llamada `isValidSudoku` que determine si un tablero de Sudoku de 9x9 es válido.
 * Un tablero de Sudoku es válido si:
 * - Cada fila contiene los números del 1 al 9 sin repetir.
 * - Cada columna contiene los números del 1 al 9 sin repetir.
 * - Cada uno de los 9 subcuadrantes de 3x3 contiene los números del 1 al 9 sin repetir.
 * - El tablero de Sudoku no está vacío.
 *
 * Nota:
 * - El tablero de Sudoku puede tener algunos espacios vacíos representados por el carácter '.'.
 * - Un tablero válido no significa necesariamente que sea solucionable.
 *
 * Ejemplos:
 *
 * isValidSudoku([
 *   ["5","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]) -> true
 *
 * isValidSudoku([
 *   ["8","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]) -> false
 *
 * Restricciones:
 * - La entrada es una matriz 9x9.
 */

function isValidSudoku(board) {
	// Escriba su ejercicio aquí
}

module.exports = isValidSudoku;
