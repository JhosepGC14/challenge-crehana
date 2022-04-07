import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query {
    countries {
      name
      code
      currency
      languages {
        name
      }
      continent {
        code
        name
      }
    }
  }
`;

export const ALL_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

export const FIND_BY_CONTINENT = gql`
  query filterCountriesByContinent($codeContinent: String) {
    countries(filter: { continent: { eq: $codeContinent } }) {
      name
      code
      currency
      languages {
        name
      }
      continent {
        code
        name
      }
    }
  }
`;
