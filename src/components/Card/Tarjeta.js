import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 345,
    maxWidth: 345,
    minWidth: 250,
    borderRadius: 30,
    padding: 0,
  },
  media: {
    height: 140,
  },
  contenido: {
    minHeight: 300,
  },
  saldo: {
    color: "darkgreen",
    fontSize: 12,
    fontWeight: 800,
    alignSelf: "center",
  },
  mainTypo: {
    display: "flex",
    alignContent: "center",
  },
  peso: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: 600,
  },
});

export default function Tarjeta({ info: { titulo, contenido, imagen, link } }) {
  const classes = useStyles();

  const switchOnClick = (titulo) => {
    if (titulo === "Fiducuenta") {
      executeFiducuenta();
    } else if (titulo === "Keto Final") {
      executeKetoFinal();
    } else if (titulo === "Nos vamos pa Ottawa") {
      executeOttawa();
    } else {
      return null;
    }
  };

  const executeKetoFinal = async (e) => {
    console.log("executing keto");
  };

  const executeFiducuenta = async () => {
    console.log("executing fiducuenta");
  };

  const executeOttawa = async () => {
    console.log("executing ottawa");
    const { data } = await axios.get("http://192.168.50.111:50000/api/vuelos");
    console.log(data);
  };

  return (
    <Card className={classes.root}>
      <Link to={link} style={{ textDecoration: "none" }}>
        <CardActionArea
          className={classes.contenido}
          onClick={() => switchOnClick(titulo)}
        >
          <CardMedia className={classes.media} image={imagen} />
          <CardContent>
            <Typography
              gutterBottom
              className={classes.mainTypo}
              variant="h5"
              component="h2"
            >
              {titulo}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {contenido}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
