import { createContext, useReducer, useMemo, useContext } from 'react';

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
    console.log("in dispatch");
    switch (action.type) {
        case 'ADD_TO_LIST': {
            console.log("add to list");

            return [...tasks, {
                id: action.title,
                text: action.task,

            }];
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
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialTasks = [
    { title: 'Philosopher’s Path', text: "ass" },

];

export function useTasks() {
    return useContext(TasksContext);
}
