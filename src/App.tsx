import React from 'react';
import { GameProvider } from './context/GameContext';
import Layout from './components/Layout';
import GameMenu from './components/GameMenu';
import GameBoard from './components/GameBoard';
import GameResults from './components/GameResults';
import './App.css';

/**
 * Main App Component
 * 
 * The root component that pulls together all the pieces of the Fun with Flags game.
 * Handles the overall structure and state management via context.
 */
const App: React.FC = () => {
  return (
    <div className="App">
      {/* Wrap the entire app in the GameProvider for state management */}
      <GameProvider>
        {/* Layout provides consistent header and footer */}
        <Layout>
          {/* Game components rendered based on their internal conditions */}
          <GameMenu />
          <GameBoard />
          <GameResults />
        </Layout>
      </GameProvider>
    </div>
  );
};

export default App;
