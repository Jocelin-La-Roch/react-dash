import { ActionTypes } from "../constants/action-types";

const initialState = {
    users: [
        {
            id: 1,
            name: "collaborateur",
            sub_name: "bona",
            email: "collaborateur@client.test",
            phone_number: "1010101010",
            status: "collaborator",
            password: "collaborateur",
            type: {
                id: 1,
                name: "manager"
            },
            verified: false,
        },
    ],
    currentUserStatus: "collaborator",
    currentUser: {
        id: 0
    },
};

export const userReducer = (state = initialState, {type, value}) => {
    let nextState;
    switch (type) {
        case ActionTypes.SET_ALL_USERS:
            nextState = {...state, users: value};
            return nextState || state;
        case ActionTypes.SET_CURRENT_USER_STATUS:
            nextState = {...state, currentUserStatus: value};
            return nextState || state;
        case ActionTypes.SET_CURRENT_USER:
            nextState = {...state, currentUser: value};
            return nextState || state;
        default:
            return state;
    }
};
