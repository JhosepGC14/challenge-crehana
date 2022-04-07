import { useLazyQuery, useQuery } from "@apollo/client";
import {
  ALL_COUNTRIES,
  ALL_CONTINENTS,
  FIND_BY_CONTINENT,
  FIND_BY_CURRENCY,
  DETAIL_COUNTRY,
} from "../queries";
import { ContinentsResult } from "../../models/Continent.models";
import { mutationToOptionSelect } from "../../adapters/options-adapter";
import { ListCountries } from "../../models/Countries.models";

export const useCountries = () => {
  const result = useQuery<ListCountries>(ALL_COUNTRIES);
  console.log("result : ", result);
  return result.data;
};

export const useContinents = () => {
  const { data } = useQuery<ContinentsResult>(ALL_CONTINENTS);
  if (data) {
    return mutationToOptionSelect(data.continents);
  } else {
    return [];
  }
};

export const useFindByContinent = () => {
  const resultados = useLazyQuery(FIND_BY_CONTINENT);
  return resultados;
};

export const useFindByCurrency = () => {
  const resultados = useLazyQuery(FIND_BY_CURRENCY);
  return resultados;
};

export const useGetDetailCountry = () => {
  const result = useLazyQuery(DETAIL_COUNTRY);
  return result;
};
