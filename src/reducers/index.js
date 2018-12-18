import { ADD_REMINDER, DELETE_REMINDER, DELETE_ALL}  from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';


const reminder = (action) => {
    let { text, dueDate } = action.payload;
    return {
        text: text,
        dueDate: dueDate,
        id: Math.random()
    }
}

const deleteReminder = (incoming = [], action) => {
    const reminders = incoming.filter(item => item.id !== action.payload);
    return reminders;
}

const deleteAll = (action) => {
    let { reminders } = action;
    reminders = [];
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = deleteReminder(state, action);
            bake_cookie('reminders', reminders)
            return reminders;
        case DELETE_ALL:
            reminders = deleteAll(state);
            bake_cookie('reminders', reminders)
            return reminders;
        default:
            return state;
    }
}

export default reminders;