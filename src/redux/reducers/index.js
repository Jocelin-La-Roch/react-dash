import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { userReducer } from "./userReducer";
import {paramsReducer} from "./paramsReducer";

const reducers = combineReducers({
    allTasks : taskReducer,
    allUsers :  userReducer,
    params: paramsReducer
});

export default reducers;
