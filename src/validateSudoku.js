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
	const rows = new Array(9).fill().map(() => new Set());
	const cols = new Array(9).fill().map(() => new Set());
	const boxes = new Array(9).fill().map(() => new Set());

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const num = board[i][j];
			if (num === ".") continue;

			const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

			if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
				return false;
			}

			rows[i].add(num);
			cols[j].add(num);
			boxes[boxIndex].add(num);
		}
	}

	return true;
}

module.exports = isValidSudoku;
