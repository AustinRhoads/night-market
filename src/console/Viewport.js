import React from 'react'
//import Map from '../game/Map'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Viewport() {
    return (
        <div id="viewport">
            <h1>Viewport</h1>
            <h2>Axes:</h2>
            <div id="axis-display">
            <div id="left-axis">L</div><div id="right-axis" >R</div>
            </div>
           
            <div id="axes-1">
                <h3>Axis 1</h3>
                <p></p>
            </div>
            <div id="axes-2">
                <h3>Axis 2</h3>
                <p></p>
            </div>
            <div id="axes-3">
                <h3>Axis 3</h3>
                <p></p>
            </div>
            <div id="axes-4">
                <h3>Axis 4</h3>
                <p></p>
            </div>
            
            
            
            
            
        </div>
    )
}
