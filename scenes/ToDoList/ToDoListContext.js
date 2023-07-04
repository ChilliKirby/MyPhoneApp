import { createContext, useReducer, useMemo, useContext } from 'react';
import { getData, storeData, c, printAsyncStorage } from '../../utilities/AsyncStorage';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {

   
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    
    //cache tasks so they do not calculate on re-renders
    //   const value = useMemo(
    //     () => ({ ...tasks, tasksReducer}),
    //         [tasks],
    //   );


    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

function tasksReducer(tasks, action) {
   

    switch (action.type) {
        case 'ADD_TO_LIST': {
            console.log("add to list");
            console.log(action.title);
            console.log("before copy");
            // let copy = [...tasks];
            // copy = [...tasks, {title: action.title, text: action.task}];
            // console.log("after copy");


            // return [...tasks, {
            //     id: action.title,
            //     text: action.task,

            // }];


            //storeData(copy);
            //return copy;



            ////////////////////////////////////////////
            // console.log(tasks[0].title);
            // console.log(tasks[1].title);
            storeData(tasks);
            printAsyncStorage();
            AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (error, stores) => {
                  stores.map((result, i, store) => {
                    console.log({ [store[i][0]]: store[i][1] });
                    return true;
                  });
                });
              });
            console.log("finished printing keys");
            return tasks;

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
        case 'do': {
            console.log("in do");
            //let data =  getData();
            console.log("testorama");
            // console.log(action.tasks[0].title);
            return action.tasks;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

// const initialTasks = [
//     // { title: 'Philosopher’s Path', text: "ass" },
//     // { title: 'Philosopher’s ass', text: "buttz" },

// ];

// const initialTasks = () => {
//     console.log("calling data...")
//     getData();
// }

    const initialTasks = {
        
   };

export function useTasks() {
    return useContext(TasksContext);
}
