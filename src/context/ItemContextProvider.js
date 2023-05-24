/* eslint-disable default-case */
import React, { useReducer, createContext } from "react";

const initialState = {
   addedItem: [],
};

const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_TASK":
         return {
            ...state,
            addedItem: [...state.addedItem, action.payload],
         };
      case "REMOVE":
         const indexR = state.addedItem.findIndex((item) => item === action.payload);
         return {
            ...state,
            addedItem: state.addedItem.filter((item) => item !== state.addedItem[indexR]),
         };
      default:
         return state;
   }
};

export const itemContext = createContext();

const ItemContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return <itemContext.Provider value={{ state, dispatch }}>{children}</itemContext.Provider>;
};

export default ItemContextProvider;
