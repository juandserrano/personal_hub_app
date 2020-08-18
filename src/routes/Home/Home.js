import React from "react";
import Tarjeta from "../../components/Card/Tarjeta";
import SubTarjeta from "../../components/SubTarjeta/SubTarjeta";
import { Grid } from "@material-ui/core";

import "./Home.css";

const Home = () => {
  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      {tarjetas.map((info, i) => (
        <Grid item>
          <Tarjeta info={info} />
        </Grid>
      ))}
    </Grid>
  );
};

const tarjetas = [
  {
    titulo: "Fiducuenta",
    contenido:
      "App para obtener el saldo actual de la fiducuenta y actualizarla",
    imagen:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    link: "/fiducuenta",
  },
  {
    titulo: "Keto Final",
    contenido: "Actualizar el progreso de Keto",
    imagen:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
    link: "/keto",
  },
  {
    titulo: "Nos vamos pa Ottawa",
    contenido:
      "App para revisar los tiquetes mas economicos en un rango de fechas determinado",
    imagen:
      "https://images.unsplash.com/photo-1528947120591-c0bf5c1e63fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80",
    link: "/ottawa",
  },
  {
    titulo: "Plex",
    contenido: "Ver peliculas desde Plex Local en Nvidia Shield",
    imagen:
      "https://i1.wp.com/www.dignited.com/wp-content/uploads/2020/05/plex-black-background.jpg?fit=980%2C420&ssl=1",
    link: "/plex",
  },
];

export default Home;
