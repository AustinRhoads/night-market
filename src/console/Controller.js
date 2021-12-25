//import XBOX_360_MAP from "../constants/xbox_map";
 
 
 
 var oldGamepad;
 
 
 class Controller{

    constructor(game){
        this.game = game;
        this.gamepad_is_connected = false;
        this.keyboard_is_controller = true;
    }

     connect = () => {

        //TODO:

        //2. Create constructer with left right jump etc. attributes with boolean values (engine returns these to update the player's position).
       

       
        window.addEventListener("gamepadconnected", this.set_gamepad)
        window.addEventListener("gamepaddisconnected", this.unset_gamepad)

       

        document.addEventListener('keydown', this.logKey);



    }

    logKey = (e) => {
        e.preventDefault()
        console.log(e.code)
    }

    set_gamepad = (e) => {
        this.gamepad_is_connected = true;
        console.log(e.gamepad.id, " is connected");
        console.log(e.gamepad)
    }

    unset_gamepad = (e) => {
          this.gamepad_is_connected = false;
          console.log("Controller is disconnected.")
      }





    dispatch_controller_events = () => {
        var gamepad = navigator.getGamepads()[0]// ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
       
        if(!gamepad){ return; }
           
        gamepad.buttons.forEach((button, index) => {
            const oldButtonPressed = oldGamepad?.buttons[index].pressed

            if(button.pressed && !oldButtonPressed){
                document.dispatchEvent(
                    new CustomEvent("buttonDown", {
                        detail: {
                            button_index: index,
                            value: button?.value
                        }
                    })
                )                    
            }
            if(!button.pressed && oldButtonPressed){
                document.dispatchEvent(
                    new CustomEvent("buttonUp", {
                        detail: {
                            button_index: index,
                            value: button?.value
                        }
                    })
                )                
            }
         
        })



        gamepad.axes.forEach((axe, index) => {
          //  const oldAxesValue = oldGamepad?.axes[index].value;

            if(axe > 0.11 || axe < -0.11 ){
                document.dispatchEvent(
                    new CustomEvent("axesChangeValue", {
                        detail: {
                            axes_index: index,
                            value: axe
                        }
                    })
                )
            }

            if(axe < 0.11 && axe > -0.11){
                document.dispatchEvent(
                    new CustomEvent("axesReleased", {
                        detail: {
                            axes_index: index,
                            value: 0
                        }
                    })
                )
            }
        })




            oldGamepad = gamepad;
    
            
        
    }



}

export default Controller;
