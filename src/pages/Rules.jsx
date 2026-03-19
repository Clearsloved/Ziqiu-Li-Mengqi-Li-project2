import React from 'react';
import './Rules.css';

function Rules() {
  return (
    <main>
      <div className="rules-container">
        {/* Page Title */}
        <div className="page-title">
          <h1>Sudoku Game Rules</h1>
          <p>Learn how to play Sudoku and master the game with simple rules and strategies.</p>
        </div>

        {/* Rules Content */}
        <div className="rules-content">
          <h2>Basic Rules of Sudoku</h2>

          <div className="rules-list">
            <h3>Game Objective</h3>
            <ul>
              <li><strong>FILL</strong> the grid with numbers so that each row, column, and 3×3 subgrid contains all digits from 1 to 9 exactly once.</li>
              <li><strong>REPETITION</strong> is <strong>NOT</strong> allowed in any row, column, or subgrid.</li>
            </ul>

            <h3>Standard Sudoku Rules</h3>
            <ul>
              <li><strong>Row Rule:</strong> Each row must contain the numbers 1-9 without repetition.</li>
              <li><strong>Column Rule:</strong> Each column must contain the numbers 1-9 without repetition.</li>
              <li><strong>Subgrid Rule:</strong> Each box must contain the numbers without repetition.</li>
              <li><strong>Unique Solution:</strong> A properly constructed Sudoku puzzle has only one possible solution.</li>
            </ul>

            <h3>Game Controls</h3>
            <ul>
              <li><strong>Number Selection:</strong> Click an empty cell and type a number.</li>
              <li><strong>Check Solution:</strong> Mistakes will be highlighted in red automatically!</li>
              <li><strong>Clear Cell:</strong> You can delete a number from a cell you entered.</li>
            </ul>

            <h3>Tips for Beginners</h3>
            <ul>
              <li><strong>Start with Easy Puzzles:</strong> Begin with 6×6 grids to understand the basic rules.</li>
              <li><strong>Look for Obvious Numbers:</strong> Find rows, columns, or boxes that are almost complete.</li>
              <li><strong>Practice Regularly:</strong> Sudoku skills improve with practice.</li>
              <li><strong>Don't Guess:</strong> Every number can be logically deduced from the given clues.</li>
            </ul>
          </div>
        </div>

        {/* Credits Section */}
        <div className="credits">
          <h2>Made By / Credits</h2>
          <p>This website was created for NEU Spring 2026 CS5610 Project</p>
          <p>Made by students Ziqiu Li And Mengqi Li</p>

          <div className="contact-links">
            <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" className="contact-link">
              <span>📧 Email</span>
            </a>
            <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" className="contact-link">
              <span>🐙 GitHub</span>
            </a>
            <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" className="contact-link">
              <span>💼 LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Rules;
