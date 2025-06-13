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
    name: "Afghanistan",
    code: "AF",
    capital: "Kabul",
    region: "Asia",
    population: 40218234,
    languages: ["Pashto", "Dari"],
    currencies: ["Afghan afghani (AFN)"],
    flagUrl: "https://flagcdn.com/af.svg",
    funFact: "Afghanistan is home to the world's oldest oil paintings."
  },
  {
    name: "Albania",
    code: "AL",
    capital: "Tirana",
    region: "Europe",
    population: 2837743,
    languages: ["Albanian"],
    currencies: ["Albanian lek (ALL)"],
    flagUrl: "https://flagcdn.com/al.svg",
    funFact: "Albanians nod their head for 'no' and shake it for 'yes'."
  },
  {
    name: "Algeria",
    code: "DZ",
    capital: "Algiers",
    region: "Africa",
    population: 44700000,
    languages: ["Arabic", "Berber"],
    currencies: ["Algerian dinar (DZD)"],
    flagUrl: "https://flagcdn.com/dz.svg",
    funFact: "The Sahara Desert makes up more than 80% of Algeria's land area."
  },
  {
    name: "Andorra",
    code: "AD",
    capital: "Andorra la Vella",
    region: "Europe",
    population: 79535,
    languages: ["Catalan"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/ad.svg",
    funFact: "Andorra is the only co-principality in the world."
  },
  {
    name: "Angola",
    code: "AO",
    capital: "Luanda",
    region: "Africa",
    population: 34503774,
    languages: ["Portuguese"],
    currencies: ["Angolan kwanza (AOA)"],
    flagUrl: "https://flagcdn.com/ao.svg",
    funFact: "The giant sable antelope, thought to be extinct, was rediscovered in Angola in 2004."
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    capital: "Saint John's",
    region: "Americas",
    population: 93219,
    languages: ["English"],
    currencies: ["Eastern Caribbean dollar (XCD)"],
    flagUrl: "https://flagcdn.com/ag.svg",
    funFact: "Antigua and Barbuda has a beach for every day of the year (365 beaches)."
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
    name: "Armenia",
    code: "AM",
    capital: "Yerevan",
    region: "Asia",
    population: 2790974,
    languages: ["Armenian"],
    currencies: ["Armenian dram (AMD)"],
    flagUrl: "https://flagcdn.com/am.svg",
    funFact: "Armenia was the first country in the world to adopt Christianity as its state religion."
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
    name: "Austria",
    code: "AT",
    capital: "Vienna",
    region: "Europe",
    population: 8977139,
    languages: ["German"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/at.svg",
    funFact: "The sewing machine was invented in Austria in 1818 by Josef Madersperger."
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    capital: "Baku",
    region: "Asia",
    population: 10110116,
    languages: ["Azerbaijani"],
    currencies: ["Azerbaijani manat (AZN)"],
    flagUrl: "https://flagcdn.com/az.svg",
    funFact: "Azerbaijan is known as 'The Land of Fire'."
  },
  {
    name: "Bahamas",
    code: "BS",
    capital: "Nassau",
    region: "Americas",
    population: 407906,
    languages: ["English"],
    currencies: ["Bahamian dollar (BSD)"],
    flagUrl: "https://flagcdn.com/bs.svg",
    funFact: "The Bahamas is an archipelago of about 700 islands and 2,400 cays."
  },
  {
    name: "Bahrain",
    code: "BH",
    capital: "Manama",
    region: "Asia",
    population: 1463265,
    languages: ["Arabic"],
    currencies: ["Bahraini dinar (BHD)"],
    flagUrl: "https://flagcdn.com/bh.svg",
    funFact: "Bahrain was one of the first states in the Gulf to discover oil, in 1932."
  },
  {
    name: "Bangladesh",
    code: "BD",
    capital: "Dhaka",
    region: "Asia",
    population: 169356251,
    languages: ["Bengali"],
    currencies: ["Bangladeshi taka (BDT)"],
    flagUrl: "https://flagcdn.com/bd.svg",
    funFact: "Bangladesh has the world's largest river delta, the Ganges Delta."
  },
  {
    name: "Barbados",
    code: "BB",
    capital: "Bridgetown",
    region: "Americas",
    population: 281200,
    languages: ["English"],
    currencies: ["Barbadian dollar (BBD)"],
    flagUrl: "https://flagcdn.com/bb.svg",
    funFact: "The grapefruit is a hybrid fruit that originated in Barbados."
  },
  {
    name: "Belarus",
    code: "BY",
    capital: "Minsk",
    region: "Europe",
    population: 9349645,
    languages: ["Belarusian", "Russian"],
    currencies: ["Belarusian ruble (BYN)"],
    flagUrl: "https://flagcdn.com/by.svg",
    funFact: "Belarus has one of the oldest and largest primeval forests in Europe, the Białowieża Forest."
  },
  {
    name: "Belgium",
    code: "BE",
    capital: "Brussels",
    region: "Europe",
    population: 11589623,
    languages: ["Dutch", "French", "German"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/be.svg",
    funFact: "The Big Bang theory originated in Belgium."
  },
  {
    name: "Belize",
    code: "BZ",
    capital: "Belmopan",
    region: "Americas",
    population: 397621,
    languages: ["English"],
    currencies: ["Belize dollar (BZD)"],
    flagUrl: "https://flagcdn.com/bz.svg",
    funFact: "Belize has the world's only jaguar preserve."
  },
  {
    name: "Benin",
    code: "BJ",
    capital: "Porto-Novo",
    region: "Africa",
    population: 12123200,
    languages: ["French"],
    currencies: ["West African CFA franc (XOF)"],
    flagUrl: "https://flagcdn.com/bj.svg",
    funFact: "Benin is considered the birthplace of the Vodun (Voodoo) religion."
  },
  {
    name: "Bhutan",
    code: "BT",
    capital: "Thimphu",
    region: "Asia",
    population: 777482,
    languages: ["Dzongkha"],
    currencies: ["Bhutanese ngultrum (BTN)", "Indian rupee (INR)"],
    flagUrl: "https://flagcdn.com/bt.svg",
    funFact: "Bhutan is the only country in the world that measures Gross National Happiness."
  },
  {
    name: "Bolivia",
    code: "BO",
    capital: "Sucre",
    region: "Americas",
    population: 12079472,
    languages: ["Spanish", "Quechua", "Aymara"],
    currencies: ["Bolivian boliviano (BOB)"],
    flagUrl: "https://flagcdn.com/bo.svg",
    funFact: "Salar de Uyuni in Bolivia is the world's largest salt flat."
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    capital: "Sarajevo",
    region: "Europe",
    population: 3233526,
    languages: ["Bosnian", "Croatian", "Serbian"],
    currencies: ["Bosnia and Herzegovina convertible mark (BAM)"],
    flagUrl: "https://flagcdn.com/ba.svg",
    funFact: "The name 'Bosnia' comes from an old Indo-European word 'bosana', which means water."
  },
  {
    name: "Botswana",
    code: "BW",
    capital: "Gaborone",
    region: "Africa",
    population: 2351627,
    languages: ["English", "Tswana"],
    currencies: ["Botswana pula (BWP)"],
    flagUrl: "https://flagcdn.com/bw.svg",
    funFact: "Botswana is home to the world's largest concentration of African elephants."
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
    name: "Brunei",
    code: "BN",
    capital: "Bandar Seri Begawan",
    region: "Asia",
    population: 445373,
    languages: ["Malay"],
    currencies: ["Brunei dollar (BND)"],
    flagUrl: "https://flagcdn.com/bn.svg",
    funFact: "Brunei's Sultan has a private collection of over 7,000 cars."
  },
  {
    name: "Bulgaria",
    code: "BG",
    capital: "Sofia",
    region: "Europe",
    population: 6875040,
    languages: ["Bulgarian"],
    currencies: ["Bulgarian lev (BGN)"],
    flagUrl: "https://flagcdn.com/bg.svg",
    funFact: "Bulgaria is the oldest country in Europe that hasn't changed its name since it was first established."
  },
  {
    name: "Burkina Faso",
    code: "BF",
    capital: "Ouagadougou",
    region: "Africa",
    population: 20903278,
    languages: ["French"],
    currencies: ["West African CFA franc (XOF)"],
    flagUrl: "https://flagcdn.com/bf.svg",
    funFact: "The name Burkina Faso means 'Land of the Honest People'."
  },
  {
    name: "Burundi",
    code: "BI",
    capital: "Gitega",
    region: "Africa",
    population: 12551213,
    languages: ["Kirundi", "French", "English"],
    currencies: ["Burundian franc (BIF)"],
    flagUrl: "https://flagcdn.com/bi.svg",
    funFact: "Lake Tanganyika in Burundi is the second deepest lake in the world."
  },
  {
    name: "Cabo Verde",
    code: "CV",
    capital: "Praia",
    region: "Africa",
    population: 561901,
    languages: ["Portuguese"],
    currencies: ["Cape Verdean escudo (CVE)"],
    flagUrl: "https://flagcdn.com/cv.svg",
    funFact: "The islands of Cabo Verde are named after the Cap-Vert peninsula in Senegal, the westernmost point of continental Africa."
  },
  {
    name: "Cambodia",
    code: "KH",
    capital: "Phnom Penh",
    region: "Asia",
    population: 16718971,
    languages: ["Khmer"],
    currencies: ["Cambodian riel (KHR)"],
    flagUrl: "https://flagcdn.com/kh.svg",
    funFact: "The Angkor Wat temple complex is the largest religious monument in the world."
  },
  {
    name: "Cameroon",
    code: "CM",
    capital: "Yaoundé",
    region: "Africa",
    population: 26545864,
    languages: ["English", "French"],
    currencies: ["Central African CFA franc (XAF)"],
    flagUrl: "https://flagcdn.com/cm.svg",
    funFact: "Cameroon is often called 'Africa in miniature' because of its geographical and cultural diversity."
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
    name: "Central African Republic",
    code: "CF",
    capital: "Bangui",
    region: "Africa",
    population: 4829767,
    languages: ["Sango", "French"],
    currencies: ["Central African CFA franc (XAF)"],
    flagUrl: "https://flagcdn.com/cf.svg",
    funFact: "One of the world's last two species of northern white rhinos was from the Central African Republic."
  },
  {
    name: "Chad",
    code: "TD",
    capital: "N'Djamena",
    region: "Africa",
    population: 16915000,
    languages: ["French", "Arabic"],
    currencies: ["Central African CFA franc (XAF)"],
    flagUrl: "https://flagcdn.com/td.svg",
    funFact: "Lake Chad, which the country is named after, is the seventh largest lake in the world."
  },
  {
    name: "Chile",
    code: "CL",
    capital: "Santiago",
    region: "Americas",
    population: 19116201,
    languages: ["Spanish"],
    currencies: ["Chilean peso (CLP)"],
    flagUrl: "https://flagcdn.com/cl.svg",
    funFact: "The Atacama Desert in Chile is the driest desert in the world."
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
    name: "Colombia",
    code: "CO",
    capital: "Bogotá",
    region: "Americas",
    population: 51874024,
    languages: ["Spanish"],
    currencies: ["Colombian peso (COP)"],
    flagUrl: "https://flagcdn.com/co.svg",
    funFact: "Colombia is the second most biodiverse country in the world."
  },
  {
    name: "Comoros",
    code: "KM",
    capital: "Moroni",
    region: "Africa",
    population: 869601,
    languages: ["Arabic", "French", "Comorian"],
    currencies: ["Comorian franc (KMF)"],
    flagUrl: "https://flagcdn.com/km.svg",
    funFact: "The Comoros islands are the world's second-largest producer of vanilla."
  },
  {
    name: "Congo (Democratic Republic of the)",
    code: "CD",
    capital: "Kinshasa",
    region: "Africa",
    population: 92377986,
    languages: ["French"],
    currencies: ["Congolese franc (CDF)"],
    flagUrl: "https://flagcdn.com/cd.svg",
    funFact: "The Congo River is the deepest river in the world."
  },
  {
    name: "Congo (Republic of the)",
    code: "CG",
    capital: "Brazzaville",
    region: "Africa",
    population: 5657000,
    languages: ["French"],
    currencies: ["Central African CFA franc (XAF)"],
    flagUrl: "https://flagcdn.com/cg.svg",
    funFact: "The Republic of the Congo is home to the famous 'sapeurs' – members of a society of elegant people."
  },
  {
    name: "Costa Rica",
    code: "CR",
    capital: "San José",
    region: "Americas",
    population: 5163038,
    languages: ["Spanish"],
    currencies: ["Costa Rican colón (CRC)"],
    flagUrl: "https://flagcdn.com/cr.svg",
    funFact: "Costa Rica has no army."
  },
  {
    name: "Côte d'Ivoire",
    code: "CI",
    capital: "Yamoussoukro",
    region: "Africa",
    population: 26378274,
    languages: ["French"],
    currencies: ["West African CFA franc (XOF)"],
    flagUrl: "https://flagcdn.com/ci.svg",
    funFact: "The Basilica of Our Lady of Peace of Yamoussoukro is the largest church in the world."
  },
  {
    name: "Croatia",
    code: "HR",
    capital: "Zagreb",
    region: "Europe",
    population: 4047200,
    languages: ["Croatian"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/hr.svg",
    funFact: "The necktie was invented in Croatia."
  },
  {
    name: "Cuba",
    code: "CU",
    capital: "Havana",
    region: "Americas",
    population: 11326616,
    languages: ["Spanish"],
    currencies: ["Cuban peso (CUP)"],
    flagUrl: "https://flagcdn.com/cu.svg",
    funFact: "Cuba is the largest island in the Caribbean."
  },
  {
    name: "Cyprus",
    code: "CY",
    capital: "Nicosia",
    region: "Europe",
    population: 1207359,
    languages: ["Greek", "Turkish"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/cy.svg",
    funFact: "The oldest known wine label in the world, 'Commandaria', belongs to Cyprus."
  },
  {
    name: "Czechia",
    code: "CZ",
    capital: "Prague",
    region: "Europe",
    population: 10510751,
    languages: ["Czech"],
    currencies: ["Czech koruna (CZK)"],
    flagUrl: "https://flagcdn.com/cz.svg",
    funFact: "The Czech Republic has the most castles per capita in the world."
  },
  {
    name: "Denmark",
    code: "DK",
    capital: "Copenhagen",
    region: "Europe",
    population: 5831404,
    languages: ["Danish"],
    currencies: ["Danish krone (DKK)"],
    flagUrl: "https://flagcdn.com/dk.svg",
    funFact: "The Danish flag, 'Dannebrog', is the oldest continuously used national flag in the world."
  },
  {
    name: "Djibouti",
    code: "DJ",
    capital: "Djibouti",
    region: "Africa",
    population: 988000,
    languages: ["French", "Arabic"],
    currencies: ["Djiboutian franc (DJF)"],
    flagUrl: "https://flagcdn.com/dj.svg",
    funFact: "Lake Assal in Djibouti is the lowest point in Africa and the third-lowest point in the world."
  },
  {
    name: "Dominica",
    code: "DM",
    capital: "Roseau",
    region: "Americas",
    population: 71986,
    languages: ["English"],
    currencies: ["Eastern Caribbean dollar (XCD)"],
    flagUrl: "https://flagcdn.com/dm.svg",
    funFact: "Dominica is known as the 'Nature Isle of the Caribbean' for its lush scenery and varied flora and fauna."
  },
  {
    name: "Dominican Republic",
    code: "DO",
    capital: "Santo Domingo",
    region: "Americas",
    population: 10847910,
    languages: ["Spanish"],
    currencies: ["Dominican peso (DOP)"],
    flagUrl: "https://flagcdn.com/do.svg",
    funFact: "The Dominican Republic is the site of the first cathedral, castle, monastery, and fortress built in the Americas."
  },
  {
    name: "Ecuador",
    code: "EC",
    capital: "Quito",
    region: "Americas",
    population: 17643054,
    languages: ["Spanish"],
    currencies: ["United States dollar (USD)"],
    flagUrl: "https://flagcdn.com/ec.svg",
    funFact: "The Galápagos Islands, a province of Ecuador, were the basis for Charles Darwin's theory of evolution."
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
    name: "El Salvador",
    code: "SV",
    capital: "San Salvador",
    region: "Americas",
    population: 6486205,
    languages: ["Spanish"],
    currencies: ["United States dollar (USD)"],
    flagUrl: "https://flagcdn.com/sv.svg",
    funFact: "El Salvador is known as the 'Land of Volcanoes'."
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    capital: "Malabo",
    region: "Africa",
    population: 1468777,
    languages: ["Spanish", "French", "Portuguese"],
    currencies: ["Central African CFA franc (XAF)"],
    flagUrl: "https://flagcdn.com/gq.svg",
    funFact: "Equatorial Guinea is the only sovereign African state where Spanish is an official language."
  },
  {
    name: "Eritrea",
    code: "ER",
    capital: "Asmara",
    region: "Africa",
    population: 3601467,
    languages: ["Tigrinya", "Arabic", "English"],
    currencies: ["Eritrean nakfa (ERN)"],
    flagUrl: "https://flagcdn.com/er.svg",
    funFact: "Asmara, the capital of Eritrea, is a UNESCO World Heritage site for its well-preserved modernist architecture."
  },
  {
    name: "Estonia",
    code: "EE",
    capital: "Tallinn",
    region: "Europe",
    population: 1331824,
    languages: ["Estonian"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/ee.svg",
    funFact: "Estonia was the first country in the world to adopt online voting."
  },
  {
    name: "Eswatini",
    code: "SZ",
    capital: "Mbabane",
    region: "Africa",
    population: 1160164,
    languages: ["English", "Swazi"],
    currencies: ["Swazi lilangeni (SZL)", "South African rand (ZAR)"],
    flagUrl: "https://flagcdn.com/sz.svg",
    funFact: "Eswatini is one of the few remaining absolute monarchies in the world."
  },
  {
    name: "Ethiopia",
    code: "ET",
    capital: "Addis Ababa",
    region: "Africa",
    population: 120283026,
    languages: ["Amharic"],
    currencies: ["Ethiopian birr (ETB)"],
    flagUrl: "https://flagcdn.com/et.svg",
    funFact: "Ethiopia is the only African country that was never colonized by a European power."
  },
  {
    name: "Fiji",
    code: "FJ",
    capital: "Suva",
    region: "Oceania",
    population: 896445,
    languages: ["English", "Fijian", "Fiji Hindi"],
    currencies: ["Fijian dollar (FJD)"],
    flagUrl: "https://flagcdn.com/fj.svg",
    funFact: "Fiji is made up of 333 islands, but only about 110 are inhabited."
  },
  {
    name: "Finland",
    code: "FI",
    capital: "Helsinki",
    region: "Europe",
    population: 5530719,
    languages: ["Finnish", "Swedish"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/fi.svg",
    funFact: "There are more saunas than cars in Finland."
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
    name: "Gabon",
    code: "GA",
    capital: "Libreville",
    region: "Africa",
    population: 2225734,
    languages: ["French"],
    currencies: ["Central African CFA franc (XAF)"],
    flagUrl: "https://flagcdn.com/ga.svg",
    funFact: "About 85% of Gabon's territory is covered by rainforest."
  },
  {
    name: "Gambia",
    code: "GM",
    capital: "Banjul",
    region: "Africa",
    population: 2416668,
    languages: ["English"],
    currencies: ["Gambian dalasi (GMD)"],
    flagUrl: "https://flagcdn.com/gm.svg",
    funFact: "The Gambia is the smallest country on mainland Africa."
  },
  {
    name: "Georgia",
    code: "GE",
    capital: "Tbilisi",
    region: "Asia",
    population: 3716858,
    languages: ["Georgian"],
    currencies: ["Georgian lari (GEL)"],
    flagUrl: "https://flagcdn.com/ge.svg",
    funFact: "Georgia is considered the birthplace of wine, with a history of winemaking stretching back 8,000 years."
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
    name: "Ghana",
    code: "GH",
    capital: "Accra",
    region: "Africa",
    population: 31072940,
    languages: ["English"],
    currencies: ["Ghanaian cedi (GHS)"],
    flagUrl: "https://flagcdn.com/gh.svg",
    funFact: "The world's largest artificial lake, Lake Volta, is in Ghana."
  },
  {
    name: "Greece",
    code: "GR",
    capital: "Athens",
    region: "Europe",
    population: 10423054,
    languages: ["Greek"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/gr.svg",
    funFact: "Greece has more archaeological museums than any other country in the world."
  },
  {
    name: "Grenada",
    code: "GD",
    capital: "St. George's",
    region: "Americas",
    population: 112523,
    languages: ["English"],
    currencies: ["Eastern Caribbean dollar (XCD)"],
    flagUrl: "https://flagcdn.com/gd.svg",
    funFact: "Grenada is known as the 'Isle of Spice' because it's a leading producer of spices like nutmeg and mace."
  },
  {
    name: "Guatemala",
    code: "GT",
    capital: "Guatemala City",
    region: "Americas",
    population: 17915568,
    languages: ["Spanish"],
    currencies: ["Guatemalan quetzal (GTQ)"],
    flagUrl: "https://flagcdn.com/gt.svg",
    funFact: "The first-ever chocolate bar was invented in Guatemala during the Mayan times."
  },
  {
    name: "Guinea",
    code: "GN",
    capital: "Conakry",
    region: "Africa",
    population: 13132795,
    languages: ["French"],
    currencies: ["Guinean franc (GNF)"],
    flagUrl: "https://flagcdn.com/gn.svg",
    funFact: "Guinea is one of the world's largest producers of bauxite."
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    capital: "Bissau",
    region: "Africa",
    population: 1968001,
    languages: ["Portuguese"],
    currencies: ["West African CFA franc (XOF)"],
    flagUrl: "https://flagcdn.com/gw.svg",
    funFact: "The Bijagos Archipelago in Guinea-Bissau is a UNESCO Biosphere Reserve."
  },
  {
    name: "Guyana",
    code: "GY",
    capital: "Georgetown",
    region: "Americas",
    population: 786559,
    languages: ["English"],
    currencies: ["Guyanese dollar (GYD)"],
    flagUrl: "https://flagcdn.com/gy.svg",
    funFact: "Guyana is the only English-speaking country in South America."
  },
  {
    name: "Haiti",
    code: "HT",
    capital: "Port-au-Prince",
    region: "Americas",
    population: 11402533,
    languages: ["French", "Haitian Creole"],
    currencies: ["Haitian gourde (HTG)"],
    flagUrl: "https://flagcdn.com/ht.svg",
    funFact: "Haiti was the first independent nation of Latin America and the Caribbean, and the first black-led republic in the world."
  },
  {
    name: "Honduras",
    code: "HN",
    capital: "Tegucigalpa",
    region: "Americas",
    population: 9904608,
    languages: ["Spanish"],
    currencies: ["Honduran lempira (HNL)"],
    flagUrl: "https://flagcdn.com/hn.svg",
    funFact: "The term 'banana republic' was first coined to describe Honduras."
  },
  {
    name: "Hungary",
    code: "HU",
    capital: "Budapest",
    region: "Europe",
    population: 9749763,
    languages: ["Hungarian"],
    currencies: ["Hungarian forint (HUF)"],
    flagUrl: "https://flagcdn.com/hu.svg",
    funFact: "The Rubik's Cube was invented by a Hungarian architect, Ernő Rubik."
  },
  {
    name: "Iceland",
    code: "IS",
    capital: "Reykjavik",
    region: "Europe",
    population: 376248,
    languages: ["Icelandic"],
    currencies: ["Icelandic króna (ISK)"],
    flagUrl: "https://flagcdn.com/is.svg",
    funFact: "There are no mosquitoes in Iceland."
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
    name: "Indonesia",
    code: "ID",
    capital: "Jakarta",
    region: "Asia",
    population: 273523615,
    languages: ["Indonesian"],
    currencies: ["Indonesian rupiah (IDR)"],
    flagUrl: "https://flagcdn.com/id.svg",
    funFact: "Indonesia is the largest archipelago in the world, with over 17,000 islands."
  },
  {
    name: "Iran",
    code: "IR",
    capital: "Tehran",
    region: "Asia",
    population: 83992953,
    languages: ["Persian"],
    currencies: ["Iranian rial (IRR)"],
    flagUrl: "https://flagcdn.com/ir.svg",
    funFact: "Iran is home to one of the world's oldest civilizations."
  },
  {
    name: "Iraq",
    code: "IQ",
    capital: "Baghdad",
    region: "Asia",
    population: 40222503,
    languages: ["Arabic", "Kurdish"],
    currencies: ["Iraqi dinar (IQD)"],
    flagUrl: "https://flagcdn.com/iq.svg",
    funFact: "The wheel, writing, and agriculture are all believed to have originated in ancient Iraq (Mesopotamia)."
  },
  {
    name: "Ireland",
    code: "IE",
    capital: "Dublin",
    region: "Europe",
    population: 4994724,
    languages: ["English", "Irish"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/ie.svg",
    funFact: "The White House in Washington D.C. was designed by an Irish architect, James Hoban."
  },
  {
    name: "Israel",
    code: "IL",
    capital: "Jerusalem",
    region: "Asia",
    population: 9216900,
    languages: ["Hebrew", "Arabic"],
    currencies: ["Israeli new shekel (ILS)"],
    flagUrl: "https://flagcdn.com/il.svg",
    funFact: "Israel has the highest number of museums per capita in the world."
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
    name: "Jamaica",
    code: "JM",
    capital: "Kingston",
    region: "Americas",
    population: 2961167,
    languages: ["English"],
    currencies: ["Jamaican dollar (JMD)"],
    flagUrl: "https://flagcdn.com/jm.svg",
    funFact: "Jamaica was the first Caribbean country to gain independence from the UK."
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
    name: "Jordan",
    code: "JO",
    capital: "Amman",
    region: "Asia",
    population: 10203140,
    languages: ["Arabic"],
    currencies: ["Jordanian dinar (JOD)"],
    flagUrl: "https://flagcdn.com/jo.svg",
    funFact: "The ancient city of Petra in Jordan is one of the New7Wonders of the World."
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    capital: "Nur-Sultan",
    region: "Asia",
    population: 18776707,
    languages: ["Kazakh", "Russian"],
    currencies: ["Kazakhstani tenge (KZT)"],
    flagUrl: "https://flagcdn.com/kz.svg",
    funFact: "Kazakhstan is the world's largest landlocked country."
  },
  {
    name: "Kenya",
    code: "KE",
    capital: "Nairobi",
    region: "Africa",
    population: 53771300,
    languages: ["English", "Swahili"],
    currencies: ["Kenyan shilling (KES)"],
    flagUrl: "https://flagcdn.com/ke.svg",
    funFact: "The Great Rift Valley, which runs through Kenya, was formed more than 25 million years ago."
  },
  {
    name: "Kiribati",
    code: "KI",
    capital: "South Tarawa",
    region: "Oceania",
    population: 119449,
    languages: ["English", "Gilbertese"],
    currencies: ["Kiribati dollar (KID)", "Australian dollar (AUD)"],
    flagUrl: "https://flagcdn.com/ki.svg",
    funFact: "Kiribati is the only country in the world that is situated in all four hemispheres."
  },
  {
    name: "Kuwait",
    code: "KW",
    capital: "Kuwait City",
    region: "Asia",
    population: 4270571,
    languages: ["Arabic"],
    currencies: ["Kuwaiti dinar (KWD)"],
    flagUrl: "https://flagcdn.com/kw.svg",
    funFact: "The Kuwaiti dinar is the highest-valued currency in the world."
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    capital: "Bishkek",
    region: "Asia",
    population: 6591600,
    languages: ["Kyrgyz", "Russian"],
    currencies: ["Kyrgyzstani som (KGS)"],
    flagUrl: "https://flagcdn.com/kg.svg",
    funFact: "The epic poem Manas, from Kyrgyzstan, is 20 times longer than the Iliad and the Odyssey combined."
  },
  {
    name: "Laos",
    code: "LA",
    capital: "Vientiane",
    region: "Asia",
    population: 7275560,
    languages: ["Lao"],
    currencies: ["Lao kip (LAK)"],
    flagUrl: "https://flagcdn.com/la.svg",
    funFact: "Laos is the most heavily bombed country in history per capita."
  },
  {
    name: "Latvia",
    code: "LV",
    capital: "Riga",
    region: "Europe",
    population: 1886198,
    languages: ["Latvian"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/lv.svg",
    funFact: "Latvia has one of the fastest internet speeds in the world."
  },
  {
    name: "Lebanon",
    code: "LB",
    capital: "Beirut",
    region: "Asia",
    population: 6825445,
    languages: ["Arabic", "French"],
    currencies: ["Lebanese pound (LBP)"],
    flagUrl: "https://flagcdn.com/lb.svg",
    funFact: "Lebanon is one of the oldest countries in the world, with a history dating back over 7,000 years."
  },
  {
    name: "Lesotho",
    code: "LS",
    capital: "Maseru",
    region: "Africa",
    population: 2142249,
    languages: ["Sesotho", "English"],
    currencies: ["Lesotho loti (LSL)", "South African rand (ZAR)"],
    flagUrl: "https://flagcdn.com/ls.svg",
    funFact: "Lesotho is one of only three countries in the world that are completely surrounded by another country (enclaved)."
  },
  {
    name: "Liberia",
    code: "LR",
    capital: "Monrovia",
    region: "Africa",
    population: 5057681,
    languages: ["English"],
    currencies: ["Liberian dollar (LRD)"],
    flagUrl: "https://flagcdn.com/lr.svg",
    funFact: "Liberia was the first African republic to proclaim its independence."
  },
  {
    name: "Libya",
    code: "LY",
    capital: "Tripoli",
    region: "Africa",
    population: 6871292,
    languages: ["Arabic"],
    currencies: ["Libyan dinar (LYD)"],
    flagUrl: "https://flagcdn.com/ly.svg",
    funFact: "99% of Libya is desert."
  },
  {
    name: "Liechtenstein",
    code: "LI",
    capital: "Vaduz",
    region: "Europe",
    population: 38128,
    languages: ["German"],
    currencies: ["Swiss franc (CHF)"],
    flagUrl: "https://flagcdn.com/li.svg",
    funFact: "Liechtenstein is the world's largest producer of false teeth."
  },
  {
    name: "Lithuania",
    code: "LT",
    capital: "Vilnius",
    region: "Europe",
    population: 2722289,
    languages: ["Lithuanian"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/lt.svg",
    funFact: "Lithuania has its own national scent, called 'the Scent of Lithuania'."
  },
  {
    name: "Luxembourg",
    code: "LU",
    capital: "Luxembourg",
    region: "Europe",
    population: 632275,
    languages: ["Luxembourgish", "French", "German"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/lu.svg",
    funFact: "Luxembourg is the last remaining Grand Duchy in the world."
  },
  {
    name: "Madagascar",
    code: "MG",
    capital: "Antananarivo",
    region: "Africa",
    population: 27691018,
    languages: ["Malagasy", "French"],
    currencies: ["Malagasy ariary (MGA)"],
    flagUrl: "https://flagcdn.com/mg.svg",
    funFact: "Over 90% of Madagascar's wildlife is found nowhere else on Earth."
  },
  {
    name: "Malawi",
    code: "MW",
    capital: "Lilongwe",
    region: "Africa",
    population: 19129952,
    languages: ["English", "Chichewa"],
    currencies: ["Malawian kwacha (MWK)"],
    flagUrl: "https://flagcdn.com/mw.svg",
    funFact: "Lake Malawi has more species of fish than any other lake in the world."
  },
  {
    name: "Malaysia",
    code: "MY",
    capital: "Kuala Lumpur",
    region: "Asia",
    population: 32365999,
    languages: ["Malaysian"],
    currencies: ["Malaysian ringgit (MYR)"],
    flagUrl: "https://flagcdn.com/my.svg",
    funFact: "The world's largest cave chamber by area, the Sarawak Chamber, is in Malaysia."
  },
  {
    name: "Maldives",
    code: "MV",
    capital: "Malé",
    region: "Asia",
    population: 540544,
    languages: ["Dhivehi"],
    currencies: ["Maldivian rufiyaa (MVR)"],
    flagUrl: "https://flagcdn.com/mv.svg",
    funFact: "The Maldives is the lowest and flattest country in the world."
  },
  {
    name: "Mali",
    code: "ML",
    capital: "Bamako",
    region: "Africa",
    population: 20250834,
    languages: ["French"],
    currencies: ["West African CFA franc (XOF)"],
    flagUrl: "https://flagcdn.com/ml.svg",
    funFact: "The ancient city of Timbuktu in Mali was a major center for learning and trade."
  },
  {
    name: "Malta",
    code: "MT",
    capital: "Valletta",
    region: "Europe",
    population: 525285,
    languages: ["Maltese", "English"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/mt.svg",
    funFact: "The megalithic temples of Malta are some of the oldest freestanding structures in the world."
  },
  {
    name: "Marshall Islands",
    code: "MH",
    capital: "Majuro",
    region: "Oceania",
    population: 59190,
    languages: ["Marshallese", "English"],
    currencies: ["United States dollar (USD)"],
    flagUrl: "https://flagcdn.com/mh.svg",
    funFact: "The Marshall Islands have the largest shark sanctuary in the world."
  },
  {
    name: "Mauritania",
    code: "MR",
    capital: "Nouakchott",
    region: "Africa",
    population: 4649658,
    languages: ["Arabic"],
    currencies: ["Mauritanian ouguiya (MRU)"],
    flagUrl: "https://flagcdn.com/mr.svg",
    funFact: "The Richat Structure, also known as the 'Eye of the Sahara', is a prominent circular feature in Mauritania's desert."
  },
  {
    name: "Mauritius",
    code: "MU",
    capital: "Port Louis",
    region: "Africa",
    population: 1265740,
    languages: ["English", "French"],
    currencies: ["Mauritian rupee (MUR)"],
    flagUrl: "https://flagcdn.com/mu.svg",
    funFact: "The dodo bird was endemic to Mauritius before it became extinct."
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
    name: "Micronesia",
    code: "FM",
    capital: "Palikir",
    region: "Oceania",
    population: 115023,
    languages: ["English"],
    currencies: ["United States dollar (USD)"],
    flagUrl: "https://flagcdn.com/fm.svg",
    funFact: "Micronesia consists of 607 islands."
  },
  {
    name: "Moldova",
    code: "MD",
    capital: "Chișinău",
    region: "Europe",
    population: 2617820,
    languages: ["Romanian"],
    currencies: ["Moldovan leu (MDL)"],
    flagUrl: "https://flagcdn.com/md.svg",
    funFact: "Moldova has the largest wine cellar in the world, Mileștii Mici, which stretches for 200 kilometers."
  },
  {
    name: "Monaco",
    code: "MC",
    capital: "Monaco",
    region: "Europe",
    population: 39242,
    languages: ["French"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/mc.svg",
    funFact: "Monaco is the second smallest country in the world, after Vatican City."
  },
  {
    name: "Mongolia",
    code: "MN",
    capital: "Ulaanbaatar",
    region: "Asia",
    population: 3278290,
    languages: ["Mongolian"],
    currencies: ["Mongolian tögrög (MNT)"],
    flagUrl: "https://flagcdn.com/mn.svg",
    funFact: "Mongolia is the most sparsely populated sovereign state in the world."
  },
  {
    name: "Montenegro",
    code: "ME",
    capital: "Podgorica",
    region: "Europe",
    population: 628000,
    languages: ["Montenegrin"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/me.svg",
    funFact: "The Tara River Canyon in Montenegro is the deepest canyon in Europe."
  },
  {
    name: "Morocco",
    code: "MA",
    capital: "Rabat",
    region: "Africa",
    population: 36910560,
    languages: ["Arabic", "Berber"],
    currencies: ["Moroccan dirham (MAD)"],
    flagUrl: "https://flagcdn.com/ma.svg",
    funFact: "The University of Al-Karaouine in Fez, Morocco, is the oldest continuously operating university in the world."
  },
  {
    name: "Mozambique",
    code: "MZ",
    capital: "Maputo",
    region: "Africa",
    population: 31255435,
    languages: ["Portuguese"],
    currencies: ["Mozambican metical (MZN)"],
    flagUrl: "https://flagcdn.com/mz.svg",
    funFact: "Mozambique is the only country whose flag has a modern firearm on it (an AK-47)."
  },
  {
    name: "Myanmar",
    code: "MM",
    capital: "Naypyidaw",
    region: "Asia",
    population: 54409800,
    languages: ["Burmese"],
    currencies: ["Burmese kyat (MMK)"],
    flagUrl: "https://flagcdn.com/mm.svg",
    funFact: "Myanmar is home to the world's largest book, located at the Kuthodaw Pagoda."
  },
  {
    name: "Namibia",
    code: "NA",
    capital: "Windhoek",
    region: "Africa",
    population: 2540905,
    languages: ["English"],
    currencies: ["Namibian dollar (NAD)", "South African rand (ZAR)"],
    flagUrl: "https://flagcdn.com/na.svg",
    funFact: "Namibia has the largest free-roaming cheetah population in the world."
  },
  {
    name: "Nauru",
    code: "NR",
    capital: "Yaren",
    region: "Oceania",
    population: 10834,
    languages: ["Nauruan", "English"],
    currencies: ["Australian dollar (AUD)"],
    flagUrl: "https://flagcdn.com/nr.svg",
    funFact: "Nauru is the smallest island nation in the world."
  },
  {
    name: "Nepal",
    code: "NP",
    capital: "Kathmandu",
    region: "Asia",
    population: 29136808,
    languages: ["Nepali"],
    currencies: ["Nepalese rupee (NPR)"],
    flagUrl: "https://flagcdn.com/np.svg",
    funFact: "Nepal's flag is the only national flag that is not rectangular."
  },
  {
    name: "Netherlands",
    code: "NL",
    capital: "Amsterdam",
    region: "Europe",
    population: 17533036,
    languages: ["Dutch"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/nl.svg",
    funFact: "The Netherlands is the most densely populated country in Europe."
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
    name: "Nicaragua",
    code: "NI",
    capital: "Managua",
    region: "Americas",
    population: 6624554,
    languages: ["Spanish"],
    currencies: ["Nicaraguan córdoba (NIO)"],
    flagUrl: "https://flagcdn.com/ni.svg",
    funFact: "Lake Nicaragua is the only freshwater lake in the world to contain oceanic life such as sharks and swordfish."
  },
  {
    name: "Niger",
    code: "NE",
    capital: "Niamey",
    region: "Africa",
    population: 24206644,
    languages: ["French"],
    currencies: ["West African CFA franc (XOF)"],
    flagUrl: "https://flagcdn.com/ne.svg",
    funFact: "The world's largest protected area, the Aïr and Ténéré Natural Reserves, is in Niger."
  },
  {
    name: "Nigeria",
    code: "NG",
    capital: "Abuja",
    region: "Africa",
    population: 206139589,
    languages: ["English"],
    currencies: ["Nigerian naira (NGN)"],
    flagUrl: "https://flagcdn.com/ng.svg",
    funFact: "Nigeria is the most populous country in Africa."
  },
  {
    name: "North Korea",
    code: "KP",
    capital: "Pyongyang",
    region: "Asia",
    population: 25778816,
    languages: ["Korean"],
    currencies: ["North Korean won (KPW)"],
    flagUrl: "https://flagcdn.com/kp.svg",
    funFact: "North Korea created its own time zone in 2015, called Pyongyang Time."
  },
  {
    name: "North Macedonia",
    code: "MK",
    capital: "Skopje",
    region: "Europe",
    population: 2083374,
    languages: ["Macedonian"],
    currencies: ["Macedonian denar (MKD)"],
    flagUrl: "https://flagcdn.com/mk.svg",
    funFact: "Mother Teresa was born in Skopje, the capital of North Macedonia."
  },
  {
    name: "Norway",
    code: "NO",
    capital: "Oslo",
    region: "Europe",
    population: 5379475,
    languages: ["Norwegian"],
    currencies: ["Norwegian krone (NOK)"],
    flagUrl: "https://flagcdn.com/no.svg",
    funFact: "Norway is the birthplace of modern skiing."
  },
  {
    name: "Oman",
    code: "OM",
    capital: "Muscat",
    region: "Asia",
    population: 5106626,
    languages: ["Arabic"],
    currencies: ["Omani rial (OMR)"],
    flagUrl: "https://flagcdn.com/om.svg",
    funFact: "Oman is the oldest independent state in the Arab world."
  },
  {
    name: "Pakistan",
    code: "PK",
    capital: "Islamabad",
    region: "Asia",
    population: 220892340,
    languages: ["Urdu", "English"],
    currencies: ["Pakistani rupee (PKR)"],
    flagUrl: "https://flagcdn.com/pk.svg",
    funFact: "The world's highest paved international road, the Karakoram Highway, is in Pakistan."
  },
  {
    name: "Palau",
    code: "PW",
    capital: "Ngerulmud",
    region: "Oceania",
    population: 18094,
    languages: ["Palauan", "English"],
    currencies: ["United States dollar (USD)"],
    flagUrl: "https://flagcdn.com/pw.svg",
    funFact: "Palau's Rock Islands Southern Lagoon is a UNESCO World Heritage site."
  },
  {
    name: "Palestine",
    code: "PS",
    capital: "Ramallah",
    region: "Asia",
    population: 4803269,
    languages: ["Arabic"],
    currencies: ["Israeli new shekel (ILS)"],
    flagUrl: "https://flagcdn.com/ps.svg",
    funFact: "Bethlehem, the birthplace of Jesus, is located in the West Bank, Palestine."
  },
  {
    name: "Panama",
    code: "PA",
    capital: "Panama City",
    region: "Americas",
    population: 4314767,
    languages: ["Spanish"],
    currencies: ["Panamanian balboa (PAB)", "United States dollar (USD)"],
    flagUrl: "https://flagcdn.com/pa.svg",
    funFact: "Panama is the only place in the world where you can see the sun rise on the Pacific and set on the Atlantic."
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    capital: "Port Moresby",
    region: "Oceania",
    population: 8947024,
    languages: ["Hiri Motu", "Tok Pisin", "English"],
    currencies: ["Papua New Guinean kina (PGK)"],
    flagUrl: "https://flagcdn.com/pg.svg",
    funFact: "Papua New Guinea is the most linguistically diverse country in the world, with over 800 languages."
  },
  {
    name: "Paraguay",
    code: "PY",
    capital: "Asunción",
    region: "Americas",
    population: 7132538,
    languages: ["Spanish", "Guaraní"],
    currencies: ["Paraguayan guaraní (PYG)"],
    flagUrl: "https://flagcdn.com/py.svg",
    funFact: "Dueling is legal in Paraguay as long as both parties are registered blood donors."
  },
  {
    name: "Peru",
    code: "PE",
    capital: "Lima",
    region: "Americas",
    population: 32971854,
    languages: ["Spanish"],
    currencies: ["Peruvian sol (PEN)"],
    flagUrl: "https://flagcdn.com/pe.svg",
    funFact: "The potato is originally from Peru and there are over 3,000 different varieties."
  },
  {
    name: "Philippines",
    code: "PH",
    capital: "Manila",
    region: "Asia",
    population: 109581078,
    languages: ["Filipino", "English"],
    currencies: ["Philippine peso (PHP)"],
    flagUrl: "https://flagcdn.com/ph.svg",
    funFact: "The Philippines is the only country in the world whose flag is flown upside down during wartime."
  },
  {
    name: "Poland",
    code: "PL",
    capital: "Warsaw",
    region: "Europe",
    population: 37950802,
    languages: ["Polish"],
    currencies: ["Polish złoty (PLN)"],
    flagUrl: "https://flagcdn.com/pl.svg",
    funFact: "Poland is the world's biggest amber exporter."
  },
  {
    name: "Portugal",
    code: "PT",
    capital: "Lisbon",
    region: "Europe",
    population: 10196709,
    languages: ["Portuguese"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/pt.svg",
    funFact: "Portugal is the oldest nation-state in Europe."
  },
  {
    name: "Qatar",
    code: "QA",
    capital: "Doha",
    region: "Asia",
    population: 2881053,
    languages: ["Arabic"],
    currencies: ["Qatari riyal (QAR)"],
    flagUrl: "https://flagcdn.com/qa.svg",
    funFact: "Qatar is the richest country in the world per capita."
  },
  {
    name: "Romania",
    code: "RO",
    capital: "Bucharest",
    region: "Europe",
    population: 19234858,
    languages: ["Romanian"],
    currencies: ["Romanian leu (RON)"],
    flagUrl: "https://flagcdn.com/ro.svg",
    funFact: "The Parliament Palace in Bucharest is the second largest administrative building in the world, after the Pentagon."
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
    name: "Rwanda",
    code: "RW",
    capital: "Kigali",
    region: "Africa",
    population: 12952218,
    languages: ["Kinyarwanda", "English", "French"],
    currencies: ["Rwandan franc (RWF)"],
    flagUrl: "https://flagcdn.com/rw.svg",
    funFact: "Rwanda has the highest representation of women in parliament in the world."
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    capital: "Basseterre",
    region: "Americas",
    population: 53199,
    languages: ["English"],
    currencies: ["Eastern Caribbean dollar (XCD)"],
    flagUrl: "https://flagcdn.com/kn.svg",
    funFact: "Saint Kitts and Nevis is the smallest sovereign state in the Western Hemisphere."
  },
  {
    name: "Saint Lucia",
    code: "LC",
    capital: "Castries",
    region: "Americas",
    population: 183627,
    languages: ["English"],
    currencies: ["Eastern Caribbean dollar (XCD)"],
    flagUrl: "https://flagcdn.com/lc.svg",
    funFact: "Saint Lucia has the world's only drive-in volcano."
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    capital: "Kingstown",
    region: "Americas",
    population: 110940,
    languages: ["English"],
    currencies: ["Eastern Caribbean dollar (XCD)"],
    flagUrl: "https://flagcdn.com/vc.svg",
    funFact: "The movie 'Pirates of the Caribbean' was filmed in St. Vincent."
  },
  {
    name: "Samoa",
    code: "WS",
    capital: "Apia",
    region: "Oceania",
    population: 198414,
    languages: ["Samoan", "English"],
    currencies: ["Samoan tālā (WST)"],
    flagUrl: "https://flagcdn.com/ws.svg",
    funFact: "Samoans are known for their traditional tattoos, called 'tatau'."
  },
  {
    name: "San Marino",
    code: "SM",
    capital: "City of San Marino",
    region: "Europe",
    population: 33931,
    languages: ["Italian"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/sm.svg",
    funFact: "San Marino is the world's oldest republic, founded in 301 AD."
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    capital: "São Tomé",
    region: "Africa",
    population: 219159,
    languages: ["Portuguese"],
    currencies: ["São Tomé and Príncipe dobra (STN)"],
    flagUrl: "https://flagcdn.com/st.svg",
    funFact: "Sao Tome and Principe is sometimes called the 'Chocolate Islands' due to its cocoa production."
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    capital: "Riyadh",
    region: "Asia",
    population: 34813871,
    languages: ["Arabic"],
    currencies: ["Saudi riyal (SAR)"],
    flagUrl: "https://flagcdn.com/sa.svg",
    funFact: "Saudi Arabia is the largest country in the world without a river."
  },
  {
    name: "Senegal",
    code: "SN",
    capital: "Dakar",
    region: "Africa",
    population: 16743927,
    languages: ["French"],
    currencies: ["West African CFA franc (XOF)"],
    flagUrl: "https://flagcdn.com/sn.svg",
    funFact: "The African Renaissance Monument in Dakar is the tallest statue in Africa."
  },
  {
    name: "Serbia",
    code: "RS",
    capital: "Belgrade",
    region: "Europe",
    population: 6908224,
    languages: ["Serbian"],
    currencies: ["Serbian dinar (RSD)"],
    flagUrl: "https://flagcdn.com/rs.svg",
    funFact: "Serbia is the world's largest exporter of raspberries."
  },
  {
    name: "Seychelles",
    code: "SC",
    capital: "Victoria",
    region: "Africa",
    population: 98462,
    languages: ["Seychellois Creole", "English", "French"],
    currencies: ["Seychellois rupee (SCR)"],
    flagUrl: "https://flagcdn.com/sc.svg",
    funFact: "The coco de mer, the world's largest seed, is found only in the Seychelles."
  },
  {
    name: "Sierra Leone",
    code: "SL",
    capital: "Freetown",
    region: "Africa",
    population: 7976983,
    languages: ["English"],
    currencies: ["Sierra Leonean leone (SLL)"],
    flagUrl: "https://flagcdn.com/sl.svg",
    funFact: "The capital, Freetown, was founded by former slaves from Nova Scotia."
  },
  {
    name: "Singapore",
    code: "SG",
    capital: "Singapore",
    region: "Asia",
    population: 5685807,
    languages: ["English", "Malay", "Mandarin", "Tamil"],
    currencies: ["Singapore dollar (SGD)"],
    flagUrl: "https://flagcdn.com/sg.svg",
    funFact: "Singapore has the world's first nocturnal zoo."
  },
  {
    name: "Slovakia",
    code: "SK",
    capital: "Bratislava",
    region: "Europe",
    population: 5459642,
    languages: ["Slovak"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/sk.svg",
    funFact: "Slovakia has more than 6,000 caves."
  },
  {
    name: "Slovenia",
    code: "SI",
    capital: "Ljubljana",
    region: "Europe",
    population: 2100126,
    languages: ["Slovene"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/si.svg",
    funFact: "A 40,000-year-old flute found in Slovenia is believed to be the world's oldest musical instrument."
  },
  {
    name: "Solomon Islands",
    code: "SB",
    capital: "Honiara",
    region: "Oceania",
    population: 686884,
    languages: ["English"],
    currencies: ["Solomon Islands dollar (SBD)"],
    flagUrl: "https://flagcdn.com/sb.svg",
    funFact: "The Solomon Islands have one of the highest densities of shipwrecks in the world, many from WWII."
  },
  {
    name: "Somalia",
    code: "SO",
    capital: "Mogadishu",
    region: "Africa",
    population: 15893222,
    languages: ["Somali", "Arabic"],
    currencies: ["Somali shilling (SOS)"],
    flagUrl: "https://flagcdn.com/so.svg",
    funFact: "Somalia has the longest coastline in mainland Africa."
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
    name: "South Korea",
    code: "KR",
    capital: "Seoul",
    region: "Asia",
    population: 51269185,
    languages: ["Korean"],
    currencies: ["South Korean Won (KRW)"],
    flagUrl: "https://flagcdn.com/kr.svg",
    funFact: "South Korea has the fastest average internet connection speed in the world."
  },
  {
    name: "South Sudan",
    code: "SS",
    capital: "Juba",
    region: "Africa",
    population: 11193725,
    languages: ["English"],
    currencies: ["South Sudanese pound (SSP)"],
    flagUrl: "https://flagcdn.com/ss.svg",
    funFact: "South Sudan is the world's newest country, having gained independence in 2011."
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
    name: "Sri Lanka",
    code: "LK",
    capital: "Sri Jayawardenepura Kotte",
    region: "Asia",
    population: 21919000,
    languages: ["Sinhala", "Tamil"],
    currencies: ["Sri Lankan rupee (LKR)"],
    flagUrl: "https://flagcdn.com/lk.svg",
    funFact: "The world's first female prime minister, Sirimavo Bandaranaike, was from Sri Lanka."
  },
  {
    name: "Sudan",
    code: "SD",
    capital: "Khartoum",
    region: "Africa",
    population: 43849260,
    languages: ["Arabic", "English"],
    currencies: ["Sudanese pound (SDG)"],
    flagUrl: "https://flagcdn.com/sd.svg",
    funFact: "Sudan has more pyramids than Egypt."
  },
  {
    name: "Suriname",
    code: "SR",
    capital: "Paramaribo",
    region: "Americas",
    population: 586632,
    languages: ["Dutch"],
    currencies: ["Surinamese dollar (SRD)"],
    flagUrl: "https://flagcdn.com/sr.svg",
    funFact: "Suriname is the most forested country in the world, with 93% of its land covered by forest."
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
    name: "Switzerland",
    code: "CH",
    capital: "Bern",
    region: "Europe",
    population: 8654622,
    languages: ["German", "French", "Italian"],
    currencies: ["Swiss franc (CHF)"],
    flagUrl: "https://flagcdn.com/ch.svg",
    funFact: "Switzerland has more high peaks than any other country in Europe."
  },
  {
    name: "Syria",
    code: "SY",
    capital: "Damascus",
    region: "Asia",
    population: 17500658,
    languages: ["Arabic"],
    currencies: ["Syrian pound (SYP)"],
    flagUrl: "https://flagcdn.com/sy.svg",
    funFact: "Damascus is one of the oldest continuously inhabited cities in the world."
  },
  {
    name: "Tajikistan",
    code: "TJ",
    capital: "Dushanbe",
    region: "Asia",
    population: 9537645,
    languages: ["Tajik"],
    currencies: ["Tajikistani somoni (TJS)"],
    flagUrl: "https://flagcdn.com/tj.svg",
    funFact: "The Pamir Highway in Tajikistan is the second highest international highway in the world."
  },
  {
    name: "Tanzania",
    code: "TZ",
    capital: "Dodoma",
    region: "Africa",
    population: 59734218,
    languages: ["Swahili", "English"],
    currencies: ["Tanzanian shilling (TZS)"],
    flagUrl: "https://flagcdn.com/tz.svg",
    funFact: "Mount Kilimanjaro, the highest mountain in Africa, is in Tanzania."
  },
  {
    name: "Thailand",
    code: "TH",
    capital: "Bangkok",
    region: "Asia",
    population: 69799978,
    languages: ["Thai"],
    currencies: ["Thai baht (THB)"],
    flagUrl: "https://flagcdn.com/th.svg",
    funFact: "The full name of Bangkok is one of the longest city names in the world."
  },
  {
    name: "Timor-Leste",
    code: "TL",
    capital: "Dili",
    region: "Asia",
    population: 1318445,
    languages: ["Portuguese", "Tetum"],
    currencies: ["United States dollar (USD)"],
    flagUrl: "https://flagcdn.com/tl.svg",
    funFact: "Timor-Leste is one of only two predominantly Christian nations in Southeast Asia, the other being the Philippines."
  },
  {
    name: "Togo",
    code: "TG",
    capital: "Lomé",
    region: "Africa",
    population: 8278724,
    languages: ["French"],
    currencies: ["West African CFA franc (XOF)"],
    flagUrl: "https://flagcdn.com/tg.svg",
    funFact: "Togo is one of the narrowest countries in the world."
  },
  {
    name: "Tonga",
    code: "TO",
    capital: "Nuku'alofa",
    region: "Oceania",
    population: 105695,
    languages: ["Tongan", "English"],
    currencies: ["Tongan paʻanga (TOP)"],
    flagUrl: "https://flagcdn.com/to.svg",
    funFact: "Tonga is the only monarchy in the Pacific that was never colonized."
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    capital: "Port of Spain",
    region: "Americas",
    population: 1399488,
    languages: ["English"],
    currencies: ["Trinidad and Tobago dollar (TTD)"],
    flagUrl: "https://flagcdn.com/tt.svg",
    funFact: "The steelpan, the only acoustic musical instrument invented in the 20th century, originated in Trinidad and Tobago."
  },
  {
    name: "Tunisia",
    code: "TN",
    capital: "Tunis",
    region: "Africa",
    population: 11818619,
    languages: ["Arabic"],
    currencies: ["Tunisian dinar (TND)"],
    flagUrl: "https://flagcdn.com/tn.svg",
    funFact: "The ancient city of Carthage, a major power in the Mediterranean, was located in modern-day Tunisia."
  },
  {
    name: "Turkey",
    code: "TR",
    capital: "Ankara",
    region: "Asia",
    population: 84339067,
    languages: ["Turkish"],
    currencies: ["Turkish lira (TRY)"],
    flagUrl: "https://flagcdn.com/tr.svg",
    funFact: "Istanbul is the only city in the world that straddles two continents: Europe and Asia."
  },
  {
    name: "Turkmenistan",
    code: "TM",
    capital: "Ashgabat",
    region: "Asia",
    population: 6031200,
    languages: ["Turkmen"],
    currencies: ["Turkmenistan manat (TMT)"],
    flagUrl: "https://flagcdn.com/tm.svg",
    funFact: "The capital city, Ashgabat, holds the world record for the highest concentration of white marble buildings."
  },
  {
    name: "Tuvalu",
    code: "TV",
    capital: "Funafuti",
    region: "Oceania",
    population: 11792,
    languages: ["Tuvaluan", "English"],
    currencies: ["Tuvaluan dollar (TVD)", "Australian dollar (AUD)"],
    flagUrl: "https://flagcdn.com/tv.svg",
    funFact: "Tuvalu earns significant revenue from its '.tv' country code top-level domain."
  },
  {
    name: "Uganda",
    code: "UG",
    capital: "Kampala",
    region: "Africa",
    population: 45741007,
    languages: ["English", "Swahili"],
    currencies: ["Ugandan shilling (UGX)"],
    flagUrl: "https://flagcdn.com/ug.svg",
    funFact: "Uganda is home to half of the world's remaining mountain gorilla population."
  },
  {
    name: "Ukraine",
    code: "UA",
    capital: "Kyiv",
    region: "Europe",
    population: 43733762,
    languages: ["Ukrainian"],
    currencies: ["Ukrainian hryvnia (UAH)"],
    flagUrl: "https://flagcdn.com/ua.svg",
    funFact: "The world's first constitution was created in Ukraine in 1710."
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    capital: "Abu Dhabi",
    region: "Asia",
    population: 9890402,
    languages: ["Arabic"],
    currencies: ["United Arab Emirates dirham (AED)"],
    flagUrl: "https://flagcdn.com/ae.svg",
    funFact: "The Burj Khalifa in Dubai is the tallest building in the world."
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
    name: "Uruguay",
    code: "UY",
    capital: "Montevideo",
    region: "Americas",
    population: 3473730,
    languages: ["Spanish"],
    currencies: ["Uruguayan peso (UYU)"],
    flagUrl: "https://flagcdn.com/uy.svg",
    funFact: "Uruguay was the first country in the world to legalize and regulate the production, sale, and consumption of cannabis."
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    capital: "Tashkent",
    region: "Asia",
    population: 34232050,
    languages: ["Uzbek"],
    currencies: ["Uzbekistani soʻm (UZS)"],
    flagUrl: "https://flagcdn.com/uz.svg",
    funFact: "The historic center of Bukhara in Uzbekistan is a UNESCO World Heritage site and contains over 140 architectural monuments."
  },
  {
    name: "Vanuatu",
    code: "VU",
    capital: "Port Vila",
    region: "Oceania",
    population: 307145,
    languages: ["Bislama", "English", "French"],
    currencies: ["Vanuatu vatu (VUV)"],
    flagUrl: "https://flagcdn.com/vu.svg",
    funFact: "Vanuatu is home to the world's most accessible active volcano, Mount Yasur."
  },
  {
    name: "Vatican City",
    code: "VA",
    capital: "Vatican City",
    region: "Europe",
    population: 825,
    languages: ["Italian", "Latin"],
    currencies: ["Euro (EUR)"],
    flagUrl: "https://flagcdn.com/va.svg",
    funFact: "Vatican City is the smallest country in the world."
  },
  {
    name: "Venezuela",
    code: "VE",
    capital: "Caracas",
    region: "Americas",
    population: 28435940,
    languages: ["Spanish"],
    currencies: ["Venezuelan bolívar soberano (VES)"],
    flagUrl: "https://flagcdn.com/ve.svg",
    funFact: "Angel Falls in Venezuela is the world's tallest uninterrupted waterfall."
  },
  {
    name: "Vietnam",
    code: "VN",
    capital: "Hanoi",
    region: "Asia",
    population: 97338579,
    languages: ["Vietnamese"],
    currencies: ["Vietnamese đồng (VND)"],
    flagUrl: "https://flagcdn.com/vn.svg",
    funFact: "Vietnam is the world's second largest coffee producer."
  },
  {
    name: "Yemen",
    code: "YE",
    capital: "Sana'a",
    region: "Asia",
    population: 29825964,
    languages: ["Arabic"],
    currencies: ["Yemeni rial (YER)"],
    flagUrl: "https://flagcdn.com/ye.svg",
    funFact: "The ancient city of Shibam in Yemen is known as the 'Manhattan of the Desert' for its high-rise mud-brick buildings."
  },
  {
    name: "Zambia",
    code: "ZM",
    capital: "Lusaka",
    region: "Africa",
    population: 18383955,
    languages: ["English"],
    currencies: ["Zambian kwacha (ZMW)"],
    flagUrl: "https://flagcdn.com/zm.svg",
    funFact: "Victoria Falls, one of the Seven Natural Wonders of the World, is on the border of Zambia and Zimbabwe."
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    capital: "Harare",
    region: "Africa",
    population: 14862924,
    languages: ["English", "Shona", "Ndebele"],
    currencies: ["Zimbabwean dollar (ZWL)"],
    flagUrl: "https://flagcdn.com/zw.svg",
    funFact: "The Great Zimbabwe ruins, a massive stone complex, gave the country its name."
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