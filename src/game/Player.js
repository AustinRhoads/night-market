class Player {

    //TODO: 
    //

    constructor(name){
        this.name = name;
        this.speed= 10;
        this.jumping_height= 10;
        this.x= 100;
        this.y=100;
        this.jumping = false;
        this.width = 32;
        this.height = 32;
        this.x_velocity = 0;
        this.y_velocity = 0;
    }
    

};

export default Player;