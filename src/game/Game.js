

import Controller from "../console/Controller";
import Engine from "./Engine";
import Player from "./Player";
import Map from "./Map";

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
        //this.gamepad = () => {return this.controller.gamepad};
        this.engine = new Engine(this);
        this.engine.run()
    }

    start(){ 
        console.log("starting")
        console.log(this.player)   
        console.log(this.controller)     
    }


   

};

export default Game;