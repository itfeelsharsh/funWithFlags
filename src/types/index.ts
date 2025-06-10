/**
 * Represents a country with its flag and related information
 * 
 * This type is used throughout the application to represent country data
 * that will be displayed to users during the game.
 */
export interface Country {
  name: string;         // Full name of the country
  code: string;         // Two-letter country code (ISO 3166-1 alpha-2)
  capital: string;      // Capital city of the country
  region: string;       // Geographical region the country is located in
  population: number;   // Current population of the country
  languages: string[];  // Languages spoken in the country
  currencies: string[]; // Currencies used in the country
  flagUrl: string;      // URL to the country's flag image
  funFact?: string;     // Optional interesting fact about the country
}

/**
 * Represents a player's game statistics
 * 
 * Tracks the player's performance throughout the game sessions
 */
export interface GameStats {
  gamesPlayed: number;   // Total number of games played
  correctAnswers: number;// Total number of correct answers
  streakCurrent: number; // Current streak of correct answers
  streakBest: number;    // Best streak of correct answers achieved
  avgResponseTime: number; // Average time to answer in seconds
}

/**
 * Represents a single game round configuration
 * 
 * Defines how a single round of the game should be structured
 */
export interface GameRound {
  correctCountry: Country;    // The country that is the correct answer
  options: Country[];         // All options including the correct answer
  difficulty: GameDifficulty; // Difficulty level of this round
  timeLimit: number;          // Time limit in seconds for this round
  selectedAnswer: string | null; // The player's selected answer for this round
}

/**
 * Enum representing different game difficulty levels
 * 
 * Used to control the complexity and challenge of game rounds
 */
export enum GameDifficulty {
  EASY = 'easy',       // Few options, common countries
  MEDIUM = 'medium',   // More options, mix of common and less known countries
  HARD = 'hard',       // Many options, including obscure countries
  EXPERT = 'expert'    // Many options, visually similar flags, strict time limits
}

/**
 * Represents the possible game modes
 * 
 * Different ways to play the Fun with Flags game
 */
export enum GameMode {
  FLAG_TO_COUNTRY = 'flagToCountry', // Show flag, guess country
  COUNTRY_TO_FLAG = 'countryToFlag', // Show country name, guess flag
  CAPITAL_CHALLENGE = 'capitalChallenge', // Match capitals with countries
  REGION_MASTER = 'regionMaster' // Group countries by region
}

/**
 * Represents the state of the current game session
 * 
 * Tracks all information about the current game being played
 */
export interface GameState {
  isActive: boolean;           // Whether a game is currently in progress
  currentRound: number;        // Current round number
  totalRounds: number;         // Total number of rounds in this game
  score: number;               // Current score in this game
  difficulty: GameDifficulty;  // Current game difficulty
  mode: GameMode;              // Current game mode
  rounds: GameRound[];         // Information about each round
  timeRemaining: number;       // Time remaining for current round
  selectedAnswer: string | null; // Currently selected answer
  isCorrect: boolean | null;   // Whether the selected answer is correct
}

/**
 * Represents the result of a completed game
 * 
 * Summary information about a finished game session
 */
export interface GameResult {
  score: number;             // Final score achieved
  totalRounds: number;       // Total rounds played
  correctAnswers: number;    // Number of correct answers
  incorrectAnswers: number;  // Number of incorrect answers
  skipped: number;           // Number of skipped questions
  averageTime: number;       // Average time per question in seconds
  difficulty: GameDifficulty;// Difficulty level played
  mode: GameMode;            // Game mode played
  date: Date;                // When the game was played
} 