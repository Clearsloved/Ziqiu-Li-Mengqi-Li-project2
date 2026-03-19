import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Welcome Section */}
      <section className="welcome">
        <h1>Welcome to Sudoku Master</h1>
        <p>
          Challenge your mind with the world's most popular puzzle game. Test your logic, improve your skills, and
          climb the leaderboards!
        </p>
        <Link to="/games" className="btn">Start Playing Now</Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="/assets/icons/Brain-Training.png" alt="Brain Training" style={{ width: '48px', height: '48px' }} />
          </div>
          <h3>Brain Training</h3>
          <p>Improve your logical thinking and problem-solving skills with daily Sudoku challenges.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src="/assets/icons/Track-Progress.png" alt="Track Progress" style={{ width: '48px', height: '48px' }} />
          </div>
          <h3>Track Progress</h3>
          <p>Monitor your improvement with detailed statistics and personal best records.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src="/assets/icons/Compete-Globally.png" alt="Compete Globally" style={{ width: '48px', height: '48px' }} />
          </div>
          <h3>Compete Globally</h3>
          <p>Challenge players from around the world and climb the global leaderboards.</p>
        </div>
      </section>

      {/* Sudoku History */}
      <section className="sudoku-history">
        <h2>
          <img src="/assets/icons/history.png" alt="History" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
          About Sudoku
          <img src="/assets/icons/history.png" alt="History" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
        </h2>
        <p>Sudoku is a logic-based number puzzle that originated in Switzerland and gained popularity in Japan before spreading worldwide.</p>
        <p>The name "Sudoku" means "single number" in Japanese. The puzzle consists of a 9×9 grid divided into nine 3×3 subgrids.</p>
        <p>To solve a Sudoku puzzle, each row, column, and subgrid must contain all digits from 1 to 9 without repetition.</p>
        <p>Sudoku puzzles are classified by difficulty levels, with "Easy" and "Hard" being the most common categories.</p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Play?</h2>
        <p>Join thousands of players who are already enjoying Sudoku Master. Whether you're a beginner or an expert, we have puzzles for every skill level.</p>
        <div className="cta-buttons">
          <Link to="/games" className="btn">Browse Games</Link>
          <Link to="/register" className="btn">Create Account</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
