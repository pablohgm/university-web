import { ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContainer } from './views/main/AppContainer'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript/>
    <App>
        <AppContainer/>
    </App>
  </React.StrictMode>,
  document.getElementById('root'),
)
