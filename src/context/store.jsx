import React, { createContext, useReducer } from 'react';
import { Actions } from './action';


const initialState = {
  isLoggedIn: false, 
};


const reducer = (state, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return { ...state, isLoggedIn: true };
    case Actions.LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};


export const StoreContext = createContext();


export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
