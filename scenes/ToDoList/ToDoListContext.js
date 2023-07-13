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

        //Save array of objects to AsyncStorage. Objects include a title(string) 
        //and a task(string). This array will be used to display information for 
        //todo list.
        case 'ADD_TO_LIST': {
            
            const copy = [...state.tasks, { title: action.title, task: action.task }];
            storeData(copy);
            return {
                ...state,
                tasks: copy,
            }
        }
        //Used to display the title and task of the list item in the 
        //list item screen.
        case 'DISPLAY_LIST_ITEM': {
            return {
                ...state,
                title: action.title,
                task: action.task,
            }
        }
        //Delete the list item from the array using the title to filter.
        case 'DELETE_LIST_ITEM': {
            const copyArr = state.tasks.filter(task => task.title !== action.title);
            storeData(copyArr);
            return{
                ...state,
                tasks: copyArr,
            };
        }
        //Load list items to be ready for display when app has started.
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
