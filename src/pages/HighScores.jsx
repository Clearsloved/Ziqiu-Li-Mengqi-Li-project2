import React from 'react';
import './HighScores.css';

function HighScores() {
  return (
    <main>
      <div className="high-scores-container">
        {/* Page Title */}
        <div className="page-title">
          <h1>Sudoku High Scores</h1>
          <p>Top players and their completed Sudoku puzzles. Can you beat their scores?</p>
        </div>

        {/* High Scores Content */}
        <div className="high-scores-content">
          <h2>Global Leaderboard</h2>

          <div className="high-scores-list">
            <h3>Top 10 Players</h3>
            <ul>
              <li>
                <span className="rank-badge gold">1st</span>
                <div className="player-info">
                  <span className="player-name">SudokuMaster42</span>
                </div>
                <span className="player-score">1,247 puzzles</span>
              </li>
              <li>
                <span className="rank-badge silver">2nd</span>
                <div className="player-info">
                  <span className="player-name">NumberNinja</span>
                </div>
                <span className="player-score">987 puzzles</span>
              </li>
              <li>
                <span className="rank-badge bronze">3rd</span>
                <div className="player-info">
                  <span className="player-name">GridGuru</span>
                </div>
                <span className="player-score">856 puzzles</span>
              </li>
              <li>
                <span className="rank-badge other">4th</span>
                <div className="player-info">
                  <span className="player-name">PuzzlePro</span>
                </div>
                <span className="player-score">732 puzzles</span>
              </li>
              <li>
                <span className="rank-badge other">5th</span>
                <div className="player-info">
                  <span className="player-name">LogicLegend</span>
                </div>
                <span className="player-score">689 puzzles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HighScores;
