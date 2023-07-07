import { createContext, useReducer, useMemo, useContext } from 'react';
import { getData, storeData, c, printAsyncStorage } from '../../utilities/AsyncStorage';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {


    const [state, dispatch] = useReducer(
        tasksReducer,
        initialState
    );


    //cache tasks so they do not calculate on re-renders
    //   const value = useMemo(
    //     () => ({ ...tasks, tasksReducer}),
    //         [tasks],
    //   );


    return (
        <TasksContext.Provider value={state}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

function tasksReducer(state, action) {


    switch (action.type) {
        case 'ADD_TO_LIST': {

            const copy = [...state, { title: action.title, text: action.task }];
            storeData(copy);

            return copy;
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        case 'LOAD_TASKS': {
            return action.tasks;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialState = {
    //todo list
    tasks: [],

};

export function useTasks() {
    return useContext(TasksContext);
}
