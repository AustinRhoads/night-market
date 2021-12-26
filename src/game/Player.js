class Player {

    //TODO: 
    //

    constructor(name){
        this.name = name;
        this.speed= 6;
        this.jumping_height= 27;
        this.x= 100;
        this.y=100;
        this.jumping = true;
        this.width = 32;
        this.height = 32;
        this.x_velocity = 0;
        this.y_velocity = 0;
    }
    
    jump(){
        if(this.jumping === false)
        this.y_velocity -= this.jumping_height
        this.jumping = true;
    }

    set_on_top_of = (num) => {
        this.y = num - this.height;
        this.jumping = false;
        this.y_velocity = 0;
    }

};

export default Player;