import testimg from '../assets/test_room.png'
import XBOX_360_MAP from '../constants/xbox_map';
//let ctx = document.querySelector("#game-canvas").getContext("2d") 

class Engine {

    //TODO:
    //


    
    constructor(game){
        this.game = game;
        
       // this.context = ctx
       

       this.set_context()
       this.map_controller_events_to_actions();
    }

    set_context = () => {

        window.addEventListener("DOMContentLoaded", () => {

            this.img = document.createElement('img');

            this.img.src = testimg;
            
            this.context = document.querySelector("#game-canvas").getContext("2d") 

        })
    }

    map_controller_events_to_actions = () => {
        document.addEventListener("buttonDown", (e) => {
            console.log(`You've pressed the ${XBOX_360_MAP[e.detail.button_index]} button at index `, e.detail.button_index, " with a value of: ", e.detail.value, ". ") 
            switch(XBOX_360_MAP[e.detail.button_index]){
                case "A":
                    this.game.player_jump()
                    break;
                case "Start":
                    window.location.reload(false)
                    break;
                default:
                    return;
            }   
        })

        document.addEventListener("buttonUp", (e) => {      
            console.log(`You've released the ${XBOX_360_MAP[e.detail.button_index]} button at index `, e.detail.button_index, " with a value of: ", e.detail.value, ". ")
        })

        document.addEventListener("axesChangeValue", (e) => {
              let el = document.getElementById(`axes-${e.detail.axes_index + 1}`);
                el.querySelector('p').innerHTML = parseFloat(e.detail.value.toFixed(2))

                if(e.detail.axes_index === 0){
                    this.game.player.x_velocity += this.game.player.speed * e.detail.value
                }
                if(e.detail.axes_index === 1){
                    this.game.player.y += this.game.player.speed * e.detail.value
                }
        })

        document.addEventListener("axesReleased", (e) => {
            let el = document.getElementById(`axes-${e.detail.axes_index + 1}`);
            el.querySelector('p').innerHTML = 0;
        })

    }



    gravity = () => {
        if(this.game.player.jumping){
            this.game.player.y_velocity += this.game.gravity
        }
        
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
        this.game.player.x += this.game.player.x_velocity
        this.game.player.y += this.game.player.y_velocity
        this.game.player.x_velocity *= this.game.friction;
        this.game.player.y_velocity *= this.game.friction;


        this.game.collide_with_floor()

    

        //DRAW BACKGROUND
        this.draw_background()

        //DRAW FLOOR
        this.draw_floor()

        //DRAW PLAYER
        this.draw_player()


        window.requestAnimationFrame(this.run)
    }

};

export default Engine;