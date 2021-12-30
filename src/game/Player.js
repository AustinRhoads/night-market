class Player {

    //TODO: 
    //

    constructor(name, game){
        this.name = name;
        this.game = game;
        this.speed= 2.2;

        this.x= 10;
        this.y=10;
        this.jumping = false;
        this.width = 64;
        this.height = 64;
        this.jumping_height = this.height;
        this.jumping_distance = 2 * this.jumping_height;
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.jumping_speed = 32;
        this.current_jumping_height = 0;
        this.current_jumping_distance = 0;
        this.going_up = false;
        this.falling = true;
        //
    }
    
    jump = () => {

        //WORK THIS OUT SOME OTHER TIME
        if(this.jumping === false){
                let upwards_velocity = (2 * (this.jumping_height) * (this.speed)) / (this.jumping_distance) - this.current_jumping_distance;

                this.y_velocity -= upwards_velocity;
                this.y_velocity -= this.jumping_speed;
                this.jumping = true;
                this.falling = false;
                this.current_jumping_height += upwards_velocity + this.jumping_speed;
               
        }

    }

    is_inclining = (being_pressed) => {


        //WORK THIS OUT SOME OTHER TIME
        if(this.jumping === true && this.current_jumping_height < this.jumping_height && this.falling === false && being_pressed){
   
            let upwards_velocity = (2 * (this.jumping_height) * (this.speed)) / ((this.jumping_distance ) + this.current_jumping_distance);
            this.y_velocity -= upwards_velocity;
            this.current_jumping_height += upwards_velocity;
            
         
            console.log(this.current_jumping_height, this.jumping_height)
        } else if(this.jumping === true && this.current_jumping_height >= this.jumping_height ) {
            this.falling = true;
        }
    }

    is_declining = () =>{
        if(this.falling === true && this.jumping === true){

           let downwards_velocity = (2 * (this.jumping_height) * (this.speed)) / ((this.jumping_distance ) + this.current_jumping_distance);

            this.y_velocity += downwards_velocity;
            this.current_jumping_height -= downwards_velocity;
           
         
            console.log("declining")
        }
        if(this.falling === true && this.jumping === false){
            let downwards_velocity = (2 * (this.jumping_height) * (this.speed)) / (this.jumping_distance * 2 ) ;

            this.y_velocity += downwards_velocity;
            this.current_jumping_height -= downwards_velocity;
           
         
            console.log("declining")
        }
        if(this.jumping === true && this.falling === true && this.current_jumping_height < this.jumping_speed){
            this.y_velocity += this.jumping_speed;
            console.log("DID IT")
        }
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
        this.falling = false;
        this.y_velocity = 0;
        this.current_jumping_height = 0;
        this.current_jumping_distance = 0;
    }

};

export default Player;