import React from 'react'
import Map from '../game/Map'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Viewport() {
    return (
        <div id="viewport">
            <h1>Viewport</h1>
            <Map />
        </div>
    )
}
