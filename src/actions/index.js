import { ADD_REMINDER, DELETE_REMINDER, DELETE_ALL } from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        payload: {
            text: text,
            dueDate: new Date(dueDate).toDateString()
        }
    }
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        payload: id
    }
    return action;
}

export const deleteAll = (reminders) => {
    const action = {
        type: DELETE_ALL,
        payload: {
            reminders: reminders
        }
    }
    return action;
}