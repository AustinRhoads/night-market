import React from 'react'
import Viewport from './components/Viewport';
import "./App.css"
import Controller from './console/Controller';

function App() {


  return (
    <div className="App">

      componentDidMount() {
        Controller.connect()
      }
      

      <div>
        
        <h1>Night Cycle</h1>
        
        <Viewport />

      </div>

    </div>
  );
}

export default App;
