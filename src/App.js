import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Viewport from './components/Viewport';
import "./App.css"
import Game from './game/Game';

function App() {

  //TODO:
  //
  //1. move veiwport into conole component
  //
  //2. create menu screens, pause screens, settings screen
  //move them to the console component
  //
  //3.FEEL GOOD

  const game = useSelector(state => state.game_state.game)
 // const state = useSelector(state => state)

useEffect(() => {
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
