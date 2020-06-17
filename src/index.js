import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {GraphProvider} from './contexts/Graph'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <React.StrictMode>
        <GraphProvider>
            <App/>
        </GraphProvider>
    </React.StrictMode>,
    rootElement
)

serviceWorker.register()