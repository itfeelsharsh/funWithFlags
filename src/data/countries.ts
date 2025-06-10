/**
 * Country data for the Fun with Flags game
 * 
 * This file contains sample country data including names, flags, and additional
 * information used throughout the game. In a production environment, this data
 * would be fetched from an API or larger database.
 */

import { Country } from '../types';

/**
 * Sample country data array
 * 
 * Contains information about various countries for use in the game.
 * Each country follows the Country interface structure.
 */
export const countries: Country[] = [
  {
    name: "United States",
    code: "US",
    capital: "Washington, D.C.",
    region: "Americas",
    population: 331002651,
    languages: ["English"],
    currencies: ["United States Dollar (USD)"],
    flagUrl: "https://flagcdn.com/us.svg",
    funFact: "The U.S. has the world's largest economy by nominal GDP."
  },
  {
    name: "United Kingdom",
    code: "GB",
    capital: "London",
    region: "Europe",
    population: 67886011,
    languages: ["English"],
    currencies: ["Pound Sterling (GBP)"],
    flagUrl: "https://flagcdn.com/gb.svg",
    funFact: "The London Underground is the oldest underground railway network in the world."
  },
  {
    name: "France",
    code: "FR",
    capital: "Paris",
    region: "Europe",
    population: 65273511,
    languages: ["French"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/fr.svg",
    funFact: "France is the most visited country in the world with over 89 million tourists annually."
  },
  {
    name: "Germany",
    code: "DE",
    capital: "Berlin",
    region: "Europe",
    population: 83783942,
    languages: ["German"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/de.svg",
    funFact: "Germany has over 1,500 different types of sausages and 1,300 beer breweries."
  },
  {
    name: "Japan",
    code: "JP",
    capital: "Tokyo",
    region: "Asia",
    population: 126476461,
    languages: ["Japanese"],
    currencies: ["Japanese Yen (JPY)"],
    flagUrl: "https://flagcdn.com/jp.svg",
    funFact: "Japan has the world's oldest company - Kongō Gumi, a construction company founded in 578 AD."
  },
  {
    name: "Brazil",
    code: "BR",
    capital: "Brasília",
    region: "Americas",
    population: 212559417,
    languages: ["Portuguese"],
    currencies: ["Brazilian Real (BRL)"],
    flagUrl: "https://flagcdn.com/br.svg",
    funFact: "Brazil is home to the Amazon, the largest rainforest in the world, covering over 5.5 million square kilometers."
  },
  {
    name: "Australia",
    code: "AU",
    capital: "Canberra",
    region: "Oceania",
    population: 25499884,
    languages: ["English"],
    currencies: ["Australian Dollar (AUD)"],
    flagUrl: "https://flagcdn.com/au.svg",
    funFact: "Australia is the only nation to govern an entire continent."
  },
  {
    name: "India",
    code: "IN",
    capital: "New Delhi",
    region: "Asia",
    population: 1380004385,
    languages: ["Hindi", "English"],
    currencies: ["Indian Rupee (INR)"],
    flagUrl: "https://flagcdn.com/in.svg",
    funFact: "India has the world's largest postal network with over 155,000 post offices."
  },
  {
    name: "South Africa",
    code: "ZA",
    capital: "Pretoria",
    region: "Africa",
    population: 59308690,
    languages: ["Afrikaans", "English", "Zulu", "Xhosa", "Southern Sotho"],
    currencies: ["South African Rand (ZAR)"],
    flagUrl: "https://flagcdn.com/za.svg",
    funFact: "South Africa has three capital cities: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial)."
  },
  {
    name: "China",
    code: "CN",
    capital: "Beijing",
    region: "Asia",
    population: 1439323776,
    languages: ["Mandarin"],
    currencies: ["Chinese Yuan (CNY)"],
    flagUrl: "https://flagcdn.com/cn.svg",
    funFact: "The Great Wall of China is the largest man-made structure in the world, stretching over 13,000 miles."
  },
  {
    name: "Canada",
    code: "CA",
    capital: "Ottawa",
    region: "Americas",
    population: 37742154,
    languages: ["English", "French"],
    currencies: ["Canadian Dollar (CAD)"],
    flagUrl: "https://flagcdn.com/ca.svg",
    funFact: "Canada has more lakes than the rest of the world combined, with over 3 million lakes."
  },
  {
    name: "Italy",
    code: "IT",
    capital: "Rome",
    region: "Europe",
    population: 60461826,
    languages: ["Italian"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/it.svg",
    funFact: "Italy has the most UNESCO World Heritage Sites of any country, with 55 in total."
  },
  {
    name: "Mexico",
    code: "MX",
    capital: "Mexico City",
    region: "Americas",
    population: 128932753,
    languages: ["Spanish"],
    currencies: ["Mexican Peso (MXN)"],
    flagUrl: "https://flagcdn.com/mx.svg",
    funFact: "Mexico introduced chocolate, chilies, and corn to the world."
  },
  {
    name: "Russia",
    code: "RU",
    capital: "Moscow",
    region: "Europe/Asia",
    population: 145934462,
    languages: ["Russian"],
    currencies: ["Russian Ruble (RUB)"],
    flagUrl: "https://flagcdn.com/ru.svg",
    funFact: "Russia spans 11 time zones, more than any other country in the world."
  },
  {
    name: "Spain",
    code: "ES",
    capital: "Madrid",
    region: "Europe",
    population: 46754778,
    languages: ["Spanish"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/es.svg",
    funFact: "Spain is the world's largest producer of olive oil, accounting for 44% of world production."
  },
  {
    name: "Sweden",
    code: "SE",
    capital: "Stockholm",
    region: "Europe",
    population: 10099265,
    languages: ["Swedish"],
    currencies: ["Swedish Krona (SEK)"],
    flagUrl: "https://flagcdn.com/se.svg",
    funFact: "Sweden has the most islands of any country, with an estimated 267,570 islands."
  },
  {
    name: "Egypt",
    code: "EG",
    capital: "Cairo",
    region: "Africa",
    population: 102334404,
    languages: ["Arabic"],
    currencies: ["Egyptian Pound (EGP)"],
    flagUrl: "https://flagcdn.com/eg.svg",
    funFact: "The ancient Egyptian civilization lasted for more than 3,000 years, longer than any other civilization in human history."
  },
  {
    name: "New Zealand",
    code: "NZ",
    capital: "Wellington",
    region: "Oceania",
    population: 4822233,
    languages: ["English", "Māori"],
    currencies: ["New Zealand Dollar (NZD)"],
    flagUrl: "https://flagcdn.com/nz.svg",
    funFact: "New Zealand was the first country to give women the right to vote in 1893."
  },
  {
    name: "Argentina",
    code: "AR",
    capital: "Buenos Aires",
    region: "Americas",
    population: 45195774,
    languages: ["Spanish"],
    currencies: ["Argentine Peso (ARS)"],
    flagUrl: "https://flagcdn.com/ar.svg",
    funFact: "Argentina has the highest consumption of beef per capita in the world."
  },
  {
    name: "South Korea",
    code: "KR",
    capital: "Seoul",
    region: "Asia",
    population: 51269185,
    languages: ["Korean"],
    currencies: ["South Korean Won (KRW)"],
    flagUrl: "https://flagcdn.com/kr.svg",
    funFact: "South Korea has the fastest average internet connection speed in the world."
  }
];

/**
 * Get a random subset of countries
 * 
 * Used to select a random group of countries for game rounds.
 * 
 * @param count - Number of countries to return
 * @param exclude - Optional country codes to exclude from selection
 * @returns Array of randomly selected countries
 */
export const getRandomCountries = (count: number, exclude: string[] = []): Country[] => {
  // Filter out excluded countries
  const availableCountries = countries.filter(country => !exclude.includes(country.code));
  
  // Shuffle the countries array using Fisher-Yates algorithm
  const shuffled = [...availableCountries];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return the requested number of countries
  return shuffled.slice(0, count);
};

/**
 * Get a country by its code
 * 
 * Used to retrieve a specific country by its ISO code.
 * 
 * @param code - The country code to search for
 * @returns The matching country or undefined if not found
 */
export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(country => country.code === code);
};

/**
 * Get countries by region
 * 
 * Used to retrieve all countries from a specific region.
 * 
 * @param region - The region to filter by
 * @returns Array of countries in the specified region
 */
export const getCountriesByRegion = (region: string): Country[] => {
  return countries.filter(country => country.region === region);
}; 