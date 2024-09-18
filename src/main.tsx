import React from 'react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RuntimeProvider } from '@voiceflow/react-chat'
import ReactDOM from 'react-dom'


ReactDOM.render(
    <BrowserRouter>

        <React.StrictMode>

                <App />

        </React.StrictMode>

    </BrowserRouter>, document.getElementById('root')
)

