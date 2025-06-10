/**
 * GameMenu Component
 * 
 * Provides the interface for starting a new game, selecting difficulty,
 * game mode, and number of rounds.
 */
import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { GameDifficulty, GameMode } from '../types';
// Import the logo from assets
import logo from '../assets/images/logo.png';

/**
 * GameMenu Component
 * 
 * Allows players to configure and start a new game.
 */
const GameMenu: React.FC = () => {
  // Access game state and functions from context
  const { startGame, gameState, gameStats } = useGame();
  
  // Local state for form fields
  const [difficulty, setDifficulty] = useState<GameDifficulty>(GameDifficulty.EASY);
  const [mode, setMode] = useState<GameMode>(GameMode.FLAG_TO_COUNTRY);
  const [rounds, setRounds] = useState<number>(10);
  
  // Handle form submission
  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    startGame(mode, difficulty, rounds);
  };
  
  // If a game is already active, don't show the menu
  if (gameState.isActive) {
    return null;
  }
  
  // Calculate accuracy percentage
  const calculateAccuracy = () => {
    if (gameStats.gamesPlayed === 0) return 0;
    return Math.round((gameStats.correctAnswers / (gameStats.gamesPlayed * rounds)) * 100);
  };
  
  return (
    <div className="game-container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Game title and intro */}
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center justify-center">
            {/* Replace placeholder with actual logo */}
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Fun with Flags Logo" 
                className="w-full h-full object-contain"
                title="Fun with Flags Logo"
              />
            </div>
          </div>
          <h1 className="game-header text-5xl sm:text-6xl mb-6">Fun with Flags</h1>
          <p className="text-xl text-game-light/80 max-w-3xl mx-auto mb-8">
            Test your knowledge of world flags and countries in this exciting geography quiz game inspired by Sheldon Cooper!
          </p>
          
          {/* Player stats if available */}
          {gameStats.gamesPlayed > 0 && (
            <div className="inline-block">
              <div className="game-card p-6 shadow-game-lg border border-white/10">
                <h3 className="text-lg font-semibold mb-4 text-center game-header">Your Stats</h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="stat-value">{gameStats.gamesPlayed}</p>
                    <p className="stat-label">Games Played</p>
                  </div>
                  <div>
                    <p className="stat-value">{calculateAccuracy()}%</p>
                    <p className="stat-label">Accuracy</p>
                  </div>
                  <div>
                    <p className="stat-value">{gameStats.streakBest}</p>
                    <p className="stat-label">Best Streak</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Game setup form */}
        <form onSubmit={handleStartGame} className="space-y-12">
          <div className="game-card p-8 shadow-game border border-white/10">
            <h2 className="text-2xl font-bold mb-8 game-header">Game Settings</h2>
            
            {/* Game mode selection */}
            <div className="mb-10">
              <label className="block text-lg font-medium mb-4">Game Mode</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`game-card-interactive p-5 ${
                  mode === GameMode.FLAG_TO_COUNTRY ? 'border-2 border-game-primary bg-game-primary/5' : 'opacity-80 hover:opacity-100'
                }`}>
                  <input 
                    type="radio" 
                    value={GameMode.FLAG_TO_COUNTRY} 
                    checked={mode === GameMode.FLAG_TO_COUNTRY} 
                    onChange={() => setMode(GameMode.FLAG_TO_COUNTRY)}
                    className="sr-only"
                  />
                  <div className="flex items-start">
                    <div className="bg-game-primary/10 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-game-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Flag to Country</div>
                      <div className="text-sm text-game-light/70">
                        See a flag, guess which country it belongs to
                      </div>
                    </div>
                  </div>
                </label>
                
                <label className={`game-card-interactive p-5 ${
                  mode === GameMode.COUNTRY_TO_FLAG ? 'border-2 border-game-primary bg-game-primary/5' : 'opacity-80 hover:opacity-100'
                }`}>
                  <input 
                    type="radio" 
                    value={GameMode.COUNTRY_TO_FLAG} 
                    checked={mode === GameMode.COUNTRY_TO_FLAG} 
                    onChange={() => setMode(GameMode.COUNTRY_TO_FLAG)}
                    className="sr-only"
                  />
                  <div className="flex items-start">
                    <div className="bg-game-primary/10 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-game-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Country to Flag</div>
                      <div className="text-sm text-game-light/70">
                        See a country name, guess which flag belongs to it
                      </div>
                    </div>
                  </div>
                </label>
                
                <label className={`game-card-interactive p-5 ${
                  mode === GameMode.CAPITAL_CHALLENGE ? 'border-2 border-game-primary bg-game-primary/5' : 'opacity-80 hover:opacity-100'
                }`}>
                  <input 
                    type="radio" 
                    value={GameMode.CAPITAL_CHALLENGE} 
                    checked={mode === GameMode.CAPITAL_CHALLENGE} 
                    onChange={() => setMode(GameMode.CAPITAL_CHALLENGE)}
                    className="sr-only"
                  />
                  <div className="flex items-start">
                    <div className="bg-game-primary/10 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-game-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Capital Challenge</div>
                      <div className="text-sm text-game-light/70">
                        See a capital city, guess which country it belongs to
                      </div>
                    </div>
                  </div>
                </label>
                
                <label className={`game-card-interactive p-5 ${
                  mode === GameMode.REGION_MASTER ? 'border-2 border-game-primary bg-game-primary/5' : 'opacity-80 hover:opacity-100'
                }`}>
                  <input 
                    type="radio" 
                    value={GameMode.REGION_MASTER} 
                    checked={mode === GameMode.REGION_MASTER} 
                    onChange={() => setMode(GameMode.REGION_MASTER)}
                    className="sr-only"
                  />
                  <div className="flex items-start">
                    <div className="bg-game-primary/10 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-game-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Region Master</div>
                      <div className="text-sm text-game-light/70">
                        Identify which region each country belongs to
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Difficulty selection */}
              <div>
                <label className="block text-lg font-medium mb-4">Difficulty</label>
                <div className="space-y-2">
                  {Object.values(GameDifficulty).map((diff) => (
                    <label key={diff} className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all
                                              hover:bg-white/5">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                                      ${difficulty === diff ? 'border-game-primary' : 'border-white/30'}`}>
                        {difficulty === diff && (
                          <div className="w-3 h-3 rounded-full bg-game-primary"></div>
                        )}
                      </div>
                      <input 
                        type="radio" 
                        value={diff} 
                        checked={difficulty === diff} 
                        onChange={() => setDifficulty(diff as GameDifficulty)}
                        className="sr-only"
                      />
                      <span className="capitalize">{diff}</span>
                      
                      {/* Difficulty indicators */}
                      <div className="flex-grow"></div>
                      <div className="flex space-x-1">
                        {[...Array(diff === GameDifficulty.EASY ? 1 : 
                                diff === GameDifficulty.MEDIUM ? 2 : 
                                diff === GameDifficulty.HARD ? 3 : 4)].map((_, i) => (
                          <div key={i} className="w-2 h-6 bg-game-primary/70 rounded"></div>
                        ))}
                        {[...Array(4 - (diff === GameDifficulty.EASY ? 1 : 
                                      diff === GameDifficulty.MEDIUM ? 2 : 
                                      diff === GameDifficulty.HARD ? 3 : 4))].map((_, i) => (
                          <div key={i} className="w-2 h-6 bg-white/10 rounded"></div>
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Number of rounds selection */}
              <div>
                <label className="block text-lg font-medium mb-4">Number of Rounds</label>
                <div className="space-y-3">
                  {[5, 10, 15, 20].map((numRounds) => (
                    <label key={numRounds} className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all
                                                   hover:bg-white/5">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                                     ${rounds === numRounds ? 'border-game-secondary' : 'border-white/30'}`}>
                        {rounds === numRounds && (
                          <div className="w-3 h-3 rounded-full bg-game-secondary"></div>
                        )}
                      </div>
                      <input 
                        type="radio" 
                        value={numRounds} 
                        checked={rounds === numRounds} 
                        onChange={() => setRounds(numRounds)}
                        className="sr-only"
                      />
                      <span>{numRounds} rounds</span>
                      
                      {/* Estimated time */}
                      <div className="flex-grow"></div>
                      <span className="text-sm text-game-light/50">
                        ~{Math.round(numRounds * 1.5)} min
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary text-lg py-4 px-10 shadow-game-lg"
            >
              <span className="flex items-center">
                <span>Start Game</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Game guide */}
          <div className="game-card p-6 border border-white/5">
            <div className="flex items-center mb-4">
              <svg className="w-5 h-5 text-game-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-bold">How to Play</h2>
            </div>
            <ul className="space-y-2 list-none pl-5">
              {[
                "Choose your game mode, difficulty, and number of rounds.",
                "Answer questions within the time limit for maximum points.",
                "Harder difficulties have shorter time limits but higher point multipliers.",
                "Build a streak of correct answers for bonus points.",
                "Learn interesting facts about countries as you play!"
              ].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-game-accent mr-2">•</div>
                  <div>{tip}</div>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameMenu; 