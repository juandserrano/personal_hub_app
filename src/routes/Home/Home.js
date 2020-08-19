import React, { useState, useEffect } from "react";
import Tarjeta from "../../components/Card/Tarjeta";
import { Grid } from "@material-ui/core";

const Home = () => {
  const [cop, setCop] = useState("");

  const checkRate = async () => {
    console.log(process.env.REACT_APP_FIXERAPIKEY);
    const {
      data: { rates },
    } = await axios.get(
      `http://data.fixer.io/api/latest?access_key=8ad7489817acb987992af9b95b7893cb&symbols=CAD,COP`
    );
    const eurcad = rates.CAD;
    const eurcop = rates.COP;

    const cadcop = Math.ceil(eurcop / eurcad);
    setCop(cadcop);
    console.log(cadcop);
    return;
  };

  useEffect(() => {
    checkRate();
  });
  return (
    <div style={{ height: "100vh", backgroundColor: "grey", display: "flex" }}>
      <Grid
        container
        style={{ margin: "auto" }}
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid
          item
          xs={12}
          style={{ textAlign: "center", height: "40px", lineHeight: "40px" }}
        >
          <span>COPCAD: {cop}</span>
        </Grid>
        {tarjetas.map((info, i) => (
          <Grid item>
            <Tarjeta info={info} />
          </Grid>
        ))}
      </Grid>
    </div>
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
