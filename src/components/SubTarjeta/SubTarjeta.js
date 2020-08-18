import React, { useState, setState } from 'react'
import { Button, Grid, Drawer } from '@material-ui/core'
import axios from 'axios'
import './SubTarjeta.css'
 

const SubTarjeta = ({tipo}) => {

    
    
    const [keto, setketo] = useState(null)
    const [topDrawer, setTopDrawer] = useState(false)


    
    
      const soloUltimoPeso = async (e) => {
        e.stopPropagation();
        console.log('executing keto');
        const { data } = await axios.get('http://192.168.50.111:50000/api/keto');
        setketo(data);
        setTopDrawer(true)
        console.log(data);
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setTopDrawer(open);
      };

    return (
        <Grid container justify='center'>
            <Grid item>
            
            {tipo === '/keto' ? 
                <Button variant='outlined' color='primary' onClick={soloUltimoPeso}>
                    Ver ultimo registro
                </Button>
            : null} <Drawer anchor='top' open={topDrawer} onClose={toggleDrawer(false)}>{keto != null ?
                            <><h1>Last Weight registered</h1>
                            <h2>{keto.lastWeight}</h2>
                            <h4>on week: </h4></>
                            : null}
                    </Drawer>
            </Grid>
        </Grid>
    )
}

export default SubTarjeta
