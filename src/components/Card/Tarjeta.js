import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    width: 345,
    maxWidth: 345,
    minWidth: 250,
    borderRadius: 30,
    padding: 0

  },
  media: {
    height: 140,
  },
  contenido: {
    minHeight: 300
  },
  botonsaldo: "blue"
});

export default function Tarjeta({ info: { titulo, contenido, imagen, link } }) {
  const classes = useStyles();

  const soloSaldoFiducuenta = async (e) => {
    e.stopPropagation();
   const { data } = await axios.get('http://127.0.0.1:3000/api/fiducuenta')
    alert(data.saldo)
  }

  const switchOnClick = (titulo) => {
    if(titulo === 'Fiducuenta'){
      executeFiducuenta();
    } else if (titulo === 'Keto Final'){
      executeKetoFinal();
    } else if (titulo === 'Nos vamos pa Ottawa'){
      executeOttawa();
    } else {
      return null;
    }
  }

  const executeFiducuenta = () => {
    console.log('executing fiducuenta')
  }

  const executeKetoFinal = () => {
    console.log('executing keto')
  }
  
  const executeOttawa = () => {
    console.log('executing ottawa')
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.contenido} onClick={() => switchOnClick(titulo)}>
        <CardMedia
          className={classes.media}
          image={imagen}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titulo}{titulo === 'Fiducuenta' ? (<Button color='#primary' onClick={soloSaldoFiducuenta}>Ver Saldo</Button>) : null}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            {contenido}
          </Typography>
        </CardContent>
      </CardActionArea>
     </Card>
  );

    

    
  

}
