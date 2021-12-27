class Player {

    //TODO: 
    //

    constructor(name){
        this.name = name;
        this.speed= 2.2;
        this.jumping_height= 44;
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

    move_left_or_right = (value) => {
        this.x_velocity += this.speed * value


        //absolute div
        let p2 = document.getElementById('player-2');
        p2.classList.remove(...p2.classList)
        let facing = value > 0 ? "facing-right":"facing-left";
        p2.classList.add(facing)
      //  p2.x_velocity += this.player.speed * value
    }

    set_on_top_of = (num) => {
        this.y = num - this.height;
        this.jumping = false;
        this.y_velocity = 0;
    }

};

export default Player;