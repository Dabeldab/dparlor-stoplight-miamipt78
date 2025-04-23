import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import TrafficLight from './components/Trafficlight';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '.././styles/trafficlight.css'

// components
import Home from './components/Home';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
