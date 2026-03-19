import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import SudokuCell from './SudokuCell';

export default function SudokuBoard() {
  const { board, initialBoard, difficulty, selectedCell, setSelectedCell, handleCellInput, conflicts } = useContext(GameContext);
  
  const size = difficulty === 'easy' ? 6 : 9;
  const gridCells = [];

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const isReadOnly = initialBoard[r] && initialBoard[r][c] !== 0;
      const val = board[r] ? board[r][c] : 0;
      const isSelected = selectedCell && selectedCell.r === r && selectedCell.c === c;
      const isError = conflicts.includes(`${r}-${c}`);

      gridCells.push(
        <SudokuCell 
          key={`${r}-${c}`}
          value={val === 0 ? '' : val}
          isReadOnly={isReadOnly}
          isSelected={isSelected}
          isError={isError}
          onClick={() => {
            if (!isReadOnly) setSelectedCell({ r, c });
          }}
          onChange={(newVal) => handleCellInput(r, c, newVal)}
        />
      );
    }
  }

  return (
    <div className={`sudoku-grid difficulty-${difficulty}`}>
      {gridCells}
    </div>
  );
}
