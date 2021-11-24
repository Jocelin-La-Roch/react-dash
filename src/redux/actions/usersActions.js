import { ActionTypes } from "../constants/action-types"

export const setAllUsers = (users) => {
    return {
        type: ActionTypes.SET_ALL_USERS,
        value: users
    };
};

export const setCurrentUserStatus = (status) => {
    return {
        type: ActionTypes.SET_CURRENT_USER_STATUS,
        value: status
    };
};

export const setCurrentUser = (currentUser) => {
    return {
        type: ActionTypes.SET_CURRENT_USER,
        value: currentUser
    }
}