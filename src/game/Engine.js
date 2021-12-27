import testimg from '../assets/test_room.png'
import XBOX_360_MAP from '../constants/xbox_map';


class Engine {

    //TODO:
    //


    
    constructor(game){

        this.game = game;
        this.set_context()
        this.run_controller_event_listeners();

    }



    set_context = () => {

        window.addEventListener("DOMContentLoaded", () => {

            this.img = document.createElement('img');

            this.img.src = testimg;
            
            this.context = document.querySelector("#game-canvas").getContext("2d") 

        })
    }

    run_controller_event_listeners = () => {


        document.addEventListener("buttonDown", (e) => {
            console.log(`You've pressed the ${XBOX_360_MAP[e.detail.button_index]} button at index `, e.detail.button_index, " with a value of: ", e.detail.value, ". ") 
            this.game.map_controller_button_actions_to_player_actions(e.detail)
        })


        document.addEventListener("buttonHolding", (e) => {
            this.game.map_controller_button_actions_to_player_actions(e.detail)
        })


        document.addEventListener("buttonUp", (e) => {      
            console.log(`You've released the ${XBOX_360_MAP[e.detail.button_index]} button at index `, e.detail.button_index, " with a value of: ", e.detail.value, ". ")
        })


        document.addEventListener("axesChangeValue", (e) => {
              let el = document.getElementById(`axes-${e.detail.axes_index + 1}`);
                el.querySelector('p').innerHTML = parseFloat(e.detail.value.toFixed(2))

                this.game.map_axes_actions_to_player_actions(e)
        })

        document.addEventListener("axesReleased", (e) => {
            let el = document.getElementById(`axes-${e.detail.axes_index + 1}`);
            el.querySelector('p').innerHTML = 0;
        })

    }



    gravity = () => {
       // if(this.game.player.jumping){
            this.game.player.y_velocity += this.game.gravity
        //}    
    }

    set_player_x_and_y_position = () => {
        this.game.player.x += this.game.player.x_velocity
        this.game.player.y += this.game.player.y_velocity
    }

    apply_friction_to_movement = () => {
        this.game.player.x_velocity *= this.game.friction;
        this.game.player.y_velocity *= this.game.friction;
    }

    draw_background = () => {
        this.context.drawImage(this.img, 0, 0, 320, 180)
    }

    draw_floor = () => {
        this.context.strokeStyle = '#202832';
        this.context.lineWidth = 4;
        this.context.beginPath();
        this.context.moveTo(0, 144);
        this.context.lineTo(320, 144);
        this.context.stroke();
    }

    draw_player = () => {
        this.context.fillStyle= "#ff0000" 
        this.context.beginPath();
        this.context.rect(this.game.player.x, this.game.player.y, this.game.player.width, this.game.player.height);
        this.context.fill();


    }



    run = () => {
       // console.log(this.context)

        //CORRECT CONTROLLER MODES

        this.game.controller.dispatch_controller_events()


        

        //PLAYER REACTS TO ENVIRONMENT
        this.gravity()

        this.set_player_x_and_y_position()


        ///PLAYER 2
         //absolute div



        this.apply_friction_to_movement()

        this.game.collide_with_floor()

    

        //DRAW BACKGROUND
        this.draw_background()

        //DRAW FLOOR
        this.draw_floor()

        let p2 = document.getElementById('player-2');
        //console.log(p2.x_velocity)
       p2.style.left = this.game.player.x + "px"
       p2.style.top = this.game.player.y + "px"

        //DRAW PLAYER
        this.draw_player()


        window.requestAnimationFrame(this.run)
    }

};

export default Engine;