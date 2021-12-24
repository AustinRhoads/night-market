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
        
    }



    run = () => {
        this.game.controller.controller_listen()



      //  if(this.game.controller.gamepad_is_connected){
      //      console.log(this.game.controller.gamepad.buttons[0].value)
      //  }

       // console.log(this.game.gamepad)
      //  console.log(this.game.controller.gamepad_is_connected)
        window.requestAnimationFrame(this.run)
    }

};

export default Engine;