

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
        this.gravity = 1.5;
        this.friction = 0.8;
       
    }

    player_jump(){
        if(this.player.jumping === false)
        this.player.y_velocity -= this.player.jumping_height
        this.player.jumping = true;
    }

    collide_with_floor = () => {
        if(this.player.y >= 144 - this.player.height){
            this.player.y = 144 - this.player.height
            this.player.jumping = false;
            this.player.y_velocity = 0;
        }
    }

    start(){         
            this.engine.run()      
    }


   

};

export default Game;