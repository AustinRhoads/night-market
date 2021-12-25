

import Controller from "../console/Controller";
import Engine from "./Engine";
import Player from "./Player";
import XBOX_360_MAP from "../constants/xbox_map";

class Game {

    //TODO:
    //
    //1. create basic assests.
    //
    //2. have assests load first before engine runs

    constructor(){
        this.name = "Night Market"
        this.player = new Player("Auzzy");
        this.controller = new Controller();
        this.controller.connect();
        this.engine = new Engine(this);
        this.engine.run()
    }

    start(){ 
        console.log("starting")
        console.log(this.player)   
        console.log(this.controller)   


        document.addEventListener("buttonDown", (e) => {
            console.log(`You've pressed the ${XBOX_360_MAP[e.detail.button_index]} button at index `, e.detail.button_index, " with a value of: ", e.detail.value, ". ")    
        })

        document.addEventListener("buttonUp", (e) => {      
            console.log(`You've released the ${XBOX_360_MAP[e.detail.button_index]} button at index `, e.detail.button_index, " with a value of: ", e.detail.value, ". ")
        })

        document.addEventListener("axesChangeValue", (e) => {
              let el = document.getElementById(`axes-${e.detail.axes_index + 1}`);
                el.querySelector('p').innerHTML = parseFloat(e.detail.value.toFixed(2))
        })

        document.addEventListener("axesReleased", (e) => {
            let el = document.getElementById(`axes-${e.detail.axes_index + 1}`);
            el.querySelector('p').innerHTML = 0;
        })
          
    }


   

};

export default Game;