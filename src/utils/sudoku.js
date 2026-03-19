// 这是一个给新手使用的小型工具库，避免给 React 组件内增加太多复杂的算法负担。

// 验证棋盘上是否有冲突，返回所有冲突格子的坐标 [{r,c}, ...]
export function checkConflicts(board, size) {
  const conflicts = [];
  const subgridSizeH = size === 9 ? 3 : 2; // 行方向的宫格大小
  const subgridSizeW = 3; // 列方向的宫格大小

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const val = board[r][c];
      if (!val) continue;

      let hasConflict = false;

      // 检查行
      for (let i = 0; i < size; i++) {
        if (i !== c && board[r][i] === val) hasConflict = true;
      }
      // 检查列
      for (let i = 0; i < size; i++) {
        if (i !== r && board[i][c] === val) hasConflict = true;
      }
      // 检查宫
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

// 检查是否全部填满且完全没有冲突
export function isGameWon(board, size) {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!board[r][c]) return false; // 还有空
    }
  }
  return checkConflicts(board, size).length === 0;
}

// 为了简化，我们直接内置两个合法谜题作为题库，newGame 时随机抽取
const EASY_BOARDS = [
  // 题库 1
  [
    [1, 2, 0, 4, 0, 6],
    [4, 0, 6, 0, 2, 0],
    [2, 0, 1, 5, 0, 4],
    [5, 0, 4, 2, 0, 1],
    [0, 1, 0, 0, 4, 5],
    [6, 0, 5, 3, 0, 0]
  ],
  // 题库 2
  [
    [1, 0, 3, 0, 5, 0],
    [0, 5, 0, 1, 0, 3],
    [2, 0, 1, 0, 6, 0],
    [0, 6, 0, 2, 0, 1],
    [3, 0, 2, 0, 4, 0],
    [0, 4, 0, 3, 0, 2]
  ],
  // 题库 3
  [
    [0, 5, 0, 1, 0, 3],
    [1, 0, 3, 0, 5, 0],
    [0, 3, 1, 0, 6, 4],
    [5, 0, 0, 2, 0, 0],
    [0, 1, 2, 0, 4, 0],
    [6, 0, 0, 3, 0, 2]
  ],
  // 题库 4
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
  // 题库 1
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
  // 题库 2
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
  // 题库 3
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
  // 题库 4
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
  // 深拷贝一个题库中的题目作为新题目
  const pool = mode === 'easy' ? EASY_BOARDS : NORMAL_BOARDS;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  return picked.map(row => [...row]);
}
