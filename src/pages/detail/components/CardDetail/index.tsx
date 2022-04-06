import { useNavigate } from "react-router-dom";
import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const CardDetail = () => {
  const navigate = useNavigate();

  return (
    <Paper elevation={3}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h3">
          Lizard
        </Typography>
        <Typography variant="subtitle1">Codigo:</Typography>
        <Typography variant="subtitle1">Nombre:</Typography>
        <Typography variant="subtitle1">Moneda:</Typography>
        <Typography variant="subtitle1">Continente:</Typography>
        <Typography variant="subtitle1">Lenguajes:</Typography>
        <Typography variant="subtitle1">Capital:</Typography>
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
