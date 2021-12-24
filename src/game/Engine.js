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

    button_pressed(button){
        if(typeof(button) == "object"){
            return button.pressed;
        }
        return button == 1.0;
    }

    run = () => {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        if(gamepads[0]){
            //console.log("gps: ",gamepads)
         var gp = gamepads[0];
        if (this.button_pressed(gp.buttons[0])) {
          console.log("you've pressed A")
        } else if (this.button_pressed(gp.buttons[1])) {
          console.log("you've pressed B")
        }
        if (this.button_pressed(gp.buttons[2])) {
          console.log("you've pressed X")
        } else if (this.button_pressed(gp.buttons[3])) {
          console.log("you've pressed Y")
        }
            
        }



      //  if(this.game.controller.gamepad_is_connected){
      //      console.log(this.game.controller.gamepad.buttons[0].value)
      //  }

       // console.log(this.game.gamepad)
      //  console.log(this.game.controller.gamepad_is_connected)
        window.requestAnimationFrame(this.run)
    }

};

export default Engine;