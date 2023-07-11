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
            
            const copy = [...state.tasks, { title: action.title, task: action.task }];
            storeData(copy);
            return {
                ...state,
                tasks: copy,
            }
        }
        case 'DISPLAY_LIST_ITEM': {
            return {
                ...state,
                title: action.title,
                task: action.task,
            }
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        case 'LOAD_TASKS': {
            
            if (action.tasks != null) {
                return {
                    ...state,
                    tasks: action.tasks,
                };
            } else{
                return state;
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialState = {
    //todo list
    tasks: [],
    title: "test",
    task: "",

};

export function useTasks() {
    return useContext(TasksContext);
}
