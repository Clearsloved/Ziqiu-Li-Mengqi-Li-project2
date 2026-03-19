import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">Sudoku Master</Link>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle-checkbox" />
        <label htmlFor="nav-toggle" className="nav-toggle" aria-label="Toggle navigation">
          <img src="/assets/icons/More.png" alt="Menu" className="nav-toggle-icon" />
        </label>
        <ul className="nav-links">
          <li>
            <NavLink to="/">
              <img src="/assets/icons/home.png" alt="Home" className="nav-icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/games">
              <img src="/assets/icons/Games.png" alt="Games" className="nav-icon" /> Games
            </NavLink>
          </li>
          <li>
            <NavLink to="/games/normal">
              <img src="/assets/icons/Hard-game.png" alt="Hard Game" className="nav-icon" /> Hard Game
            </NavLink>
          </li>
          <li>
            <NavLink to="/games/easy">
              <img src="/assets/icons/Easy-game.png" alt="Easy Game" className="nav-icon" /> Easy Game
            </NavLink>
          </li>
          <li>
            <NavLink to="/rules">
              <img src="/assets/icons/Rules.png" alt="Rules" className="nav-icon" /> Rules
            </NavLink>
          </li>
          <li>
            <NavLink to="/scores">
              <img src="/assets/icons/High-Scores.png" alt="High Scores" className="nav-icon" /> High Scores
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <img src="/assets/icons/Log-in.png" alt="Login" className="nav-icon" /> Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register">
              <img src="/assets/icons/Register.png" alt="Register" className="nav-icon" /> Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
