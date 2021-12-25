

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
        this.gravity = 2;
        this.friction = 2;
       
    }

    player_jump(){
        if(this.player.jumping === false)
        this.player.y_velocity -= this.player.jumping_height
        this.player.jumping = true;
    }

    start(){ 
        
            
            this.engine.run()
        

      

          
    }


   

};

export default Game;