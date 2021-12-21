import { combineReducers } from "redux";
import GameReducer from "./GameReducer";

const rootReducer = combineReducers({
    game_state: GameReducer,
});

export default rootReducer;