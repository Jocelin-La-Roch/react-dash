import { ActionTypes } from "../constants/action-types"

export const setUserTypes = (status) => {
    return {
        type: ActionTypes.SET_USER_TYPES,
        value: status
    };
};
export const setTaskPriorities = (status) => {
    return {
        type: ActionTypes.SET_TASK_PRIORITIES,
        value: status
    };
};

export const setTaskStatus = (status) => {
    return {
        type: ActionTypes.SET_TASK_STATUS,
        value: status
    };
};

