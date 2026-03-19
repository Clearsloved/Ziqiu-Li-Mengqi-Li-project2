import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../context/GameContext';
import SudokuBoard from '../components/SudokuBoard';
import './GameMode.css';
import Timer from '../components/Timer';
export default function GameMode({ mode }) {
  const { newGame, resetGame, difficulty, isSolved, selectedCell, handleCellInput, board } = useContext(GameContext);
const [resetTrigger, setResetTrigger] = useState(0);
  useEffect(() => {
    /*
    Add another conidtion: || board.length === 0 to fix a WEIRD BUG:

    When the program starts, hard and easy game page act normally. After refreshing the page and navigating to the Normal game page, 
    the board appears empty and user inputs are not displayed. Clicking "Reset" restores the board to its correct state. 
    This issue does not occur on the Easy game page. I have no idea why. After ask help 
    from AI, here is why: when i refresh the page, the GameContext will be reset, and because we need to 
    give the difficulty a default value, I wrote: const [difficulty, setDifficulty] = useState(savedGame?.difficulty || 'normal');
    therefore, the difficulty is normal (which is hard game). However, when I refresh the page,
    at this time, if I go to easy game page, the difficultt != mode is true, so it will call newGame(mode), 
    which means it will generate a new sudoku puzzle with difficulty 'easy'. And that's why the easy game page
    acts normally. But for the hard game page, the difficulty is normal (which is hard game), and the initialBoard is empty, 
    so the difficultt != mode is false, so the program won't call newGame(mode), and the board will be empty. To fix this, 
    just need to add a new condition: || board.length === 0. Because this condition ensures that a new puzzle game will be generated 
    whenever the board is empty, regardless of the current difficulty value.
    */
    if (difficulty !== mode || board.length === 0) {
      newGame(mode);
      setResetTrigger(prev => prev + 1);
    }
  }, [mode, difficulty, board.length, newGame]);

  const handleNumPadClick = (num) => {
    if (selectedCell) {
      handleCellInput(selectedCell.r, selectedCell.c, num);
    }
  };

  const onReset = () => {
    resetGame();
    setResetTrigger(prev => prev + 1);
  };

  const onNewGame = () => {
    newGame(mode);
    setResetTrigger(prev => prev + 1);
  };

  return (
    <main>
      <div className="game-container">
        <div className="page-title">
          <h1>{mode === 'easy' ? 'Easy' : 'Hard'} Sudoku Game</h1>
          <p>{mode === 'easy' ? '6×6 grid with pre-filled numbers' : '9×9 grid with pre-filled numbers'}</p>
        </div>

        {isSolved && (
          <div style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px', textAlign: 'center', marginBottom: '15px', borderRadius: '5px' }}>
            🎉 Congratulations! You have solved the puzzle! 🎉
          </div>
        )}

        <Timer isPlaying={!isSolved} resetTrigger={resetTrigger} />

        <SudokuBoard />

        <div className="game-controls">
          <button className="control-btn" onClick={onReset}>Reset</button>
          <button className="control-btn" onClick={onNewGame}>New Game</button>
        </div>

        <div className="number-pad">
          {[1, 2, 3, 4, 5, 6, ...(mode === 'normal' ? [7, 8, 9] : [])].map(num => (
            <button key={num} className="number-btn" onClick={() => handleNumPadClick(num)}>
              {num}
            </button>
          ))}
          <button className="number-btn" style={{ width: '100px' }} onClick={() => handleNumPadClick('')}>
            Clear
          </button>
        </div>
      </div>
    </main>
  );
}
