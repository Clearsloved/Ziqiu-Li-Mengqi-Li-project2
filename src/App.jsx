import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Context Provider
import { GameProvider } from './context/GameContext';

// Import All Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Selection from './pages/Selection';
import Rules from './pages/Rules';
import HighScores from './pages/HighScores';
import Login from './pages/Login';
import Register from './pages/Register';
import GameMode from './pages/GameMode';

function App() {
  return (
    <GameProvider>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Selection />} />
            <Route path="/games/normal" element={<GameMode mode="normal" />} />
            <Route path="/games/easy" element={<GameMode mode="easy" />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/scores" element={<HighScores />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;
