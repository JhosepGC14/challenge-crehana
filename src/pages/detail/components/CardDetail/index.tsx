import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useDetailCountry } from '../../../../hooks/useDetailCountry';

const CardDetail = () => {
  const { navigate, params, data } = useDetailCountry();

  return (
    <Paper elevation={3}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h3">
          {data?.country?.name || ""}
        </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Codigo:
        </Typography>
        <Typography variant="subtitle2">{data?.country?.code || ""}</Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Moneda:
        </Typography>
        <Typography variant="subtitle2">
          {data?.country?.currency || ""}
        </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Continente:
        </Typography>
        <Typography variant="subtitle2">
          {data?.country?.continent?.name || ""}
        </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Lenguajes:
        </Typography>
        {data?.country &&
          data?.country?.languages.map((item: any) => {
            return (
              <Typography variant="subtitle2">{item?.name || ""}</Typography>
            );
          })}
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Capital:
        </Typography>
        <Typography variant="subtitle2">
          {data?.country?.capital || ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate("/")} size="small">
          Atrás
        </Button>
      </CardActions>
    </Paper>
  );
};

export default CardDetail;
