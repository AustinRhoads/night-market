import React from 'react'
import Viewport from './Viewport'

export default function Console() {
    return (
        <div>
            <h1>Annwn</h1>
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
            <Viewport />
            <div style={{height: 50}}></div>
        </div>
    )
};
