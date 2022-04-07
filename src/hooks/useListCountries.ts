import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCountries, useFindByContinent, useFindByCurrency } from "../graphql/hooks/custom-hooks";
import { Country } from "../models/Countries.models";

export const useListCountries = (valueContinent: string, valueCurrency:string) => {
  const navigate = useNavigate();
  const result = useCountries();
  const [filterCountriesByContinent, listCountriesByContinent] =
    useFindByContinent();
  const [filterCountriesByCurrency, listCountriesByCurrency] =
    useFindByCurrency();
  const [listCountries, setListCountries] = useState<Country[]>([]);

  //Funcion para filtrar los datos segun el continente.
  const handleSearchByContinent = (value: string) => {
    filterCountriesByContinent({
      variables: {
        codeContinent: value,
      },
    });
  };

  //Funcion para filtrar los datos segun la moneda (currency).
  const handleSearchByCurrency = (value: string) => {
    filterCountriesByCurrency({
      variables: {
        codeCurrency: value,
      },
    });
  };

  //Escucha cualquier cambio del valor del combo Continente
  useEffect(() => {
    if (valueContinent !== "") {
      handleSearchByContinent(valueContinent);
    }
  }, [valueContinent]);

  //Escucha cualquier cambio del valor del combo Continente
  useEffect(() => {
    if (valueCurrency !== "") {
      handleSearchByCurrency(valueCurrency);
    }
  }, [valueCurrency]);

  //Escucha cualquier cambio del valor filtrado por continente
  useEffect(() => {
    if (listCountriesByContinent.data) {
      setListCountries(listCountriesByContinent.data.countries);
    }
  }, [listCountriesByContinent.data]);

  //Escucha cualquier cambio del valor filtrado por currency
  useEffect(() => {
    if (listCountriesByCurrency.data) {
      setListCountries(listCountriesByCurrency.data.countries);
    }
  }, [listCountriesByCurrency.data]);

  //Setea el valor inicial de la lista de todos los paises
  useEffect(() => {
    if (result) {
      setListCountries(result.countries);
    }
  }, [result]);

  return { listCountries, navigate };
};
