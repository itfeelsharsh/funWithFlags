/**
 * FlagCard Component
 * 
 * A reusable component that displays a country's flag with optional animation effects.
 * Can be used in various parts of the application to show flags consistently.
 */
import React from 'react';
import { Country } from '../types';

/**
 * FlagCard Props Interface
 * 
 * @property country - The country data to display the flag for
 * @property size - Optional size variant for the flag (default, large, small)
 * @property isSelected - Whether this flag is currently selected
 * @property isCorrect - Whether this flag represents a correct answer
 * @property isWaving - Whether to apply the waving animation effect
 * @property onClick - Optional click handler for interactive flags
 */
interface FlagCardProps {
  country: Country;
  size?: 'default' | 'large' | 'small';
  isSelected?: boolean;
  isCorrect?: boolean | null;
  isWaving?: boolean;
  onClick?: () => void;
}

/**
 * FlagCard Component
 * 
 * Displays a country flag with various states and animations.
 */
const FlagCard: React.FC<FlagCardProps> = ({
  country,
  size = 'default',
  isSelected = false,
  isCorrect = null,
  isWaving = false,
  onClick
}) => {
  // Determine size classes based on the size prop
  const sizeClasses = {
    small: 'h-20 w-32',
    default: 'h-32 w-48',
    large: 'h-48 w-80'
  }[size];
  
  // Determine border and ring classes based on selection and correctness
  let borderClasses = '';
  let ringClasses = '';
  
  if (isSelected) {
    if (isCorrect === true) {
      borderClasses = 'border-2 border-game-success';
      ringClasses = 'ring-2 ring-game-success ring-opacity-50';
    } else if (isCorrect === false) {
      borderClasses = 'border-2 border-game-error';
      ringClasses = 'ring-2 ring-game-error ring-opacity-50';
    } else {
      borderClasses = 'border-2 border-game-primary';
      ringClasses = 'ring-2 ring-game-primary ring-opacity-50';
    }
  } else {
    borderClasses = 'border-2 border-transparent';
  }
  
  // Determine animation classes
  const animationClasses = isWaving ? 'flag-wave' : '';
  
  // Determine cursor style based on whether onClick is provided
  const cursorClasses = onClick ? 'cursor-pointer' : '';
  
  // Additional classes for interactive flags
  const interactiveClasses = onClick
    ? 'transition-all duration-300 transform hover:-translate-y-1 hover:shadow-game-lg'
    : '';
  
  return (
    <div 
      className={`relative ${cursorClasses} ${interactiveClasses}`}
      onClick={onClick}
    >
      <div className={`relative ${sizeClasses} ${borderClasses} ${ringClasses} ${animationClasses} rounded-lg shadow-game overflow-hidden group`}>
        {/* Flag image with aspect ratio preservation */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30 z-10"></div>
        <img 
          src={country.flagUrl} 
          alt={`Flag of ${country.name}`}
          className="object-cover h-full w-full"
          loading="lazy"
        />
        
        {/* Country code badge */}
        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm rounded px-1.5 py-0.5 text-xs font-bold text-white/90 z-20">
          {country.code}
        </div>
        
        {/* Correct/incorrect indicators */}
        {isSelected && isCorrect !== null && (
          <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center z-30 
                            ${isCorrect ? 'bg-game-success/20' : 'bg-game-error/20'}`}>
            <div className={`rounded-full p-2 ${isCorrect ? 'bg-game-success' : 'bg-game-error'}`}>
              {isCorrect ? (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
          </div>
        )}
        
        {/* Hover overlay with country name */}
        {onClick && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300 z-20">
            <span className="text-white font-bold text-center px-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {country.name}
            </span>
            <span className="text-white/70 text-xs mt-1 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
              {country.capital}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlagCard; 