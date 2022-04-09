import { useState } from "react";
import { Button, Grid } from "@mui/material";

//components
import ListCountries from "../ListCountries";
import TextInput from "../../../../components/Inputs/TextInputs";
import SelectCustom from "../../../../components/Inputs/SelectInputs";

//hooks
import { useContinents } from "../../../../graphql/hooks/custom-hooks";

//interfaces
import { ALL_CURRENCIES } from "../../../../utilities/dataCurrencies";
import { OptionSelect } from "../../../../models/OptionsSelect.models";

const ContainerSearch = () => {

  //hooks
  const optionsContinents = useContinents();
  const [optionsCurrencies] = useState<OptionSelect[]>(ALL_CURRENCIES);
  const [formFilter, setFormFilter] = useState({
    search: "",
    continent: "",
    currency: "",
  });

  //handlechange for inputs
  const handleChange = ({ name, value }: any) => {
    setFormFilter({
      ...formFilter,
      [name]: value,
    });
  };

  //handle reset
  const handleResetFilters = () => {
    setFormFilter({
      search: "",
      continent: "",
      currency: "",
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <TextInput
            name="search"
            label="Buscar"
            onChange={handleChange}
            value={formFilter.search}
          />
        </Grid>
        <Grid item md={4}>
          <SelectCustom
            name="continent"
            label="Continente"
            onChange={handleChange}
            options={optionsContinents || []}
            value={formFilter.continent}
          />
        </Grid>
        <Grid item md={4}>
          <SelectCustom
            name="currency"
            label="Moneda"
            onChange={handleChange}
            options={optionsCurrencies || []}
            value={formFilter.currency}
          />
        </Grid>
        <Grid container item md={12} justifyContent="flex-end">
          <Button onClick={handleResetFilters}>Borrar Filtros</Button>
        </Grid>
      </Grid>
      <ListCountries
        textSearch={formFilter.search}
        valueContinent={formFilter.continent}
        valueCurrency={formFilter.currency}
      />
    </>
  );
};

export default ContainerSearch;
