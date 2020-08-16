import React from 'react'
import Tarjeta from '../Card/Tarjeta'
import { Grid } from '@material-ui/core'

import './MainBlock.css'

const MainBlock = () => {
   
    return (
        <Grid className='container' container alignItems="stretch" spacing={8}>
            {tarjetas.map((info, i) => (

            <Grid item style={{ display: "flex" }}>
                <Tarjeta info={info}/>
            </Grid>


            ))}
            
        </Grid>
    )
}

const tarjetas = [
    {
        titulo: 'Fiducuenta',
        contenido: 'App para obtener el saldo actual de la fiducuenta y actualizarla',
        imagen: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        link: 'http://www.google.com'
    },
    {
        titulo: 'Keto Final',
        contenido: 'Actualizar el progreso de Keto',
        imagen: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
        link: 'http://www.newellco.com'
    },
    {
        titulo: 'Nos vamos pa Ottawa',
        contenido: 'App para revisar los tiquetes mas economicos en un rango de fechas determinado',
        imagen: 'https://images.unsplash.com/photo-1528947120591-c0bf5c1e63fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80',
        link: 'http://www.ottawa.ca'
    },
]

export default MainBlock