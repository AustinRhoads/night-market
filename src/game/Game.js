

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
        this.player = new Player("Auzzy", this);
        this.controller = new Controller(this);
        this.controller.connect();
        this.engine = new Engine(this);
        this.gravity = 2.2;
        this.friction = 0.8;
        this.floor = 300;
        this.a_is_pressed = false;
       
    }



    collide_with_floor = () => {
        if(this.player_is_below_floor()){
            this.player.set_on_top_of(this.floor)
        }
    }

    map_controller_button_actions_to_player_actions = (action_detail) => {
        switch(this.controller.gamepad_matrix[action_detail.button_index]){
            case "A":
                this.player.jump()
                this.a_is_pressed = true;
                break;
                case "D-pad Left":
                    this.player.move_left_or_right(-1)
                break;
                case "D-pad Right":
                    this.player.move_left_or_right(1)
                break;
            case "Start":
                window.location.reload(false)
                break;
            default:
                return;
        } 
    }




    map_axes_actions_to_player_actions = (e) => {
        if(e.detail.axes_index === 0){
            //this.player.x_velocity += this.player.speed * e.detail.value
            this.player.move_left_or_right(e.detail.value)
        }
        //Longitudinal movement
       // if(e.detail.axes_index === 1){
       //     this.player.y_velocity += this.player.speed * e.detail.value
       // }
    }


    player_is_below_floor = () => {
        return this.player.y >= this.floor - this.player.height
    }


    start(){         
            this.engine.run()      
    }


   

};

export default Game;