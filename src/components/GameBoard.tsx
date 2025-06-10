/**
 * GameBoard Component
 * 
 * The main gameplay area where flags are displayed and players can make guesses.
 * Handles different game modes and difficulty levels.
 */
import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { GameMode, GameDifficulty } from '../types';
import FlagCard from './FlagCard';

/**
 * GameBoard Component
 * 
 * Main gameplay component that shows the current round and options.
 */
const GameBoard: React.FC = () => {
  // Access game state and functions from context
  const { 
    gameState, 
    gameStats,
    selectAnswer, 
    nextRound,
    skipQuestion
  } = useGame();
  
  // Local state for UI interactions
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [animateCorrect, setAnimateCorrect] = useState<boolean>(false);
  const [timeWarning, setTimeWarning] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [lastScoreChange, setLastScoreChange] = useState<number>(0);
  
  // Current round data
  const currentRoundIndex = gameState.currentRound - 1;
  const currentRound = gameState.rounds[currentRoundIndex];
  
  // Handle selection of an answer
  const handleSelectAnswer = (countryCode: string) => {
    // Don't allow selection if already answered
    if (gameState.selectedAnswer) return;
    
    // Highlight selected option
    setSelectedOption(countryCode);
    
    // Calculate the potential score change for display
    const isCorrect = countryCode === currentRound.correctCountry.code;
    const timeBonus = Math.floor(gameState.timeRemaining / 5);
    const difficultyMultiplier = getDifficultyMultiplier(gameState.difficulty);
    const pointsEarned = isCorrect ? 10 + timeBonus * difficultyMultiplier : 0;
    setLastScoreChange(pointsEarned);
    
    // Add a small delay for visual feedback before showing result
    setTimeout(() => {
      // Select the answer in game state
      selectAnswer(countryCode);
      
      // Show feedback
      setShowAnswer(true);
      
      // If correct, animate the flag
      if (countryCode === currentRound.correctCountry.code) {
        setAnimateCorrect(true);
      }
    }, 300);
  };
  
  // Handle progression to the next round
  const handleNextRound = () => {
    setShowAnswer(false);
    setAnimateCorrect(false);
    setSelectedOption(null);
    nextRound();
  };
  
  // Handle skipping the current question
  const handleSkip = () => {
    skipQuestion();
    setShowAnswer(true);
  };
  
  // Check if time is running low for warning
  useEffect(() => {
    if (gameState.timeRemaining <= 10 && gameState.timeRemaining > 0) {
      setTimeWarning(true);
    } else {
      setTimeWarning(false);
    }
  }, [gameState.timeRemaining]);
  
  // Automatically show the answer when time runs out or answer is selected
  useEffect(() => {
    if (gameState.selectedAnswer) {
      setShowAnswer(true);
    }
  }, [gameState.selectedAnswer]);
  
  // Format the time remaining for display
  const formatTime = (seconds: number) => {
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  };

  // Get difficulty display name
  const getDifficultyName = (difficulty: GameDifficulty): string => {
    return {
      [GameDifficulty.EASY]: 'Easy',
      [GameDifficulty.MEDIUM]: 'Medium',
      [GameDifficulty.HARD]: 'Hard',
      [GameDifficulty.EXPERT]: 'Expert'
    }[difficulty];
  };
  
  // Get difficulty multiplier for score calculation
  const getDifficultyMultiplier = (difficulty: GameDifficulty): number => {
    switch (difficulty) {
      case GameDifficulty.EASY:
        return 1;
      case GameDifficulty.MEDIUM:
        return 2;
      case GameDifficulty.HARD:
        return 3;
      case GameDifficulty.EXPERT:
        return 4;
      default:
        return 1;
    }
  };
  
  // If game is not active, don't render
  if (!gameState.isActive) {
    return null;
  }
  
  return (
    <div className="game-container py-8 md:py-12">
      {/* Game header with round info and timer */}
      <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-md rounded-xl p-4 mb-8 shadow-game">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <div className="flex items-center mb-1">
              <h2 className="text-2xl font-bold">
                Round {gameState.currentRound} of {gameState.totalRounds}
              </h2>
              <div className="ml-3 px-2 py-1 bg-white/10 rounded text-sm">
                {getDifficultyName(gameState.difficulty)}
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center text-game-light/70">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{gameState.score} points</span>
              </div>
              
              {gameStats.streakCurrent > 1 && (
                <div className="flex items-center ml-4 text-game-accent">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>{gameStats.streakCurrent} streak</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center">
            {/* Timer display */}
            <div className={`flex items-center px-4 py-2 rounded-full 
                           ${timeWarning ? 'bg-game-error/20 text-game-error animate-pulse' : 'bg-white/10'}`}>
              <svg className={`w-5 h-5 mr-2 ${timeWarning ? 'text-game-error' : 'text-game-light/70'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className={`text-xl font-mono ${timeWarning ? 'text-game-error' : 'text-game-light'}`}>
                {formatTime(gameState.timeRemaining)}
              </div>
            </div>
            
            {/* Skip button */}
            {!showAnswer && (
              <button 
                className="ml-4 btn btn-neutral"
                onClick={handleSkip}
                aria-label="Skip this question"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  Skip
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Game content based on mode */}
      <div className="mb-8">
        {/* FLAG_TO_COUNTRY Mode: Show flag, guess country */}
        {gameState.mode === GameMode.FLAG_TO_COUNTRY && (
          <>
            {/* Question flag */}
            <div className="flex justify-center mb-10">
              <div className="transform transition-all duration-500 hover:scale-105">
                <FlagCard 
                  country={currentRound.correctCountry} 
                  size="large"
                  isWaving={animateCorrect}
                />
              </div>
            </div>
            
            {/* Country options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {currentRound.options.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleSelectAnswer(country.code)}
                  disabled={!!gameState.selectedAnswer}
                  className={`game-card-interactive py-4 px-6 text-center transition-all duration-300 ${
                    selectedOption === country.code ? 'transform scale-95' : ''
                  } ${
                    gameState.selectedAnswer === country.code 
                      ? (gameState.isCorrect ? 'bg-game-success/20 border-game-success' : 'bg-game-error/20 border-game-error')
                      : 'hover:bg-white/5'
                  } ${
                    showAnswer && country.code === currentRound.correctCountry.code
                      ? 'bg-game-success/20 border-game-success'
                      : ''
                  }`}
                >
                  <p className="font-medium text-lg mb-1">{country.name}</p>
                  <p className="text-sm text-game-light/70">{country.capital}</p>
                </button>
              ))}
            </div>
          </>
        )}
        
        {/* COUNTRY_TO_FLAG Mode: Show country name, guess flag */}
        {gameState.mode === GameMode.COUNTRY_TO_FLAG && (
          <>
            {/* Question country */}
            <div className="flex justify-center mb-10">
              <div className="game-card p-6 sm:p-8 shadow-game-lg border border-white/10 text-center transform transition-all duration-500 hover:scale-105">
                <h2 className="game-header text-4xl mb-4">{currentRound.correctCountry.name}</h2>
                <div className="text-xl flex justify-center items-center">
                  <svg className="w-5 h-5 text-game-light/50 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Capital: {currentRound.correctCountry.capital}</span>
                </div>
              </div>
            </div>
            
            {/* Flag options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {currentRound.options.map((country) => (
                <div 
                  key={country.code} 
                  onClick={() => handleSelectAnswer(country.code)}
                  className={`transition-all duration-300 ${selectedOption === country.code ? 'transform scale-95' : ''}`}
                >
                  <FlagCard 
                    country={country}
                    size="default"
                    isSelected={gameState.selectedAnswer === country.code}
                    isCorrect={
                      showAnswer ? 
                        country.code === currentRound.correctCountry.code :
                        gameState.selectedAnswer === country.code ? gameState.isCorrect : null
                    }
                    isWaving={animateCorrect && country.code === currentRound.correctCountry.code}
                    onClick={() => handleSelectAnswer(country.code)}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* CAPITAL_CHALLENGE Mode: Match capitals with countries */}
        {gameState.mode === GameMode.CAPITAL_CHALLENGE && (
          <>
            {/* Question capital */}
            <div className="flex justify-center mb-10">
              <div className="game-card p-6 sm:p-8 shadow-game-lg border border-white/10 text-center transform transition-all duration-500 hover:scale-105">
                <div className="text-xl text-game-light/70 mb-2">What country has this capital?</div>
                <h2 className="text-4xl font-bold mb-2 game-header">
                  {currentRound.correctCountry.capital}
                </h2>
              </div>
            </div>
            
            {/* Country options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentRound.options.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleSelectAnswer(country.code)}
                  disabled={!!gameState.selectedAnswer}
                  className={`game-card-interactive py-4 px-6 transition-all duration-300 flex items-center gap-4 ${
                    selectedOption === country.code ? 'transform scale-95' : ''
                  } ${
                    gameState.selectedAnswer === country.code 
                      ? (gameState.isCorrect ? 'bg-game-success/20 border-game-success' : 'bg-game-error/20 border-game-error')
                      : 'hover:bg-white/5'
                  } ${
                    showAnswer && country.code === currentRound.correctCountry.code
                      ? 'bg-game-success/20 border-game-success'
                      : ''
                  }`}
                >
                  <FlagCard country={country} size="small" isWaving={animateCorrect && country.code === currentRound.correctCountry.code} />
                  <div className="text-left">
                    <p className="font-medium text-lg">{country.name}</p>
                    <p className="text-sm text-game-light/70">{country.region}</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
        
        {/* REGION_MASTER Mode: Group countries by region */}
        {gameState.mode === GameMode.REGION_MASTER && (
          <>
            {/* Display flag */}
            <div className="flex flex-col items-center mb-10">
              <FlagCard 
                country={currentRound.correctCountry} 
                size="large"
                isWaving={animateCorrect}
              />
              <h2 className="text-2xl font-bold mt-4 mb-2">{currentRound.correctCountry.name}</h2>
              <p className="text-game-light/70">Which region does this country belong to?</p>
            </div>
            
            {/* Region options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {["Americas", "Europe", "Africa", "Asia", "Oceania"].map((region) => (
                <button
                  key={region}
                  onClick={() => handleSelectAnswer(
                    region === currentRound.correctCountry.region ? currentRound.correctCountry.code : "wrong"
                  )}
                  disabled={!!gameState.selectedAnswer}
                  className={`game-card-interactive py-6 px-4 text-center transition-all duration-300 ${
                    selectedOption === (region === currentRound.correctCountry.region ? currentRound.correctCountry.code : "wrong") 
                      ? 'transform scale-95' 
                      : ''
                  } ${
                    (gameState.selectedAnswer === currentRound.correctCountry.code && region === currentRound.correctCountry.region) 
                      ? 'bg-game-success/20 border-game-success'
                      : (gameState.selectedAnswer === "wrong" && region !== currentRound.correctCountry.region && selectedOption === "wrong")
                        ? 'bg-game-error/20 border-game-error'
                        : 'hover:bg-white/5'
                  } ${
                    showAnswer && region === currentRound.correctCountry.region
                      ? 'bg-game-success/20 border-game-success'
                      : ''
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {region === "Americas" && (
                      <svg className="w-10 h-10 mb-3 text-game-light/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {region === "Europe" && (
                      <svg className="w-10 h-10 mb-3 text-game-light/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    )}
                    {region === "Africa" && (
                      <svg className="w-10 h-10 mb-3 text-game-light/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )}
                    {region === "Asia" && (
                      <svg className="w-10 h-10 mb-3 text-game-light/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    )}
                    {region === "Oceania" && (
                      <svg className="w-10 h-10 mb-3 text-game-light/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    )}
                    <p className="font-medium">{region}</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Answer feedback and next button */}
      {showAnswer && (
        <div className="fixed inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-black/70 backdrop-blur-md transition-all duration-500 transform animate-slide-up z-40">
          <div className="game-container flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0 flex items-center">
              {gameState.isCorrect ? (
                <>
                  <div className="bg-game-success/20 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-game-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-game-success">Correct!</p>
                    <p className="text-game-light/70">
                      +{lastScoreChange} points {gameStats.streakCurrent > 1 ? `(${gameStats.streakCurrent}x streak)` : ''}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-game-error/20 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-game-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-game-error">
                      {gameState.selectedAnswer ? 'Incorrect' : 'Time\'s up!'}
                    </p>
                    <p className="text-game-light/70">
                      The correct answer was <span className="font-semibold">{currentRound.correctCountry.name}</span>
                    </p>
                  </div>
                </>
              )}
            </div>
            
            <div>
              {gameState.currentRound >= gameState.totalRounds ? (
                <button 
                  className="btn btn-primary"
                  onClick={handleNextRound}
                >
                  See Results
                </button>
              ) : (
                <button 
                  className="btn btn-primary"
                  onClick={handleNextRound}
                >
                  <span className="flex items-center">
                    Next Question
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard; 