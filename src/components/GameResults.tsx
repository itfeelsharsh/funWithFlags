/**
 * GameResults Component
 * 
 * Displays the results of a completed game, including score, accuracy,
 * and performance statistics.
 */
import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import { GameMode, GameDifficulty } from '../types';

/**
 * GameResults Component
 * 
 * Shows a summary of the player's performance after a game.
 */
const GameResults: React.FC = () => {
  // Access game context
  const { results, showResults, setShowResults, startGame } = useGame();
  
  // Animation states
  const [showStats, setShowStats] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showActions, setShowActions] = useState<boolean>(false);
  
  // Trigger animations on mount
  useEffect(() => {
    if (showResults) {
      // Staggered animations
      setTimeout(() => setShowStats(true), 300);
      setTimeout(() => setShowDetails(true), 800);
      setTimeout(() => setShowActions(true), 1200);
    }
  }, [showResults]);
  
  // If no results or not showing results, don't render
  if (!results || !showResults) {
    return null;
  }
  
  // Format date for display
  const formattedDate = new Date(results.date).toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Calculate performance metrics
  const accuracy = Math.round((results.correctAnswers / results.totalRounds) * 100);
  
  // Get difficulty name for display
  const getDifficultyName = (difficulty: GameDifficulty): string => {
    return {
      [GameDifficulty.EASY]: 'Easy',
      [GameDifficulty.MEDIUM]: 'Medium',
      [GameDifficulty.HARD]: 'Hard',
      [GameDifficulty.EXPERT]: 'Expert'
    }[difficulty];
  };
  
  // Get game mode name for display
  const getModeName = (mode: GameMode): string => {
    return {
      [GameMode.FLAG_TO_COUNTRY]: 'Flag to Country',
      [GameMode.COUNTRY_TO_FLAG]: 'Country to Flag',
      [GameMode.CAPITAL_CHALLENGE]: 'Capital Challenge',
      [GameMode.REGION_MASTER]: 'Region Master'
    }[mode];
  };
  
  // Get performance rating based on accuracy
  const getPerformanceRating = (accuracy: number): { text: string; emoji: string; description: string } => {
    if (accuracy >= 90) return { 
      text: 'Flag Master', 
      emoji: '🏆', 
      description: 'Your vexillological knowledge is truly impressive!'
    };
    if (accuracy >= 80) return { 
      text: 'Expert', 
      emoji: '🌟', 
      description: 'You have excellent knowledge of world flags and geography.'
    };
    if (accuracy >= 70) return { 
      text: 'Enthusiast', 
      emoji: '🎯', 
      description: 'You know your flags well, but there\'s still room to improve.'
    };
    if (accuracy >= 60) return { 
      text: 'Apprentice', 
      emoji: '👍', 
      description: 'You\'re on your way to becoming a flag expert!'
    };
    if (accuracy >= 50) return { 
      text: 'Novice', 
      emoji: '🤔', 
      description: 'A decent attempt, but consider watching more episodes of Fun with Flags.'
    };
    return { 
      text: 'Beginner', 
      emoji: '🔍', 
      description: 'There\'s a whole world of flags to discover.'
    };
  };
  
  // Get performance color based on accuracy
  const getPerformanceColor = (accuracy: number): string => {
    if (accuracy >= 90) return 'from-purple-500 to-blue-500';
    if (accuracy >= 70) return 'from-blue-500 to-green-500';
    if (accuracy >= 50) return 'from-yellow-500 to-orange-500';
    return 'from-orange-500 to-red-500';
  };
  
  // Get Sheldon Cooper quote based on performance
  const getSheldonQuote = (accuracy: number): string => {
    if (accuracy >= 90) {
      return "Bazinga! Your vexillological knowledge is almost as impressive as mine!";
    } else if (accuracy >= 70) {
      return "Not bad. Though one could argue that an adequate understanding of flags is a cornerstone of basic education.";
    } else if (accuracy >= 50) {
      return "I'm both impressed and disappointed. Schrödinger would be proud.";
    } else {
      return "Oh dear. Perhaps you should consider watching my 'Fun with Flags' web series?";
    }
  };
  
  // Get performance rating
  const performance = getPerformanceRating(accuracy);
  
  // Replay the same game mode and difficulty
  const handlePlayAgain = () => {
    startGame(results.mode, results.difficulty, results.totalRounds);
  };
  
  // Start a new game with different settings
  const handleNewGame = () => {
    setShowResults(false);
  };
  
  // Share results (placeholder function)
  const handleShareResults = () => {
    const shareText = `I scored ${results.score} points in Fun with Flags! My accuracy was ${accuracy}%. Can you beat that?`;
    
    // Check if Web Share API is supported
    if (navigator.share) {
      navigator.share({
        title: 'My Fun with Flags Results',
        text: shareText,
        url: window.location.href
      }).catch(err => {
        console.error('Error sharing:', err);
        alert('Could not share results. You can copy and paste this instead:\n\n' + shareText);
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert('You can share these results:\n\n' + shareText);
    }
  };
  
  return (
    <div className="game-container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Results header */}
        <div className={`text-center mb-10 transition-all duration-500 ${showStats ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
          <div className="inline-block rounded-full p-5 bg-gradient-to-br from-game-primary/20 to-game-secondary/20 backdrop-blur-sm mb-4">
            <div className="text-5xl">{performance.emoji}</div>
          </div>
          <h1 className="game-header text-4xl sm:text-5xl mb-2">Game Results</h1>
          <p className="text-game-light/60">{formattedDate}</p>
        </div>
        
        {/* Performance rating */}
        <div className={`game-card p-8 mb-8 shadow-game-lg border border-white/10 transition-all duration-500 ${showStats ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center">
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${getPerformanceColor(accuracy)} bg-clip-text text-transparent mb-2`}>
              {performance.text}
            </h2>
            <p className="text-xl mb-6">{performance.description}</p>
            
            <div className="inline-block bg-gradient-to-r from-game-primary to-game-secondary p-px rounded-xl mb-6">
              <div className="bg-game-dark rounded-xl px-8 py-4">
                <span className="text-4xl font-bold text-white">{results.score}</span>
                <span className="text-white/70 ml-2">points</span>
              </div>
            </div>
            
            <div className="mt-6 bg-white/5 p-6 rounded-xl italic relative">
              <svg className="absolute text-white/10 top-4 left-4 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
              </svg>
              <p className="text-lg pl-6">"{getSheldonQuote(accuracy)}"</p>
              <div className="text-right text-sm text-white/50 mt-2">- Dr. Sheldon Cooper</div>
            </div>
          </div>
        </div>
        
        {/* Detailed statistics */}
        <div className={`game-card p-6 mb-8 border border-white/5 transition-all duration-500 ${showDetails ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2 text-game-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Game Statistics
          </h3>
          
          {/* Game mode and difficulty */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-xl">
              <div className="text-sm text-game-light/70 mb-1">Game Mode</div>
              <div className="font-medium flex items-center">
                {getModeName(results.mode)}
                {results.mode === GameMode.FLAG_TO_COUNTRY && (
                  <svg className="w-4 h-4 ml-2 text-game-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                )}
                {results.mode === GameMode.COUNTRY_TO_FLAG && (
                  <svg className="w-4 h-4 ml-2 text-game-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )}
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl">
              <div className="text-sm text-game-light/70 mb-1">Difficulty</div>
              <div className="font-medium flex items-center">
                {getDifficultyName(results.difficulty)}
                <div className="flex ml-2 space-x-1">
                  {[...Array(results.difficulty === GameDifficulty.EASY ? 1 : 
                            results.difficulty === GameDifficulty.MEDIUM ? 2 : 
                            results.difficulty === GameDifficulty.HARD ? 3 : 4)].map((_, i) => (
                    <div key={i} className="w-1.5 h-4 bg-game-primary/70 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Answer statistics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-game-success/20 to-game-success/5 p-4 rounded-xl text-center border border-game-success/10">
              <div className="text-2xl font-bold text-game-success">{results.correctAnswers}</div>
              <div className="text-sm text-game-light/80">Correct</div>
            </div>
            <div className="bg-gradient-to-br from-game-error/20 to-game-error/5 p-4 rounded-xl text-center border border-game-error/10">
              <div className="text-2xl font-bold text-game-error">{results.incorrectAnswers}</div>
              <div className="text-sm text-game-light/80">Incorrect</div>
            </div>
            <div className="bg-gradient-to-br from-game-neutral/20 to-game-neutral/5 p-4 rounded-xl text-center border border-game-neutral/10">
              <div className="text-2xl font-bold text-game-neutral">{results.skipped}</div>
              <div className="text-sm text-game-light/80">Skipped</div>
            </div>
          </div>
          
          {/* Accuracy meter */}
          <div className="mb-2">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Accuracy</span>
              <span className="font-medium">{accuracy}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress-bar-fill ${getPerformanceColor(accuracy)}`}
                style={{ width: `${accuracy}%`, transition: 'width 1.5s ease-in-out' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-game-light/50 mt-1">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 ${showActions ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <button 
            className="btn btn-primary py-3 px-8 shadow-game"
            onClick={handlePlayAgain}
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Play Again
            </span>
          </button>
          <button 
            className="btn btn-secondary py-3 px-8 shadow-game"
            onClick={handleNewGame}
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Game
            </span>
          </button>
          <button 
            className="btn btn-neutral py-3 px-8"
            onClick={handleShareResults}
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share Results
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameResults; 