

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
        this.name = "Night Market"
        this.player = new Player("Auzzy");
        this.controller = new Controller(this);
        this.controller.connect();
        this.engine = new Engine(this);
       
    }

    start(){ 
        
            
            this.engine.run()
        

      

          
    }


   

};

export default Game;