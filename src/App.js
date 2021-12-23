import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Viewport from './components/Viewport';
import "./App.css"
import Controller from './console/Controller';
import Game from './game/Game';

function App() {

  const game = useSelector(state => state.game_state.game)
 // const state = useSelector(state => state)

useEffect(() => {
//Controller.connect()
//Game.start()
let game = new Game();
game.start()
})

  return (
    <div className="App">

 
      

      <div>
        
        <h1>{game.name}</h1>
        
        <Viewport />

      </div>

    </div>
  );
}

export default App;
