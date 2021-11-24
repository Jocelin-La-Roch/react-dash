import { ActionTypes } from "../constants/action-types"

export const setAllTasks = (tasks) => {
    return {
        type: ActionTypes.SET_ALL_TASKS,
        value: tasks
    };
};
export const setUnassignedTasks = (tasks) => {
    return {
        type: ActionTypes.SET_UNASSIGNED_TASKS,
        value: tasks
    };
};

export const setToDoTasks = (tasks) => {
    return {
        type: ActionTypes.SET_TODO_TASKS,
        value: tasks
    };
};

export const setOngoingTasks = (tasks) => {
    return {
        type: ActionTypes.SET_ONGOING_TASKS,
        value: tasks
    };
};


export const setFinishedTasks = (tasks) => {
    return {
        type: ActionTypes.SET_FINISHED_TASKS,
        value: tasks
    };
};

export const setCurentStatus = (status) => {
    console.log("bychrisme look qction : ")
    return {
        type: ActionTypes.SET_CURRENT_STATUS,
        value: status
    };
};

export const setCurrentTasksUser = (user) => {
    return {
        type: ActionTypes.SET_CURRENT_TASKS_USER,
        value: user
    }
}

export const setIsTasksByUser = (status) => {
    return {
        type: ActionTypes.SET_IS_TASKS_BY_USER,
        value: status
    }
}

export const selectedTask = (task) => {
    return {
        type: ActionTypes.SELECTED_TASK,
        value: task
    };
};
