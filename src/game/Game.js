

import Controller from "../console/Controller";
import Engine from "./Engine";
import Player from "./Player";

class Game {

    //TODO:
    //
    //1. create basic assests.
    //
    //2. have assests load first before engine runs

    constructor(){
        this.player = new Player("Auzzy");
        this.controller = new Controller();
        this.controller.connect();
        this.engine = new Engine(this);
        this.engine.run()
    }

    start(){ 
        console.log("starting")
        console.log(this.player)        
    }

   

};

export default Game;