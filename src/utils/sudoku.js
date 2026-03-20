// To Verify if the current board has any conflicts (same number in same row/col/subgrid)
export function checkConflicts(board, size) {
  const conflicts = [];
  const subgridSizeH = size === 9 ? 3 : 2;
  const subgridSizeW = 3;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const val = board[r][c];
      if (!val) continue;

      let hasConflict = false;

      // check row and column
      for (let i = 0; i < size; i++) {
        if (i !== c && board[r][i] === val) hasConflict = true;
      }
      for (let i = 0; i < size; i++) {
        if (i !== r && board[i][c] === val) hasConflict = true;
      }

      // check subgrid
      const startR = Math.floor(r / subgridSizeH) * subgridSizeH;
      const startC = Math.floor(c / subgridSizeW) * subgridSizeW;
      for (let i = 0; i < subgridSizeH; i++) {
        for (let j = 0; j < subgridSizeW; j++) {
          const checkR = startR + i;
          const checkC = startC + j;
          if ((checkR !== r || checkC !== c) && board[checkR][checkC] === val) {
            hasConflict = true;
          }
        }
      }

      if (hasConflict) {
        conflicts.push(`${r}-${c}`);
      }
    }
  }
  return conflicts;
}

// check whether the board is fully filled and has no conflicts
export function isGameWon(board, size) {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!board[r][c]) return false; // still have empty cell
    }
  }
  return checkConflicts(board, size).length === 0;
}

// Game board banks for easy and normal mode
const EASY_BOARDS = [
  [
    [0, 2, 0, 6, 5, 3],
    [3, 6, 5, 4, 0, 0],
    [0, 3, 6, 5, 2, 0],
    [0, 0, 2, 0, 0, 0],
    [0, 4, 3, 0, 6, 0],
    [6, 0, 1, 2, 3, 0]
  ],
  [
    [0, 4, 0, 0, 5, 2],
    [0, 1, 2, 0, 0, 0],
    [0, 6, 5, 0, 1, 3],
    [4, 3, 0, 5, 2, 0],
    [1, 0, 0, 0, 3, 5],
    [0, 5, 3, 0, 4, 1]
  ],
  [
    [0, 5, 0, 1, 0, 3],
    [1, 0, 3, 0, 5, 0],
    [0, 3, 1, 0, 6, 4],
    [5, 0, 0, 2, 0, 0],
    [0, 1, 2, 0, 4, 0],
    [6, 0, 0, 3, 0, 2]
  ],
  [
    [0, 1, 3, 5, 0, 0],
    [5, 0, 0, 0, 1, 3],
    [3, 2, 0, 6, 0, 0],
    [0, 0, 4, 0, 2, 1],
    [1, 0, 2, 4, 0, 5],
    [0, 6, 0, 0, 3, 0]
  ]
];

const NORMAL_BOARDS = [
  [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ],
  [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
  ],
  [
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [7, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 1, 2, 9, 5],
    [0, 0, 7, 1, 2, 0, 6, 0, 0],
    [5, 0, 0, 7, 0, 3, 0, 0, 8],
    [0, 0, 6, 0, 9, 5, 7, 0, 0],
    [9, 1, 4, 6, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 3, 7],
    [8, 0, 0, 5, 1, 2, 0, 0, 4]
  ],
  [
    [0, 2, 0, 6, 0, 8, 0, 0, 0],
    [5, 8, 0, 0, 0, 9, 7, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [3, 7, 0, 0, 0, 0, 5, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 8, 0, 0, 0, 0, 1, 3],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 9, 8, 0, 0, 0, 3, 6],
    [0, 0, 0, 3, 0, 6, 0, 9, 0]
  ]
];

export function generateSudoku(mode) {
  const pool = mode === 'easy' ? EASY_BOARDS : NORMAL_BOARDS;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  return picked.map(row => [...row]);
}
