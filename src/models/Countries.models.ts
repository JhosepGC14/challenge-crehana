export interface CountriesResult {
  data?: ListCountries;
}

export interface ListCountries {
  countries: Country[];
}

export interface Country {
  name: string;
  code: string;
  currency: null | string;
  languages: Language[];
  continent: Continent;
}

export interface Continent {
  code: Code;
  name: Name;
}

export enum Code {
  AF = "AF",
  An = "AN",
  As = "AS",
  Eu = "EU",
  Na = "NA",
  Oc = "OC",
  Sa = "SA",
}

export enum Name {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Language {
  name: string;
}
