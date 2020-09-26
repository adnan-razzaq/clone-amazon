import React, { useContext, useReducer } from "react";

//this is a data layer
export const StateContext = React.createContext();

// this is a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// this is how to use inside a component
export const useStateValue = () => useContext(StateContext);
