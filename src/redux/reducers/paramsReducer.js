import { ActionTypes } from "../constants/action-types";

const initialState = {
    userTypes: [
        {
            id: 0,
            name: ""
        },
    ],
    taskPriorities: [
        {
            id: 0,
            name: ""
        },
    ],
    taskStatus: [
        {
            id: 0,
            name: ""
        },
    ],
};

export const paramsReducer = (state = initialState, {type, value}) => {
    let nextState;
    switch (type) {
        case ActionTypes.SET_USER_TYPES:
            nextState = {...state, userTypes: value};
            return nextState || state;
        case ActionTypes.SET_TASK_PRIORITIES:
            nextState = {...state, taskPriorities: value};
            return nextState || state;
        case ActionTypes.SET_TASK_STATUS:
            nextState = {...state, taskStatus: value};
            return nextState || state;
        default:
            return state;
    }
};

