// import { createContext, useReducer } from 'react';
// import { Text } from 'react-native';

//  export const TasksContext = createContext(null);
// // //export const TasksDispatchContext = createContext(null);

//  export const TasksProvider = ({children}) =>{

// //     //const list = new Array(50).fill(null);

//      const [state, dispatch] = useReducer(tasksReducer, initialTasks);

//     return (
//         <TasksContext.Provider value={{...state}}>
//             {/* <TasksDispatchContext.Provider value={dispatch}> */}
//                 {children}
//             {/* </TasksDispatchContext.Provider> */}
//         </TasksContext.Provider>

        
//     )
// }

// // const tasksReducer = (tasks, action) =>{
// //     switch (action.type){
// //         case "add":{
// //             return [...tasks, {
// //                 id: tasks.length + 1,
// //                 title: action.title,
// //                 text: action.text,
// //             }];
// //         }
// //     }
// // }

// const initialTasks = {
//     // tasks: [{ id: 1, title: 1, text: 'Philosopher’s Path' }],
//     tasks: [],
    
// };

// export default TasksContext;

import { createContext, useReducer } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

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
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
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
  { id: 0, title: 'Philosopher’s Path', },
  
];
