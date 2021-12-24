 
 
 
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



}

export default Controller;
