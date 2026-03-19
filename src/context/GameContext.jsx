import React, { createContext, useState, useEffect } from 'react';
import { generateSudoku, checkConflicts, isGameWon } from '../utils/sudoku';

export const GameContext = createContext();

export function GameProvider({ children }) {
  // === BONUS POINT: Local Storage ===
  // Check if there is any saved game data in localStorage when the page is loaded
  const savedGame = (() => {
    try {
      const item = window.localStorage.getItem('sudoku_save_data');
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  })();

  // if yes, use it as the initial state
  const [board, setBoard] = useState(savedGame?.board || []);
  const [initialBoard, setInitialBoard] = useState(savedGame?.initialBoard || []);
  const [difficulty, setDifficulty] = useState(savedGame?.difficulty || 'normal');
  const [conflicts, setConflicts] = useState(savedGame?.conflicts || []);
  const [isSolved, setIsSolved] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  // === BONUS POINT: Local Storage ===
  // Every time the core state changes, save it to localStorage
  useEffect(() => {
    // Only save if the game is not over and the board has data
    if (!isSolved && board.length > 0) {
      window.localStorage.setItem('sudoku_save_data', JSON.stringify({
        board,
        initialBoard,
        difficulty,
        conflicts
      }));
    }
  }, [board, initialBoard, difficulty, conflicts, isSolved]);

  // Handle player input
  const handleCellInput = (row, col, value) => {
    if (isSolved) return;
    if (initialBoard[row][col] !== 0) return;

    const num = parseInt(value, 10);
    const maxVal = difficulty === 'easy' ? 6 : 9;

    if (value === '' || (num >= 1 && num <= maxVal)) {
      const newBoard = board.map(r => [...r]);
      newBoard[row][col] = value === '' ? 0 : num;
      setBoard(newBoard);

      const newConflicts = checkConflicts(newBoard, maxVal);
      setConflicts(newConflicts);

      if (isGameWon(newBoard, maxVal)) {
        setIsSolved(true);
        // === BONUS POINT: Local Storage ===
        // Remove saved game data when the game is won
        window.localStorage.removeItem('sudoku_save_data');
      }
    }
  };

  // Reset game to initial state
  const resetGame = () => {
    setBoard(initialBoard.map(row => [...row]));
    setConflicts([]);
    setIsSolved(false);
    setSelectedCell(null);
    // === BONUS POINT: Local Storage ===
    // Remove saved game data when the game is reset
    window.localStorage.removeItem('sudoku_save_data');
  };

  const newGame = (newDifficulty) => {
    setDifficulty(newDifficulty);
    const newPuzzle = generateSudoku(newDifficulty);
    setInitialBoard(newPuzzle.map(r => [...r]));
    setBoard(newPuzzle.map(r => [...r]));
    setConflicts([]);
    setIsSolved(false);
    setSelectedCell(null);
  };

  const value = {
    board,
    initialBoard,
    isSolved,
    difficulty,
    selectedCell,
    setSelectedCell,
    conflicts,
    handleCellInput,
    resetGame,
    newGame
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}
