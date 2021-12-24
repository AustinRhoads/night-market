 
 
 
 class Controller{

    constructor(){

        this.gamepad_is_connected = false;
        this.gamepad_is_controller = false;
        this.gamepad = {};

        this.keyboard_is_controller = true;
      //  this.connect()
    }

     connect = () => {

        //TODO:
        //1. check for game pad the put the event listeners
        // into different functions and call them accordingly.
        //
        //2. Create constructer with left right jump etc. attributes with boolean values (engine returns these to update the player's position).
        //
        //3.

       

        window.addEventListener("gamepadconnected", this.set_gamepad)





        document.addEventListener('keydown', this.logKey);



    }

    logKey = (e) => {
        e.preventDefault()
        console.log(e.code)
    }

    set_gamepad = (e) => {
        this.gamepad_is_connected = e.gamepad.connected;
        this.gamepad_is_controller = true;
        this.gamepad = e.gamepad
        console.log(e.gamepad)
    }

    button_pressed(button){
        if(typeof(button) == "object"){
            return button.pressed;
        }
        return button == 1.0;
    }

    controller_listen = () => {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        if(gamepads[0]){
            //console.log("gps: ",gamepads)
         var gp = gamepads[0];

         
        if (this.button_pressed(gp.buttons[0])) {
          console.log("you've pressed A")
         
          //DEBUGGER
        }

        if (this.button_pressed(gp.buttons[1])) {
          console.log("you've pressed B")
        }
        if (this.button_pressed(gp.buttons[2])) {
          console.log("you've pressed X")
        } 
        if (this.button_pressed(gp.buttons[3])) {
          console.log("you've pressed Y")
        } 
       
            let el1 = document.getElementById("axes-1");
            el1.querySelector('p').innerHTML = parseFloat(gp.axes[0].toFixed(2))

            let el2 = document.getElementById("axes-2");
            el2.querySelector('p').innerHTML = parseFloat(gp.axes[1].toFixed(2))

           
            let el3 = document.getElementById("axes-3");
            el3.querySelector('p').innerHTML = parseFloat(gp.axes[2].toFixed(2))

            
            let el4 = document.getElementById("axes-4");
            el4.querySelector('p').innerHTML = parseFloat(gp.axes[3].toFixed(2))
    
            
        }
    }



}

export default Controller;
