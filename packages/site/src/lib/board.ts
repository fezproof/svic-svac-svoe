export enum GameValue {
	X = 'X',
	O = 'O',
	_ = ' '
}

export type GameBoard = [
	[GameValue, GameValue, GameValue],
	[GameValue, GameValue, GameValue],
	[GameValue, GameValue, GameValue]
];

export const ascii = (board: GameBoard): string => {
	return `
     |     |     
  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}  
_____|_____|_____
     |     |     
  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}  
_____|_____|_____
     |     |     
  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}  
     |     |     `;
};

export const initBoard = (): GameBoard => [
	[GameValue._, GameValue._, GameValue._],
	[GameValue._, GameValue._, GameValue._],
	[GameValue._, GameValue._, GameValue._]
];

export const getBoardValue = (board: GameBoard, row: 1 | 2 | 3, column: 1 | 2 | 3): GameValue => {
	return board[row - 1][column - 1];
};

export const setBoardValue = (
	board: GameBoard,
	row: 1 | 2 | 3,
	column: 1 | 2 | 3,
	value: GameValue
): void => {
	board[row - 1][column - 1] = value;
};
