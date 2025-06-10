/**
 * Game Context Provider
 * 
 * This context provides game state and functions to manage the game across the application.
 * It handles game initialization, progression, scoring, and state management.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { 
  GameState, 
  GameDifficulty, 
  GameMode, 
  GameRound, 
  GameStats,
  GameResult
} from '../types';
import { getRandomCountries } from '../data/countries';

/**
 * Interface for the Game Context
 * 
 * Defines all values and functions that will be provided by the Game Context
 */
interface GameContextType {
  // Game state
  gameState: GameState;
  gameStats: GameStats;
  
  // Game management functions
  startGame: (mode: GameMode, difficulty: GameDifficulty, rounds: number) => void;
  endGame: () => void;
  nextRound: () => void;
  
  // Answer handling
  selectAnswer: (countryCode: string) => void;
  skipQuestion: () => void;
  
  // Game results
  results: GameResult | null;
  
  // UI states
  isLoading: boolean;
  showResults: boolean;
  setShowResults: (show: boolean) => void;
}

/**
 * Default initial state for the game
 */
const initialGameState: GameState = {
  isActive: false,
  currentRound: 0,
  totalRounds: 10,
  score: 0,
  difficulty: GameDifficulty.EASY,
  mode: GameMode.FLAG_TO_COUNTRY,
  rounds: [],
  timeRemaining: 0,
  selectedAnswer: null,
  isCorrect: null
};

/**
 * Default initial stats for the player
 */
const initialGameStats: GameStats = {
  gamesPlayed: 0,
  correctAnswers: 0,
  streakCurrent: 0,
  streakBest: 0,
  avgResponseTime: 0
};

/**
 * Create the Game Context with default values
 */
const GameContext = createContext<GameContextType>({
  gameState: initialGameState,
  gameStats: initialGameStats,
  startGame: () => {},
  endGame: () => {},
  nextRound: () => {},
  selectAnswer: () => {},
  skipQuestion: () => {},
  results: null,
  isLoading: false,
  showResults: false,
  setShowResults: () => {}
});

/**
 * Props for the GameProvider component
 */
interface GameProviderProps {
  children: ReactNode;
}

/**
 * Game Provider Component
 * 
 * Manages the game state and provides functions to interact with it
 * throughout the application.
 */
export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  // State variables
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [gameStats, setGameStats] = useState<GameStats>(initialGameStats);
  const [results, setResults] = useState<GameResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  /**
   * Skips the current question
   */
  const skipQuestion = useCallback(() => {
    if (!gameState.isActive || gameState.selectedAnswer) return;
    
    // Get the current round
    const currentRoundIndex = gameState.currentRound - 1;
    const currentRound = gameState.rounds[currentRoundIndex];
    
    // Update the round with no selected answer
    const updatedRounds = [...gameState.rounds];
    updatedRounds[currentRoundIndex] = {
      ...currentRound,
      selectedAnswer: null
    };
    
    // Update game state
    setGameState(prev => ({
      ...prev,
      rounds: updatedRounds,
      selectedAnswer: 'skipped',
      isCorrect: false
    }));
    
    // Reset streak
    setGameStats(prev => ({
      ...prev,
      streakCurrent: 0
    }));
  }, [gameState.isActive, gameState.selectedAnswer, gameState.currentRound, gameState.rounds]);
  
  // Timer effect for countdown
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    if (gameState.isActive && gameState.timeRemaining > 0) {
      // Set a timer to count down every second
      timer = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        }));
      }, 1000);
    } else if (gameState.isActive && gameState.timeRemaining === 0) {
      // Time's up - skip the question
      skipQuestion();
    }
    
    // Clean up the timer
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState.isActive, gameState.timeRemaining, skipQuestion]);
  
  /**
   * Starts a new game with the specified parameters
   * 
   * @param mode - The game mode to play
   * @param difficulty - The difficulty level
   * @param rounds - Number of rounds to play
   */
  const startGame = (mode: GameMode, difficulty: GameDifficulty, rounds: number) => {
    setIsLoading(true);
    
    // Create game rounds based on the selected parameters
    const gameRounds = generateGameRounds(mode, difficulty, rounds);
    
    // Set the initial game state
    setGameState({
      isActive: true,
      currentRound: 1,
      totalRounds: rounds,
      score: 0,
      difficulty,
      mode,
      rounds: gameRounds,
      timeRemaining: getTimeLimitForDifficulty(difficulty),
      selectedAnswer: null,
      isCorrect: null
    });
    
    // Reset results
    setResults(null);
    setShowResults(false);
    setIsLoading(false);
  };
  
  /**
   * Ends the current game and calculates results
   */
  const endGame = () => {
    if (!gameState.isActive) return;
    
    // Calculate game statistics
    const correctCount = gameState.rounds.slice(0, gameState.currentRound)
      .filter(round => round.correctCountry.code === round.selectedAnswer).length;
    
    const incorrectCount = gameState.rounds.slice(0, gameState.currentRound)
      .filter(round => round.selectedAnswer && round.correctCountry.code !== round.selectedAnswer).length;
    
    const skippedCount = gameState.rounds.slice(0, gameState.currentRound)
      .filter(round => !round.selectedAnswer).length;
    
    // Create game results
    const gameResult: GameResult = {
      score: gameState.score,
      totalRounds: gameState.currentRound - 1,
      correctAnswers: correctCount,
      incorrectAnswers: incorrectCount,
      skipped: skippedCount,
      averageTime: 0, // Would calculate from round times in a real implementation
      difficulty: gameState.difficulty,
      mode: gameState.mode,
      date: new Date()
    };
    
    // Update player stats
    setGameStats(prev => ({
      gamesPlayed: prev.gamesPlayed + 1,
      correctAnswers: prev.correctAnswers + correctCount,
      streakCurrent: gameState.isCorrect ? prev.streakCurrent + 1 : 0,
      streakBest: Math.max(prev.streakBest, gameState.isCorrect ? prev.streakCurrent + 1 : prev.streakCurrent),
      avgResponseTime: prev.avgResponseTime // Would update with actual response times
    }));
    
    // Set results and inactive state
    setResults(gameResult);
    setGameState(prev => ({
      ...prev,
      isActive: false
    }));
    
    // Show results screen
    setShowResults(true);
  };
  
  /**
   * Advances to the next round of the game
   */
  const nextRound = () => {
    // If we've reached the end of the game, end it
    if (gameState.currentRound >= gameState.totalRounds) {
      endGame();
      return;
    }
    
    // Move to the next round
    setGameState(prev => ({
      ...prev,
      currentRound: prev.currentRound + 1,
      timeRemaining: getTimeLimitForDifficulty(prev.difficulty),
      selectedAnswer: null,
      isCorrect: null
    }));
  };
  
  /**
   * Handles a player's answer selection
   * 
   * @param countryCode - The country code of the selected answer
   */
  const selectAnswer = (countryCode: string) => {
    if (!gameState.isActive || gameState.selectedAnswer) return;
    
    // Get the current round
    const currentRoundIndex = gameState.currentRound - 1;
    const currentRound = gameState.rounds[currentRoundIndex];
    
    // Check if the answer is correct
    const isCorrect = currentRound.correctCountry.code === countryCode;
    
    // Calculate score based on time remaining and difficulty
    const timeBonus = Math.floor(gameState.timeRemaining / 5);
    const difficultyMultiplier = getDifficultyMultiplier(gameState.difficulty);
    const roundScore = isCorrect ? 10 + timeBonus * difficultyMultiplier : 0;
    
    // Update the round with the selected answer
    const updatedRounds = [...gameState.rounds];
    updatedRounds[currentRoundIndex] = {
      ...currentRound,
      selectedAnswer: countryCode
    };
    
    // Update game state
    setGameState(prev => ({
      ...prev,
      rounds: updatedRounds,
      score: prev.score + roundScore,
      selectedAnswer: countryCode,
      isCorrect
    }));
    
    // Update streak in game stats
    setGameStats(prev => ({
      ...prev,
      streakCurrent: isCorrect ? prev.streakCurrent + 1 : 0,
      streakBest: Math.max(prev.streakBest, isCorrect ? prev.streakCurrent + 1 : prev.streakCurrent)
    }));
  };
  
  /**
   * Generates game rounds based on mode, difficulty, and round count
   * 
   * @param mode - The game mode
   * @param difficulty - The difficulty level
   * @param roundCount - Number of rounds to generate
   * @returns Array of game rounds
   */
  const generateGameRounds = (
    mode: GameMode, 
    difficulty: GameDifficulty, 
    roundCount: number
  ): GameRound[] => {
    const rounds: GameRound[] = [];
    const usedCountryCodes: string[] = [];
    
    // Get number of options based on difficulty
    const optionCount = getOptionCountForDifficulty(difficulty);
    
    // Generate each round
    for (let i = 0; i < roundCount; i++) {
      // Get a correct country that hasn't been used yet
      const correctCountry = getRandomCountries(1, usedCountryCodes)[0];
      usedCountryCodes.push(correctCountry.code);
      
      // Get other countries for options
      const otherOptions = getRandomCountries(optionCount - 1, [...usedCountryCodes, correctCountry.code]);
      
      // Combine and shuffle options
      const options = [correctCountry, ...otherOptions];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      
      // Create the round
      rounds.push({
        correctCountry,
        options,
        difficulty,
        timeLimit: getTimeLimitForDifficulty(difficulty),
        selectedAnswer: null
      });
    }
    
    return rounds;
  };
  
  /**
   * Gets the appropriate time limit based on difficulty
   * 
   * @param difficulty - The difficulty level
   * @returns Time limit in seconds
   */
  const getTimeLimitForDifficulty = (difficulty: GameDifficulty): number => {
    switch (difficulty) {
      case GameDifficulty.EASY:
        return 30;
      case GameDifficulty.MEDIUM:
        return 20;
      case GameDifficulty.HARD:
        return 15;
      case GameDifficulty.EXPERT:
        return 10;
      default:
        return 30;
    }
  };
  
  /**
   * Gets the appropriate option count based on difficulty
   * 
   * @param difficulty - The difficulty level
   * @returns Number of options to display
   */
  const getOptionCountForDifficulty = (difficulty: GameDifficulty): number => {
    switch (difficulty) {
      case GameDifficulty.EASY:
        return 3;
      case GameDifficulty.MEDIUM:
        return 4;
      case GameDifficulty.HARD:
        return 5;
      case GameDifficulty.EXPERT:
        return 6;
      default:
        return 4;
    }
  };
  
  /**
   * Gets the score multiplier based on difficulty
   * 
   * @param difficulty - The difficulty level
   * @returns Score multiplier
   */
  const getDifficultyMultiplier = (difficulty: GameDifficulty): number => {
    switch (difficulty) {
      case GameDifficulty.EASY:
        return 1;
      case GameDifficulty.MEDIUM:
        return 1.5;
      case GameDifficulty.HARD:
        return 2;
      case GameDifficulty.EXPERT:
        return 3;
      default:
        return 1;
    }
  };
  
  // Context value with all state and functions
  const contextValue: GameContextType = {
    gameState,
    gameStats,
    startGame,
    endGame,
    nextRound,
    selectAnswer,
    skipQuestion,
    results,
    isLoading,
    showResults,
    setShowResults
  };
  
  // Provide the context to child components
  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

/**
 * Custom hook to use the Game Context
 * 
 * Provides easy access to game state and functions
 * 
 * @returns The Game Context value
 */
export const useGame = () => useContext(GameContext);

export default GameContext; 