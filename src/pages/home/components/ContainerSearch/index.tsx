import TextInput from "../../../../components/Inputs/TextInputs";
import SelectCustom from "../../../../components/Inputs/SelectInputs";
import { Button, Grid } from "@mui/material";

const ContainerSearch = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <TextInput name="search" label="Buscar" onChange={() => {}} />
        </Grid>
        <Grid item md={4}>
          <SelectCustom
            name="continent"
            label="Continente"
            onChange={() => {}}
            options={[]}
          />
        </Grid>
        <Grid item md={4}>
          <SelectCustom
            name="currency"
            label="Moneda"
            onChange={() => {}}
            options={[]}
          />
        </Grid>
        <Grid container item md={12} justifyContent="flex-end">
          <Button variant="contained">Buscar</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContainerSearch;
