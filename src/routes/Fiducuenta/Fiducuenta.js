import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, Button, Typography, Divider, FormControl, MenuItem, InputLabel, Select, TextField, Fab } from '@material-ui/core'
import { Navigation, Home } from '@material-ui/icons/';
import axios from 'axios'

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
        maxWidth: 300
    },
    margin: {
        marginTop: 10,
        marginBottom: 0
    },
    monto: {
       width: '100%',
       maxWidth: 215,
    },
    cardTitle: {
        
    }
  }));




const Fiducuenta = () => {
    const classes = useStyles();
    
    const [saldo, setsaldo] = useState('')
    const [montoAnterior, setMontoAnterior] = useState('')
    const [fechaAnterior, setFechaAnterior] = useState('')
    const [fechaToUpdate, setFechaToUpdate] = useState('')
    const [montoToUpdate, setMontoToUpdate] = useState('')

    const handleFecha = (event) => {
        setFechaToUpdate(event.target.value);
        console.log(fechaToUpdate)
    };

    const handleBack = () => {
        window.history.back();
    }

    const handleTextField = (event) => {
        setMontoToUpdate(event.target.value);
        console.log(montoToUpdate)
    };

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    useEffect(() => {
        
        soloSaldoFiducuenta();
    },[])

    const soloSaldoFiducuenta = async () => {
            
        const { data: { fecha, monto, abonos  } } = await axios.get('http://192.168.50.111:50000/api/fiducuenta')
        setsaldo(formatter.format(abonos).slice(0,-3));
        setMontoAnterior(formatter.format(monto).slice(0,-3));
        setFechaAnterior(fecha);
    }
    
    const updateFiducuenta = async () => {


        const { data } = await axios.post('http://192.168.50.111:50000/api/fiducuenta',{
             fecha: fechaToUpdate,
             monto: montoToUpdate
         }
        );
        console.log(data);
        if(data.error == false){
            soloSaldoFiducuenta();
        }
    }

    return (
        
        
        <Grid container justify='center' direction='row'>
            <Grid container justify='center'>
                <Grid item>
                    <Fab onClick={handleBack} variant="extended" color="primary" aria-label="add" className={classes.margin}>
                                    <Home className={classes.extendedIcon} />
                                    Home
                    </Fab>
                </Grid>
            </Grid>
            
            <Grid item>
                <Card className={classes.mainCard} raised>
                    <br/>
                    <Grid container justify='center'>
                        <Typography variant='h4'>Fiducuenta</Typography>
                    </Grid>
                    
                    <br/><Divider /><br/>
                    <Typography variant='h6'>Ultima transaccion:</Typography>
                    <br/>
                    <Grid container>
                        <Grid item xs={5}><Typography variant='body1'><strong>Fecha:</strong></Typography></Grid><Grid item xs={7}><Typography variant='body1'>{fechaAnterior}</Typography></Grid>
                        <Grid item xs={5}><Typography variant='body1'><strong>Monto:</strong></Typography></Grid><Grid item xs={7}><Typography variant='body1'>{montoAnterior}</Typography></Grid>
                        <Grid item xs={5}><Typography variant='body1'><strong>Total abonos:</strong></Typography></Grid><Grid item xs={7}><Typography variant='body1'>{saldo}</Typography></Grid>
                    </Grid>
                    
                    
                    <br/><Divider /><Divider /><br/>
                    <Typography variant='h6'>Realizar nueva transaccion:</Typography>
                    <br/>
                    <Grid container alignItems='center' justify='left'>
                        <Grid item>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Mes</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={fechaToUpdate}
                                    onChange={handleFecha}
                                    label="Mes"
                                    >
                                        <MenuItem value={'Enero'}>Enero</MenuItem><MenuItem value={'Febrero'}>Febrero</MenuItem><MenuItem value={'Marzo'}>Marzo</MenuItem><MenuItem value={'Abril'}>Abril</MenuItem>
                                        <MenuItem value={'Mayo'}>Mayo</MenuItem><MenuItem value={'Junio'}>Junio</MenuItem><MenuItem value={'Julio'}>Julio</MenuItem><MenuItem value={'Agosto'}>Agosto</MenuItem>
                                        <MenuItem value={'Septiembre'}>Septiembre</MenuItem><MenuItem value={'Octubre'}>Octubre</MenuItem><MenuItem value={'Noviembre'}>Noviembre</MenuItem><MenuItem value={'Diciembre'}>Diciembre</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid> 
                        <Grid item xs={6}>
                            <TextField type='number' onChange={handleTextField} className={classes.monto} id="outlined-basic" label="Monto" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item>
                            <Fab onClick={updateFiducuenta} variant="extended" color="primary" aria-label="add" className={classes.margin}>
                                <Navigation className={classes.extendedIcon} />
                                Enviar
                            </Fab>
                        </Grid>
                    </Grid>

                </Card>

            </Grid>
        </Grid>
    )
}

export default Fiducuenta
