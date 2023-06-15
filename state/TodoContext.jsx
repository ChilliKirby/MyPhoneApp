import {createContext, useReducer } from 'react';

export const ArticlesContext = createContext();

const initialState = {
    toDoObject: {},
    list: [],
    
};

const reducer = (state, action) => {
    switch(action.type){
        case 'add': {
            return {
                ...state,
            }
        }
    }
}