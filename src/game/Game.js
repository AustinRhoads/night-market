

import Controller from "../console/Controller";
import Engine from "./Engine";
import Player from "./Player";

class Game {

    constructor(){
        this.player = new Player("Auzzy");
        this.controller = new Controller();
        this.controller.connect();
        this.engine = Engine(this);
    }

    start(){ 
        console.log("starting")
        console.log(this.player)        
    }

   

};

export default Game;