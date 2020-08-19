import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  Typography,
  Divider,
  TextField,
  Fab,
} from "@material-ui/core";
import { Navigation, Home } from "@material-ui/icons/";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 100,
    maxWidth: 126,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  mainCard: {
    borderRadius: 20,
    padding: 15,
    margin: 20,
    maxWidth: 300,
  },
  margin: {
    marginTop: 10,
    marginBottom: 0,
  },
  monto: {
    width: "100%",
    maxWidth: 215,
  },
  cardTitle: {},
}));

const Keto = () => {
  const classes = useStyles();

  const [semana, setSemana] = useState("");
  const [fecha, setFecha] = useState("");
  const [peso, setPeso] = useState("");
  const [pesoViejo, setPesoViejo] = useState("");

  useEffect(() => {
    updateUltimoPeso();
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const handleTextField = (event) => {
    setPeso(event.target.value);
  };

  const updateUltimoPeso = async () => {
    const {
      data: { lastDate, lastWeek, lastWeight },
    } = await axios.get("http://192.168.50.111:50000/api/keto");
    setPesoViejo(lastWeight);
    setSemana(lastWeek);
    setFecha(lastDate);
  };

  const updatePeso = async () => {
    const { data } = await axios.post("http://192.168.50.111:50000/api/keto", {
      peso,
    });
    console.log(data);
    if (data.error == false) {
      updateUltimoPeso();
    }
  };

  return (
    <Grid container justify="center" direction="row">
      <Grid container justify="center">
        <Grid item>
          <Fab
            onClick={handleBack}
            variant="extended"
            color="primary"
            aria-label="add"
            className={classes.margin}
          >
            <Home className={classes.extendedIcon} />
            Home
          </Fab>
        </Grid>
      </Grid>

      <Grid item>
        <Card className={classes.mainCard} raised>
          <br />
          <Grid container justify="center">
            <Typography variant="h4">Keto Final</Typography>
          </Grid>

          <br />
          <Divider />
          <br />
          <Typography variant="h6">Ultima info:</Typography>
          <br />
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="body1">
                <strong>Semana:</strong>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body1">{semana}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1">
                <strong>Fecha:</strong>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body1">{fecha}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1">
                <strong>Peso:</strong>
              </Typography>
            </Grid>
            {pesoViejo != "" ? (
              <Grid item xs={7}>
                <Typography variant="body1">{pesoViejo}kg</Typography>
              </Grid>
            ) : null}
          </Grid>

          <br />
          <Divider />
          <Divider />
          <br />
          <Typography variant="h6">Realizar nueva medicion:</Typography>
          <br />
          <Grid container alignItems="center" justify="center">
            <Grid item xs={8}>
              <TextField
                type="number"
                onChange={handleTextField}
                className={classes.monto}
                id="outlined-basic"
                label="Monto"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Fab
                onClick={updatePeso}
                variant="extended"
                color="primary"
                aria-label="add"
                className={classes.margin}
              >
                <Navigation className={classes.extendedIcon} />
                Enviar
              </Fab>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Keto;
