import React from 'react'
import App from './app/App'
import ReactDOM from 'react-dom'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import * as serviceWorker from './serviceWorker'
import { StyledEngineProvider } from '@mui/styled-engine'
import { CssBaseline } from '@mui/material'
import IpfsRouter from 'ipfs-react-router'

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <IpfsRouter>
            <CssBaseline />
            <App />
        </IpfsRouter>
    </StyledEngineProvider>,
    document.getElementById('root')
)

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
