import { createContext, useReducer, useMemo } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {


  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  //cache tasks so they do not calculate on re-renders
  const value = useMemo(
    () => ({ ...tasks, tasksReducer}),
        [tasks],
  );

  return (
    <TasksContext.Provider value={value}>
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
 // { id: 0, title: 'Philosopher’s Path', },
  
];
