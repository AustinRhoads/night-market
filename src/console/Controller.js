 const logKey = (e) => {
    e.preventDefault()
    console.log(e.code)
   }
 
 
 class Controller{

     connect = () => {

        //TODO:
        //1. check for game pad the put the event listeners
        // into different functions and call them accordingly.
        //
        //2. Create constructer with left right jump etc. attributes with boolean values (engine returns these to update the player's position).
        //
        //3.

        document.addEventListener('keydown', logKey);

    }



}

export default Controller;
