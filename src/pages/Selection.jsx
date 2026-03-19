import React from 'react';
import { Link } from 'react-router-dom';
import './Selection.css';

function Selection() {
  return (
    <main>
      <div className="selection-container">
        {/* Page Title */}
        <div className="page-title">
          <h1>Select a Game</h1>
          <p>Choose from our collection of challenging games. Have fun!</p>
        </div>

        {/* Games Grid */}
        <div className="games-grid">
          {/* Game 1 */}
          <Link to="/games/normal" className="game-card">
            <div className="game-icon">
              <img src="/assets/icons/game1.png" alt="Sudoku Game 1" />
            </div>
            <div className="game-info">
              <h3>Sudoku Normal Game 1</h3>
              <p>Play our classic 9x9 normal difficulty game.</p>
              <div className="author-info">By: Ziqiu Li</div>
            </div>
          </Link>

          {/* Game 2 */}
          <Link to="/games/easy" className="game-card">
            <div className="game-icon">
              <img src="/assets/icons/game2.png" alt="Sudoku Game 2" />
            </div>
            <div className="game-info">
              <h3>Sudoku Easy Game 1</h3>
              <p>Start easy with our 6x6 grid game.</p>
              <div className="author-info">By: Mengqi Li</div>
            </div>
          </Link>

          {/* Game 3 */}
          <Link to="/games/normal" className="game-card">
            <div className="game-icon">
              <img src="/assets/icons/game3.png" alt="Sudoku Game 3" />
            </div>
            <div className="game-info">
              <h3>Sudoku Normal Game 2</h3>
              <p>Another normal difficulty 9x9 game.</p>
              <div className="author-info">By: Ziqiu Li</div>
            </div>
          </Link>

          {/* Game 4 */}
          <Link to="/games/easy" className="game-card">
            <div className="game-icon">
              <img src="/assets/icons/game4.png" alt="Sudoku Game 4" />
            </div>
            <div className="game-info">
              <h3>Sudoku Easy Game 2</h3>
              <p>Another easy difficulty 6x6 game.</p>
              <div className="author-info">By: Mengqi Li</div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Selection;
