import React from 'react'
import ReactDOM from 'react-dom/client'
import "./input.css"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DataProvider>
            <App />
        </DataProvider>
    </BrowserRouter>,
)
