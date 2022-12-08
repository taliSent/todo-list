import { createContext, Dispatch, FunctionComponent, useReducer } from "react";
import { FILTERS } from "../constants";
import themeReducer from "./Reducer";
import { ActionT, StateT } from "./types";

const initialValues: StateT = {
  todoList: [],
  selectedFilter: FILTERS.ALL,
  isDarkTheme: true,
  isDesktop: true,
};

export const Context = createContext(initialValues);
export const DispatchContext = createContext<Dispatch<ActionT>>(() => {});

export const ContextProvider: FunctionComponent<any> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialValues);
  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

export const withContextProvider = (Child: any) => (props: any) => {
  return (
    <ContextProvider>
      <Child {...props} />
    </ContextProvider>
  );
};
