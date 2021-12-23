import Game from "../game/Game";

const default_game_state = {
    game: new Game()
    

}


const GameReducer = (state = default_game_state, action) => {

    return state
}

export default GameReducer;