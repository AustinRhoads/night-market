import testimg from '../assets/test_room.png'
//let ctx = document.querySelector("#game-canvas").getContext("2d") 

class Engine {

    //TODO:
    //
    //1. Have this update the players position from the games controller
    //
    //2.create Canvas and Context
    //
    //3. create floor
    //
    //4. utilize window.requestAnimationFrame with a time correction.

    
    constructor(game){
        this.game = game;
        
       // this.context = ctx
       

       this.set_context()
    }

    set_context = () => {
        window.addEventListener("DOMContentLoaded", () => {
            this.img = document.createElement('img');
            this.img.src = testimg;
            
            this.context = document.querySelector("#game-canvas").getContext("2d") 
      


            


        })
    }

    draw_background = () => {
        this.context.drawImage(this.img, 0, 0, 320, 180)
    }

    draw_floor = () => {
        this.context.strokeStyle = '#202830';
        this.context.lineWidth = 4;
        this.context.beginPath();
        this.context.moveTo(0, 164);
        this.context.lineTo(320, 164);
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

        this.game.controller.controller_listen()



    

        //DRAW BACKGROUND
        this.draw_background()

        //DRAW PLAYER
        this.draw_player()
                //DRAW FLOOR
                this.draw_floor()


        window.requestAnimationFrame(this.run)
    }

};

export default Engine;