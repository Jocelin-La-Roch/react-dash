import { ActionTypes } from "../constants/action-types";

const initialState = {
    allTasks: [],
    unassignedTasks: [],
    toDoTasks: [],
    ongoingTasks: [],
    finishedTasks: [],
    currentStatus: -1,
    isTasksByUser: false,
    currentTasksUser: {},
};

export const taskReducer = (state = initialState, {type, value}) => {
    let nextState;
    switch (type) {
        case ActionTypes.SET_ALL_TASKS:
            nextState = {...state, allTasks: value};
            return nextState || state;
        case ActionTypes.SET_UNASSIGNED_TASKS:
            nextState = {...state, unassignedTasks: value};
            return nextState || state;
        case ActionTypes.SET_TODO_TASKS:
            nextState = {...state, toDoTasks: value};
            return nextState || state;
        case ActionTypes.SET_ONGOING_TASKS:
            nextState = {...state, ongoingTasks: value};
            return nextState || state;
        case ActionTypes.SET_FINISHED_TASKS:
            nextState = {...state, finishedTasks: value};
            return nextState || state;
        case ActionTypes.SET_CURRENT_STATUS:
            nextState = {...state, currentStatus: value};
            return nextState || state;
        case ActionTypes.SET_IS_TASKS_BY_USER:
            nextState = {...state, isTasksByUser: value};
            return nextState || state;
        case ActionTypes.SET_CURRENT_TASKS_USER:
            nextState = {...state, currentTasksUser: value};
            return nextState || state;
        default:
            return state;
    }
};
