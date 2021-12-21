import React, {useEffect, useState} from 'react'
import Viewport from './components/Viewport';
import "./App.css"
import Controller from './console/Controller';
import Game from './game/Game';

function App() {

  const [game, setGame] = useState({})

useEffect(() => {
Controller.connect()
Game.start()
})

  return (
    <div className="App">

 
      

      <div>
        
        <h1>Night Cycle</h1>
        
        <Viewport />

      </div>

    </div>
  );
}

export default App;
