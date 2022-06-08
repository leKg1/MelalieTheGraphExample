import React from 'react'
import App from './app/App'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import * as serviceWorker from './serviceWorker'
import { StyledEngineProvider } from '@mui/styled-engine'
import { CssBaseline } from '@mui/material'
import isIPFS from 'is-ipfs'

const resolveBasename = (path)  => {
    const segments = path.split('/')
    const [, second, third] = segments
  
    if (second === 'ipfs' && isIPFS.cid(third)) {
      return `/ipfs/${third}/`
    }
  
    if (second === 'ipns') {
      return `/ipns/${third}/`
    }
  
    return '/'
  }
  const path = window?.location?.pathname ?? '/'
  console.log('path',path)
  const basename = resolveBasename(path)
  console.log('basename',basename)

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        {/* <BrowserRouter  basename={basename}>
            <CssBaseline />
            <App />
</BrowserRouter> */}
        <HashRouter  basename={basename}>
            <CssBaseline />
            <App />
        </HashRouter> 
    </StyledEngineProvider>,
    document.getElementById('root')
)

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
