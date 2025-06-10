/**
 * CountryInfo Component
 * 
 * Displays detailed information about a country in a card format.
 * Used for showing information after a round or in the country details section.
 */
import React from 'react';
import { Country } from '../types';
import FlagCard from './FlagCard';

/**
 * CountryInfo Props Interface
 * 
 * @property country - The country data to display information for
 * @property showDetailedInfo - Whether to show all country details or just basic info
 */
interface CountryInfoProps {
  country: Country;
  showDetailedInfo?: boolean;
}

/**
 * CountryInfo Component
 * 
 * Displays detailed information about a country.
 */
const CountryInfo: React.FC<CountryInfoProps> = ({
  country,
  showDetailedInfo = true
}) => {
  // Format population number with commas
  const formattedPopulation = country.population.toLocaleString();
  
  return (
    <div className="game-card flex flex-col md:flex-row gap-6 p-6 w-full max-w-4xl mx-auto">
      {/* Flag section */}
      <div className="flex-shrink-0">
        <FlagCard country={country} size="large" isWaving={true} />
      </div>
      
      {/* Country information section */}
      <div className="flex-grow">
        {/* Country name and basic info */}
        <div className="mb-4">
          <h2 className="game-header mb-2">{country.name}</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="inline-block bg-game-primary bg-opacity-20 px-3 py-1 rounded-full text-sm">
              {country.region}
            </span>
            <span className="inline-block bg-game-secondary bg-opacity-20 px-3 py-1 rounded-full text-sm">
              {country.code}
            </span>
          </div>
          <p className="text-xl mb-4">Capital: <span className="font-semibold">{country.capital}</span></p>
        </div>
        
        {/* Detailed country information (conditionally rendered) */}
        {showDetailedInfo && (
          <div className="space-y-4">
            {/* Population information */}
            <div>
              <h3 className="text-lg font-semibold text-game-accent mb-1">Population</h3>
              <p>{formattedPopulation} people</p>
            </div>
            
            {/* Languages information */}
            <div>
              <h3 className="text-lg font-semibold text-game-accent mb-1">Languages</h3>
              <div className="flex flex-wrap gap-1">
                {country.languages.map((language, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-game-primary bg-opacity-10 px-2 py-1 rounded text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Currencies information */}
            <div>
              <h3 className="text-lg font-semibold text-game-accent mb-1">Currencies</h3>
              <div className="flex flex-wrap gap-1">
                {country.currencies.map((currency, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-game-secondary bg-opacity-10 px-2 py-1 rounded text-sm"
                  >
                    {currency}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Fun fact information */}
            {country.funFact && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-game-accent mb-1">Fun Fact</h3>
                <p className="italic bg-white bg-opacity-5 p-3 rounded-lg">
                  "{country.funFact}"
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo; 