import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import {
  useCountries,
  useFindByContinent,
} from "../../../../graphql/hooks/custom-hooks";
import { useState, useEffect } from "react";
import { Country } from "../../../../models/Countries.models";

interface ListCountiresProps {
  textSearch: string;
  valueContinent: string;
}

const ListCountries = ({ textSearch, valueContinent }: ListCountiresProps) => {
  const navigate = useNavigate();
  const result = useCountries();
  const [filterCountriesByContinent, listCountriesFiltered] = useFindByContinent();
  const [listCountries, setListCountries] = useState<Country[]>([]);

  //Funcion para filtrar los datos.
  const handleSearchByContinent = (value: string) => {
    filterCountriesByContinent({
      variables: {
        codeContinent: value,
      },
    });
  };

  //Escucha cualquier cambio del valor del combo Continente
  useEffect(() => {
    if (valueContinent !== "") {
      handleSearchByContinent(valueContinent);
    }
  }, [valueContinent]);

  //Escucha cualquier cambio del valor filtrado por continente
  useEffect(() => {
    if (listCountriesFiltered.data) {
      setListCountries(listCountriesFiltered.data.countries);
    }
  }, [listCountriesFiltered.data]);

  //Setea el valor inicial de la lista de todos los paises
  useEffect(() => {
    if (result) {
      setListCountries(result.countries);
    }
  }, [result]);

  return (
    <>
      <Typography
        gutterBottom
        variant="h6"
        component="h6"
        style={{ marginTop: 30 }}
      >
        Resultados
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: 16 }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Moneda</TableCell>
              <TableCell align="right">Continente</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listCountries
              .filter(
                (country) =>
                  country.name
                    .toLowerCase()
                    .indexOf(textSearch?.toLowerCase()) > -1 ||
                  country.code
                    .toLowerCase()
                    .indexOf(textSearch?.toLowerCase()) > -1
              )
              .map((country) => {
                return (
                  <TableRow
                    key={country.code}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {country.name}
                    </TableCell>
                    <TableCell align="right">{country.currency}</TableCell>
                    <TableCell align="right">
                      {country.continent.name}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => navigate(`/detail/${country.code}`)}
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                      >
                        Ver Detalle
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListCountries;
