import React from 'react'
import { Grid } from '@material-ui/core'
import './Plex.css'
import IframeResizer from 'iframe-resizer-react'

const Plex = () => {
    return (
        <div className='fondo'>
            <iframe allowfullscreen='true' src="//192.168.50.171:32400/web/index.html" />
        </div>
    )
}

export default Plex;

