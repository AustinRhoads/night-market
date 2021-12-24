import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import "./App.css";

import Console from './console/Console';


function App() {

  //TODO:
  //
  //1. move veiwport into console component
  //
  //2. create menu screens, pause screens, settings screen
  //move them to the console component
  //
  //3.FEEL GOOD

  const game = useSelector(state => state.game_state.game)

useEffect(() => {
game.start()
})

  return (
    <div className="App">   

      <div>
        
        <h1>{game.name}</h1>       
        <Console game={game} />

      </div>

    </div>
  );
}

export default App;
