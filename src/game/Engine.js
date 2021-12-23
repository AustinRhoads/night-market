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
        this.count = 0;
    }

    run = () => {
        this.count += 1;
        console.log(this.count)
       
    }

};

export default Engine;